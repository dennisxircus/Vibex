import { Fragment } from 'react'
import { Box, Text, Flex, Spacer, IconButton } from '@chakra-ui/react'
// import { } from '@chakra-ui/icons'
import { MdVolumeOff } from 'react-icons/md'

export const Landing = ({ children }) => (
	<Box d='flex' bg='green.300' h='100vh' pt={10} justifyContent='center' px={10}>
		<TextLayout />
		<CardLanding />
	</Box>
)

export const TextLayout = () => (
	<Fragment>
		<Flex flexDirection='column' pl={8} pr={16}>
			<Text fontSize='6xl' color='white' lineHeight='1.25'>
				Become the next big influence
			</Text>
			<Text fontSize='xl' color='white' mt={10}>
				Discover how can you make yourself the next big star
			</Text>
			<Box d='flex' mt={10}>
				<Box mr={4}>
					<Box as='button' px={20} py={4} bg='green.800' color='white' borderRadius='50px'>
						For creators
					</Box>
				</Box>
				<Box>
					<Box as='button' px={20} py={4} bg='white' color='green.800' borderRadius='50px'>
						For followers
					</Box>
				</Box>
			</Box>
		</Flex>
	</Fragment>
)

export const CardLanding = ({ image = 'https://picsum.photos/id/1005/500/500' }) => (
	<Box
		w='400px'
		h='500px'
		bgImage={image}
		backgroundPosition='fill'
		backgroundRepeat='no-repeat'
		bgSize='cover'>
		<Flex display='flex' flexDirection='column'>
			<Box pl={4} pt={6}>
				<IconButton
					size='lg'
					variant='ghost'
					color='white'
					aria-label='volume'
					icon={<MdVolumeOff />}
					_hover={{ color: 'green.800' }}
				/>
			</Box>
			<Spacer />
			<Box pos='absolute' pl={4} bottom='120px'>
				<Text fontSize='xl' color='white'>
					MATHEW ANDRES
				</Text>
				<Text fontSize='xl' color='white'>
					1.4 Million Followers
				</Text>
			</Box>
		</Flex>
	</Box>
)
