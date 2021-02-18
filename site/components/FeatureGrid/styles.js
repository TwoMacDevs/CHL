import styled from 'styled-components';
import theme from '../../theme';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    max-width: 1125px;
    margin: 100px auto 0px auto;
    grid-column-gap: 15px;
    ${theme.breakpoint('md')`
        grid-template-columns: repeat(12, 1fr);
    `}
`
export const FeaturedItemDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    ${theme.breakpoint('md')`
    grid-column: ${({reverse}) => reverse ? '8 / -1' : '1 / 6'};
    align-items: center;
    grid-row-start: 1;
    `}
`
export const FeaturedItemAsset = styled.img`
    width: 100%;
    /* background-image: url(${({src}) => src && src });
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain; */
    ${theme.breakpoint('md')`
    grid-column: ${({reverse}) => reverse ? '1 / 7' : '7 / 13'};
    // grid-row: 1 / 3 ;
    grid-row-start: 1;
    `}
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.p`
    display: inline-block;
    font-size: 42px;
    margin: 0px;
    font-style: italic;
    font-weight: 900;
    font-family: ${theme.font.family.secondary}
`
export const TitleMobileWrapper = styled.div`
    ${theme.breakpoint('md')`
        display: none;
    `}
`
export const TitleWrapper = styled.div`
    ${({mobile}) => !mobile && 'display: none;'}
    ${theme.breakpoint('md')`
        grid-column: ${({reverse}) => reverse ? '7 / -1' : '1 / 6'};
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        ${({mobile}) => mobile && 'display: none;'}
        `}
`