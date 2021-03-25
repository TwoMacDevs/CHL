import React from 'react';
import { Grid } from '../../styles';
import { SpannableItem, Img, ImageTitle, ImageSubtitle, ImageDescription, ImageTitleWrapper, ImageDetailsWrapper } from './styles';

export const SpannableGrid = ({ children, items, span, mobileSpan, WrapperGridColumn, mobileWrapperGridColumn, mobileImageGridColumn, galleryItemsColumns, gridRowOne, imageGridColumn, titleGrid, ...props }) => {
	return (
		<React.Fragment>
		{titleGrid && <Grid style={{margin: '100px auto 15px auto'}}>{titleGrid}</Grid>}
		<Grid titleGrid={titleGrid} {...props}>
			{items.map(({image, title, subtitle, description}, key) => 
				<SpannableItem key={key} span={span} mobileSpan={mobileSpan} galleryItemsColumns={galleryItemsColumns}>
					{image && <Img imageGridColumn={imageGridColumn} mobileImageGridColumn={mobileImageGridColumn} gridRowOne={gridRowOne} src={image}></Img>}
					<ImageDetailsWrapper gridRowOne WrapperGridColumn={WrapperGridColumn} mobileWrapperGridColumn={mobileWrapperGridColumn}>
						<ImageTitleWrapper>
							{title && <ImageTitle>{title}</ImageTitle>}
							{subtitle && <ImageSubtitle>{subtitle}</ImageSubtitle>}
						</ImageTitleWrapper>
						{description && <ImageDescription>{description}</ImageDescription>}
					</ImageDetailsWrapper>
				</SpannableItem>
			)}
		</Grid>
		</React.Fragment>
	)
}
