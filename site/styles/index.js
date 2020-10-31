import styled from "styled-components";
import theme from "../theme";

export const Grid = styled.div`
<<<<<<< HEAD
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	max-width: 1125px;
	margin: 100px auto;
	grid-column-gap: 15px;
	grid-row-gap: 45px;

	${theme.breakpoint("md")`
=======
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    max-width: 1125px;
    margin: 100px auto;
    grid-column-gap: 15px;
    ${theme.breakpoint('md')`
>>>>>>> dc8e262417c2a525eb2dbd6ab663f73916dcceee
        grid-template-columns: repeat(12, 1fr);
    `}
`;

export const BodyText = styled.p`
	font-family: "myriad-pro";
`;
