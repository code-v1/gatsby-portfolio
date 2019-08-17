import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/10x.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Eric and I’m a Software Developer!" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
					As a developer, I strive to create and implement creative and broad
					solutions to problems facing users in this digital age. I want to
					bring my collaborative and diverse background to a mission-based
					environment, looking to impact its user-base and bring technology to
					all parts of the world. I want to be able to grow and continually
					improve alongside my passion, while always searching for the best
					approach to meet user and company success.
				</p>
				<Button as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
