'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const router = useRouter();

	const handleNavigation = () => {
		router.push('/contact');
	};

	const handelSearhUser = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`/user/${value}`);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-6 '>
			<div className='mb-4 text-2xl font-bold'>Main Page</div>
			<div className='mb-4'>
				<button
					onClick={handleNavigation}
					className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200'
				>
					Go to Contact
				</button>
			</div>
			<div className='mb-4'>
				<button
					onClick={() => router.push('dashboard')}
					className='px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200'
				>
					Go to Dashboard Page
				</button>
			</div>

			<form onSubmit={handelSearhUser} className='flex items-center'>
				<input
					type='text'
					onChange={(e) => setValue(e.target.value)}
					value={value}
					className='text-black px-4 py-2 border rounded-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
					placeholder='Search User'
				/>
				<button
					type='submit'
					className='px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 transition duration-200'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Page;
