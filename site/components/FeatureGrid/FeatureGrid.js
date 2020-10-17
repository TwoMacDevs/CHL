import React from 'react';
import { Wrapper, FeaturedItemAsset, FeaturedItemDetails, TextWrapper, Title } from './styles';

export const FeatureGrid = ({ children, src, title,reverse, ...props }) => {
	return ( 
		<Wrapper {...props}>
			{picture ? <FeaturedItemAsset src={src} reverse={reverse}></FeaturedItemAsset> : 'include video'}
			<FeaturedItemDetails reverse={reverse}>
				<TextWrapper>
					<Title>{title}</Title>
					{children}
				</TextWrapper>
			</FeaturedItemDetails>
		</Wrapper>
	)
}
