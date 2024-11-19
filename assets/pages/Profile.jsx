import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        id: '',
        email: '',
        roles: [],
        username: '',
        last_name: '',
        first_name: '',
    });

    const [formData, setFormData] = useState({
        username: '',
        last_name: '',
        first_name: '',
    });

    const [imagePreview, setImagePreview] = useState(null);

    // Simulación de la carga de los datos del perfil
    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('https://127.0.0.1:8000/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response =>  response.json())
            .then(data => {
                console.log('Datos recibidos:', data);
                setProfile(data);
                setFormData({
                    username: data.username,
                    last_name: data.last_name,
                    first_name: data.first_name,
                });
            })
            .catch(error => { console.error('Error:', error); });
        // Para la demo, cargamos datos estáticos
        // setProfile({
        //     id: '123',
        //     email: 'user@examplasde.com',
        //     roles: ['ROLE_USER'],
        //     username: 'user123',
        //     last_name: 'Doe',
        //     first_name: 'John',
        // });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí deberías hacer la petición a tu backend para actualizar los datos
        console.log('Datos actualizados:', formData);
        console.log('Imagen seleccionada:', imagePreview);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        value={profile.email}
                        disabled
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Roles</label>
                    <input
                        type="text"
                        value={profile.roles.join(', ')}
                        disabled
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;
