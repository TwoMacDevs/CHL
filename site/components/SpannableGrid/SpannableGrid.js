import React from 'react';
import { Wrapper } from './styles';

export const SpannableGrid = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
