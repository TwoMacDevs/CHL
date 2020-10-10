import styled from 'styled-components'
import theme from '../../theme'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 15px;
    grid-column: span ${({span}) => span ? span : 6};
    ${theme.breakpoint('md')`
        grid-template-columns: repeat(12, 1fr);
        grid-column: span ${({span}) => span ? span : 12};
    `}
`;