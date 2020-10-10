import { Wrapper } from './styles';
import Navbar from '../Navbar/';
import Footer from '../Footer/';

export const Layout = ({ children, ...props }) => {
	return(
		<Wrapper {...props}>
			<Navbar/>
			<main>
				{children}
			</main>
			<Footer/>
		</Wrapper>
	)
}
