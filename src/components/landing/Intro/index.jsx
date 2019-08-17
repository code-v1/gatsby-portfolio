import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/tinker-dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hello There!</h1>
				<h4>
					I’m Eric and I love to write Software and tinker with technologies
				</h4>
				<Button as={AnchorLink} href="#contact">
					Reach Me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Eric and I’m a Software Developer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
