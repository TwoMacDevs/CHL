import React from 'react';
import { Wrapper } from './styles';

export const Button = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
