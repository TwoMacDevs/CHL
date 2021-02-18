import React from 'react';
import { Wrapper } from './styles';

export const VideoBanner = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
