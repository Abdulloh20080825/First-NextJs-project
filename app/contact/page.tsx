'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const router = useRouter();
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ name, email, message });
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen p-6 '>
			<button className='absolute top-10 left-96' onClick={() => router.back()}>
				Back
			</button>
			<h1 className='mb-6 text-3xl font-bold'>Contact Us</h1>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-md space-y-4 border p-6 rounded shadow-md'
			>
				<div>
					<label className='block mb-1 font-medium' htmlFor='name'>
						Name
					</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className=' w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent'
						required
					/>
				</div>
				<div>
					<label className='block mb-1 font-medium' htmlFor='email'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=' w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent'
						required
					/>
				</div>
				<div>
					<label className='block mb-1 font-medium' htmlFor='message'>
						Message
					</label>
					<textarea
						id='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className=' w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent'
						rows={4}
						required
					/>
				</div>
				<button
					type='submit'
					className='w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200'
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
