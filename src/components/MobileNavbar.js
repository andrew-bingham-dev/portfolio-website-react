import React from 'react';
import MobileBrand from './MobileBrand';
import MobileMenuButton from './MobileMenuButton';

const MobileNavbar = () => {
	return (
		<>
			<nav className='flex sticky top-0 justify-between items-center bg-white px-2'>
				<MobileBrand />
				<MobileMenuButton />
			</nav>
		</>
	);
};

export default MobileNavbar;
