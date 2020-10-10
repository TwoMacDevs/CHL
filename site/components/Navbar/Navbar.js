import { LinkWrapper, Logo, NextLink, InnerWrapper, OuterWrapper, Hamburger, ItemsToRight, Overlay, Cross } from './styles';
import Button from '../Button/'
import { useState } from 'react';
const links = [
	{
		name: 'About',
		link: '/about'
	},
	{
		name: 'Podcast',
		link: '/podcast'
	},
	{
		name: 'Walks',
		link: '/walks'
	},
	{
		name: 'International Tours',
		link: '/international_tours'
	},
	{
		name: 'Contact',
		link: '/contact'
	}
]

export const Navbar = ({...props}) => {
	const [open, setOpen] = useState(false);
	return(
		<OuterWrapper>
			<Hamburger src={'/hamburger.svg'} onClick={() => setOpen(true)}/>
			<Overlay open={open} onClick={() => setOpen(false)}/>
			<InnerWrapper {...props}>
					<Logo src={'/chl-logo.png'}/>
					<LinkWrapper open={open}>
						<Cross src={'/cross.svg'} onClick={() => setOpen(false)}/>
						<ItemsToRight>
						{links.map(({name, link}, key) => 
							<NextLink key={key} href={link}>{name}</NextLink>
						)}
						</ItemsToRight>
						<Button>Donate</Button>
					</LinkWrapper>
			</InnerWrapper>
		</OuterWrapper>
	)
}
