import React from 'react';
import { BodyText, CenteredBodyText, Grid, SmallText } from '../../styles';
import { GridFooter, LeftSideFooter, MediumBoxText, RightSideFooter, Wrapper } from './styles';

export const Footer = ({...props }) => {
	return (
		<div style={{backgroundColor: 'black'}}>
			<GridFooter>
					<LeftSideFooter>
						<MediumBoxText>
						Remember your leaders, those who spoke to you the word of God. Consider the outcome of their way of life, and imitate their faith.
						</MediumBoxText>
						<SmallText>
						HEBREWS 13:7 ESV
						</SmallText>
					</LeftSideFooter>
					<RightSideFooter>
						hello hello hello
					</RightSideFooter>
			</GridFooter>
		</div>
		)
}
