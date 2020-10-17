import styled from 'styled-components';
import theme from '../../theme';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    max-width: 1125px;
    margin: 100px auto;
    grid-column-gap: 15px;
    padding: 0px 15px;
    ${theme.breakpoint('md')`
        grid-template-columns: repeat(12, 1fr);
    `}
`
export const FeaturedItemDetails = styled.div`
    display: flex;
    justify-content: center;
    ${theme.breakpoint('md')`
    grid-column: ${({reverse}) => reverse ? '7 / -1' : '1 / 5'};
    grid-row-start: 1;
    align-items: center;
    `}
`
export const FeaturedItemAsset = styled.div`
    height: 344px;
    background-image: url(${({src}) => src && src });
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    ${theme.breakpoint('md')`
    grid-column: ${({reverse}) => reverse ? '1 / 7' : '7 / 13'};
    grid-row-start: 1;
    `}
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.p`
    font-size: 42px;
    margin: 0px;
`