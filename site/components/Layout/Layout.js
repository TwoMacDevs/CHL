import React from 'react';
import { Wrapper } from './styles';

export const Layout = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
