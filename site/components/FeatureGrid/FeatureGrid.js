import React from 'react';
import { Wrapper } from './styles';

export const FeatureGrid = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
