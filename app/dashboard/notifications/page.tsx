'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const NotificationsPage: React.FC = () => {
	const router = useRouter();
	return (
		<div className='flex items-center justify-center min-h-screen '>
			<div className='p-6  rounded shadow-md max-w-md w-full text-center'>
				<h1 className='text-2xl font-semibold mb-4'>Notifications</h1>
				<p className='text-gray-600'>You have no new notifications.</p>

				<button
					onClick={() => window.location.reload()}
					className='mt-4 mx-5 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200'
				>
					Refresh
				</button>
				<button
					onClick={() => router.back()}
					className='mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200'
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NotificationsPage;
