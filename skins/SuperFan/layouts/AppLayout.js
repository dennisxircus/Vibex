import { Fragment, useState, useEffect, useCallback } from 'react'
import {
	Box,
	Spacer,
	Button,
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useToast,
} from '@chakra-ui/react'
import { useWallet } from 'use-wallet'

import useGlobal from '../../../pages/hooks/useGlobal'

import { AppHeader, AppBrand, AppSpacer, ConnectWallet } from '../components/Header'
import { CopyAddress } from '../components/Copy'

const AppLayout = ({ children }) => {
	return (
		<Box>
			<AppHeader>
				<AppBrand />
				<Spacer />
			</AppHeader>
			<AppSpacer />
			{children}
		</Box>
	)
}

export default AppLayout
