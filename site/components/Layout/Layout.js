import { MainWrapper, Wrapper } from './styles';
import Navbar from '../Navbar/';
import Footer from '../Footer/';

export const Layout = ({ children, ...props }) => {
	return(
		<Wrapper {...props}>
			<Navbar/>
			<MainWrapper>
				{children}
			</MainWrapper>
			<Footer/>
		</Wrapper>
	)
}
