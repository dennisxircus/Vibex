import { Fragment } from 'react'
import {
	Box,
	HStack,
	Container,
	Img,
	Spacer,
	Heading,
	IconButton,
	Stack,
	Text,
	Icon,
	Flex,
} from '@chakra-ui/react'
import { MdMenu, MdAccountCircle, MdAccountBalanceWallet } from 'react-icons/md'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
export const AppHeader = ({ children }) => (
	<Box bg='green.300' py={10} pos='fixed' w='full'>
		<Container maxW='full'>
			<HStack>{children}</HStack>
		</Container>
	</Box>
)

export const AppSpacer = () => <Box h='72px' />

export const AppBrand = ({ logo, title = 'Vibex' }) => (
	<HStack w='full'>
		{logo ? (
			<Img src={logo} w='50px' />
		) : (
			<Heading as='h1' size='md' mr={10} color='white' ml={5}>
				{title}
			</Heading>
		)}
		<Navigation />
		<IconButton
			display={{ base: 'inline-block', md: 'none' }}
			colorScheme='white'
			aria-label='Menu'
			size='lg'
			fontSize='30px'
			icon={<MdMenu />}
		/>
	</HStack>
)

const NavLinks = ['Explore', 'Creators', 'Leaderboard', 'Blog', 'About']
export const Navigation = ({ navItems = NavLinks }) => (
	<Fragment>
		<Stack direction='row' spacing='24px'>
			{navItems.map((item, index) => (
				<Link key={index} href='{`/${item}`}'>
					<Text color='white' _hover={{ cursor: 'pointer' }}>
						{item}
					</Text>
				</Link>
			))}
		</Stack>
		<Spacer />
		<Flex align='center' justify='end'>
			<IconButton
				display={{ base: 'none', md: 'inline-block' }}
				colorScheme='white'
				aria-label='Menu'
				size='lg'
				fontSize='30px'
				icon={<MdAccountCircle />}
			/>
			<IconButton
				display={{ base: 'none', md: 'inline-block' }}
				colorScheme='white'
				aria-label='Menu'
				size='lg'
				fontSize='30px'
				icon={<MdAccountBalanceWallet />}
			/>
		</Flex>
	</Fragment>
)
