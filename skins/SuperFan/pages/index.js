import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import useGlobal from '../hooks/useGlobal'
import Link from 'next/link'
import AppLayout from '../layouts/AppLayout'
import LandingLayout from '../layouts/LandingLayout'
import { Text, useColorMode } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

export default function Index({ market }) {
	const { colorMode, toggleColorMode } = useColorMode()
	const router = useRouter()
	const [state, actions] = useGlobal(['username'])
	const t = useTranslations('index')

	useEffect(() => {
		router.prefetch('/about')
	}, [])

	return (
		// <AppLayout>
		// 	{/* <h1>{t('name')}</h1> */}
		// </AppLayout>
		<AppLayout>
			<LandingLayout />
		</AppLayout>
	)
}
