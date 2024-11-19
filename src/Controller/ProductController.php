<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/products')]
class ProductController extends AbstractController
{

    private EntityManagerInterface $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    #[Route('/', name: 'app_product', methods: ['GET'])]
    public function index(ProductRepository $productRepository): JsonResponse
    {
        $products = $productRepository->findAll();
        return $this->json($products);


//        return new JsonResponse( [
//            'product' => [
//                'id' => 1,
//                'name' => 'Product 1',
//                'description' => 'This is a product',
//                'price' => 1000
//            ]
//        ]);
    }

    #[Route('/', name: 'app_product_show', methods: ['POST'])]
    public function create(Request $request, ProductRepository $productRepository): Response
    {
        $data = json_decode($request->getContent(), true);

        $product = new Product();
        $product->setName($data['name']);
        $product->setDescription($data['description']);
        $product->setPrice($data['price']);

        // Persistir el producto en la base de datos
        $this->entityManager->persist($product);
        $this->entityManager->flush();

        return $this->json($product, 201);
    }

}
