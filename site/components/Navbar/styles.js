import styled from 'styled-components';
import Link from 'next/link';
import theme from '../../theme';

export const OuterWrapper = styled.div`
    position: fixed;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
    background-color: white;
    padding: 0px 15px;
    box-sizing: border-box;
`;

export const InnerWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1125px;
        margin: 0 auto;
        height: 90px;
`
export const Hamburger = styled.img`
    position: absolute;
    right: 38px;
    top: 39px;
    @media screen and (min-width: 900px) {
        display: none;
    };
`;

export const NextLink = styled.a`
    font-family: ${theme.font.family},sans-serif;
    margin-right: 25px;
    color: black;
    text-decoration: none;
    font-weight: lighter;
    ${theme.breakpoint('xs', 'lg')`
        margin-bottom: 15px;
        font-size: 24px;
    `}
`;

export const Logo = styled.img`
    width: 150px;
`;

export const LinkWrapper = styled.div` 
    ${theme.breakpoint('xs', 'lg')`
        position: fixed;
        top: 0px;
        height: 100vh;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: -300px;
        background-color: white;
        transform: translateX(${({open}) => open ? '-100%' : '0%'});
        transition: transform 0.3s;
        z-index: 2;
    `}
`;

export const ItemsToRight = styled.div`
    ${theme.breakpoint('xs', 'lg')`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 74px`
    }
    display: inline-block;
`;
export const Overlay = styled.div`
    ${theme.breakpoint('xs', 'lg')`
        position: fixed;
        top: 0px;
        background-color: black;
        left: 0px;
        height: 100vh;
        width: 100vw;
        transition: opacity 0.3s;
        opacity: ${({open}) => open ? 0.5 : 0};
        z-index: 1;
        ${({open}) => !open && 'pointer-events: none;'}
    `}
`
export const Cross = styled.img`
    position: absolute;
    top: 39px;
    right: 38px;
    ${theme.breakpoint('lg')`
        display: none;
    `}
`;