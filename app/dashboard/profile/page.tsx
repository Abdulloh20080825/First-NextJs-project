'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ProfilePage: React.FC = () => {
	const router = useRouter();
	const user = {
		name: 'Abdulloh',
		email: 'abdullohkurbonov2008@gmail.com',
	};

	return (
		<div className='flex items-center justify-center min-h-screen '>
			<div className=' p-6 rounded-lg shadow-md max-w-md w-full text-center'>
				<h1 className='text-2xl font-semibold mb-2'>{user.name}</h1>
				<p className='text-gray-600 mb-4'>{user.email}</p>
				<button
					onClick={() => router.back()}
					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default ProfilePage;
