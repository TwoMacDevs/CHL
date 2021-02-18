import styled from 'styled-components';
import { BodyText, Grid } from '../../styles';
import theme from '../../theme';

export const LeftSideFooter = styled.div`
    grid-column: 1 / -1;
    ${theme.breakpoint('md')`
        grid-column: 1 / 7;
        padding: 100px 0px;
        grid-row-start: 1;
    `}
`
export const RightSideFooter = styled.div`
    width: 140px;
    ${theme.breakpoint('md')`
        grid-column: 11 / -1;
        grid-row-start: 1;
    `}
`

export const GridFooter = styled(Grid)`
    color: white;
    ${theme.breakpoint('xs', 'md')`
        justify-content: center;
    `}
`

export const MediumBoxText = styled(BodyText)`
    
`
export const Wrapper = styled.div`
    
`