<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/user')]
final class UserController extends AbstractController
{
    private EntityManagerInterface $entityManager;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }


    #[Route('/', name: 'app_user_index', methods: ['GET'])]
    public function index(UserRepository $userRepository): JsonResponse
    {
        $users = $userRepository->findAll();
        return $this->json($users);
    }

    #[Route('/', name: 'app_user_new', methods: ['POST'])]
    public function new(Request $request, UserRepository $userRepository, JWTTokenManagerInterface $jwtManager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $data = json_decode($request->getContent(), true);

        $user = new User();
        $user->setEmail($data['email']);
        $user->setRoles($data['roles']);
        $user->setPassword($data['password']);
        $user->setUsername($data['username']);
        $user->setFirstName($data['firstName']);
        $user->setLastName($data['lastName']);

        $plainPassword = $user->getPassword();

        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plainPassword
        );
        $user->setPassword($hashedPassword);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $token = $jwtManager->create($user);

        return new JsonResponse([
            'success' => true,
            'message' => 'Usuario creado correctamente',
            'token' => $token
        ]);
    }

    #[Route('/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(User $user, UserRepository $userRepository): Response
    {
        $user = $userRepository->find($user->getId());
        return $this->json($user, 200);
    }

    #[Route('/{id}/edit', name: 'app_user_edit', methods: ['POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository): Response
    {
        $data = json_decode($request->getContent(), true);

        $user = $userRepository->find($user->getId());
        $user->setEmail($data['email'] ?? $user->getEmail());
        # $user->setRoles($data['roles'] ?? $user->getRoles());
        $user->setPassword($data['password'] ?? $user->getPassword());
        $user->setUsername($data['username'] ?? $user->getUsername());
        $user->setFirstName($data['firstName'] ?? $user->getFirstName());
        $user->setLastName($data['lastName'] ?? $user->getLastName());

        $this->entityManager->flush();

        return $this->json($user, 200);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        $user = $userRepository->find($user->getId());

        $this->entityManager->remove($user);
        $this->entityManager->flush();

        return $this->json(null, 204);
    }
}
