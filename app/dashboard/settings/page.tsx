'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const [privacyEnabled, setPrivacyEnabled] = useState(false);
	const router = useRouter();
	const toggleNotifications = () => {
		setNotificationsEnabled(!notificationsEnabled);
	};
	const togglePrivacy = () => {
		setPrivacyEnabled(!privacyEnabled);
	};

	return (
		<div className='flex items-center justify-center min-h-screen '>
			<div className=' p-6 rounded-lg shadow-md max-w-md w-full'>
				<h1 className='text-2xl font-semibold mb-6 text-center'>Settings</h1>

				<div className='flex justify-between items-center mb-4'>
					<span className='text-lg'>Enable Notifications</span>
					<button
						onClick={toggleNotifications}
						className={`w-10 h-6 rounded-full flex items-center border ${
							notificationsEnabled ? 'bg-blue-500' : 'bg-black'
						}`}
					>
						<div
							className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
								notificationsEnabled ? 'translate-x-4' : 'translate-x-0'
							}`}
						/>
					</button>
				</div>

				<div className='flex justify-between items-center mb-4'>
					<span className='text-lg'>Privacy Mode</span>
					<button
						onClick={togglePrivacy}
						className={`w-10 h-6 rounded-full flex items-center border ${
							privacyEnabled ? 'bg-blue-500' : 'bg-black'
						}`}
					>
						<div
							className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
								privacyEnabled ? 'translate-x-4' : 'translate-x-0'
							}`}
						/>
					</button>
				</div>

				<button
					onClick={() => router.back()}
					className='mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200'
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default SettingsPage;
