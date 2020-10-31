import React from 'react';
import { Grid } from '../../styles';
import { SpannableItem } from './styles';

export const SpannableGrid = ({ children, items, ...props }) => {
	return (
		<Grid {...props}>
			{items.map(({image, title, subtitle, description}, key) => 
				<SpannableItem>
					
				</SpannableItem>
			)}
		</Grid>
	)
}
