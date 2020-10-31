import styled from 'styled-components';
import theme from '../../theme';

export const SpannableItem = styled.div`
    grid-column: span ${({mobileSpan}) => mobileSpan ? mobileSpan : 3};
    ${theme.breakpoint('md')`
        grid-column: span ${({Span}) => Span ? Span : 3};

    `}
;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
`;

export const Img = styled.img`
    width: 100%;
    grid-column: ${({ImageGridColumn}) => ImageGridColumn ? ImageGridColumn : '1 / 5'};
`;


export const ImageTitle = styled.p`
    display: block;
    margin: 0;
`;

export const ImageSubtitle = styled.p`
    display: block;
    margin: 0;
`;

export const ImageTitleWrapper = styled.div`
    margin: 15px 0px;
`;


export const ImageDescription = styled.p`
    grid-column: ${({DetailsGridColumn}) => DetailsGridColumn ? DetailsGridColumn : '1 / 5'};

`;

export const ImageDetailsWrapper = styled.div`
    grid-column: ${({mobileWrapperGridColumn}) => mobileWrapperGridColumn ? mobileWrapperGridColumn : '1 / 5'};
    ${theme.breakpoint('md')`
        grid-column: ${({WrapperGridColumn}) => WrapperGridColumn ? WrapperGridColumn : '1 / 5'};

    `}
`;