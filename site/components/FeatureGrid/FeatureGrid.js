import React from 'react';
import { Wrapper, FeaturedItemAsset, FeaturedItemDetails, TextWrapper, Title, TitleWrapper } from './styles';

export const FeatureGrid = ({ children, src, title, reverse, picture, ...props }) => {
	return ( 
		<Wrapper {...props}>
			<TitleWrapper mobile reverse={reverse}>
				<Title >{title}</Title>
			</TitleWrapper>
			{picture ? <FeaturedItemAsset src={src} reverse={reverse}></FeaturedItemAsset> : 'include video'}
			<FeaturedItemDetails reverse={reverse}>
				<TextWrapper>
					<TitleWrapper reverse={reverse}>
						<Title >{title}</Title>
					</TitleWrapper>
					{children}
				</TextWrapper>
			</FeaturedItemDetails>
		</Wrapper>
	)
}
