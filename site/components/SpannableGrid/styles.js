import styled from 'styled-components';

export const SpannableItem = styled.div`
    grid-column: span 3;
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`;

export const Image = styled.img`
    width: 100%;
    grid-column: ${({gridColumn}) => gridColumn ? gridColumn : '1 / 4'}
`