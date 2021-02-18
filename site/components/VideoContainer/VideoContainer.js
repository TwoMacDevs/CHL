import React from 'react';
import { Wrapper } from './styles';

export const VideoContainer = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
