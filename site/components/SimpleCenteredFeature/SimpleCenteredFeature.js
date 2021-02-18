import React from 'react';
import { Grid } from '../../styles';
import { Wrapper } from './styles';

export const SimpleCenteredFeature = ({ children, ...props }) => {
	return (
		<Wrapper {...props}>
			{children}
		</Wrapper>
		)
}
