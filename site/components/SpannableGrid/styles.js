import styled from 'styled-components';
import theme from '../../theme';

export const SpannableItem = styled.div`
    grid-template-columns: ${({galleryItemsColumns}) => galleryItemsColumns ? `repeat(${galleryItemsColumns}, 1fr)` : `repeat(4, 1fr)`};
    grid-column: span ${({mobileSpan}) => mobileSpan ? mobileSpan : 3};
    ${theme.breakpoint('md')`
        grid-column: span ${({span}) => span ? span : 3};
        grid-template-columns: repeat(4, 1fr);
    `}
;
    width: 100%;
    display: grid;
    grid-column-gap: 15px;
`;

export const Img = styled.img`
    width: 100%;
    padding-bottom: 15px;
    grid-column: ${({mobileImageGridColumn}) => mobileImageGridColumn ? mobileImageGridColumn : '1 / 5'};
    ${({gridRowOne}) => gridRowOne && 'grid-row-start: 1;'}
    ${theme.breakpoint('md')`
        grid-column: ${({imageGridColumn}) => imageGridColumn ? imageGridColumn : '1 / 5'};
    `}
`;


export const ImageTitle = styled.p`
    display: block;
    margin: 0;
    font-size: 24px;
    font-family: ${theme.font.family.primary};
    font-weight: 300;
`;

export const ImageSubtitle = styled.p`
    display: block;
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    font-family: ${theme.font.family.primary};
    color: #5F5F5F;
    font-size: 12px;
`;

export const ImageTitleWrapper = styled.div`
    margin: 0px 0px 15px 0px;
`;


export const ImageDescription = styled.p`
    grid-column: ${({DetailsGridColumn}) => DetailsGridColumn ? DetailsGridColumn : '1 / 5'};
    font-family: ${theme.font.family.primary};
    font-weight: 300;
`

export const ImageDetailsWrapper = styled.div`
    grid-column: ${({mobileWrapperGridColumn}) => mobileWrapperGridColumn ? mobileWrapperGridColumn : '1 / 5'};
    ${theme.breakpoint('md', 'xs')`
        ${({gridRowOne}) => gridRowOne && 'grid-row-start: 1;'}
    `
    }
    ${theme.breakpoint('md')`
        grid-column: ${({WrapperGridColumn}) => WrapperGridColumn ? WrapperGridColumn : '1 / 5'};
    `}
`;