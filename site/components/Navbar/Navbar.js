import React from 'react';
import { Wrapper } from './styles';

export const Navbar = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
