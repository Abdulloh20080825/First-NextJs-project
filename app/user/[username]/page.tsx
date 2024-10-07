import React from 'react';

interface PageProps {
	params: {
		username: string;
	};
}

const Page: React.FC<PageProps> = ({ params }) => {
	console.log(params);
	return <div>You searched {params.username}</div>;
};

export default Page;
