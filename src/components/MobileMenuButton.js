import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuOptions from './MenuOptions';

const MobileMenuButton = () => {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	function handleClick() {
		setMenuIsVisible(!menuIsVisible);
	}

	return (
		<>
			<button className='p-4' onClick={handleClick}>
				<FontAwesomeIcon icon={faBars} size='lg' />
			</button>
			{menuIsVisible ? <MenuOptions /> : null}
		</>
	);
};

export default MobileMenuButton;
