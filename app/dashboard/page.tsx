'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
	const router = useRouter();

	const handleNavigation = (path: string) => {
		router.push(`/dashboard/${path}`);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-6 '>
			<button className='absolute top-10 left-96' onClick={() => router.back()}>
				Back
			</button>
			<h1 className='mb-6 text-3xl font-bold'>Navigation Page</h1>
			<div className='space-y-4'>
				<button
					onClick={() => handleNavigation('settings')}
					className='w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200'
				>
					Go to Settings
				</button>
				<button
					onClick={() => handleNavigation('notifications')}
					className='w-full p-3 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200'
				>
					Go to Notifications
				</button>
				<button
					onClick={() => handleNavigation('profile')}
					className='w-full p-3 text-white bg-purple-500 rounded hover:bg-purple-600 transition duration-200'
				>
					Go to Profile
				</button>
			</div>
		</div>
	);
};

export default Page;
