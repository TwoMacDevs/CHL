import styled from "styled-components";
import theme from "../theme";

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	max-width: 1125px;
	margin: ${(titleGrid) => titleGrid ? '0px auto' : '100px auto'};
	grid-column-gap: 15px;
	grid-row-gap: 45px;

	${theme.breakpoint("md")`
        grid-template-columns: repeat(12, 1fr);
    `}
`;

export const BodyText = styled.p`
	font-family: "myriad-pro";
    font-family: ${theme.font.family.primary};
    font-weight: 300;
    font-size: 24px;
`;

export const SmallText = styled(BodyText)`
    font-size: 14px;
`
export const CenteredBodyText = styled(BodyText)`
  width: 600px;
  text-align: center;
`
