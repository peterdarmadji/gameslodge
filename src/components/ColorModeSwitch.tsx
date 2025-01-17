import { HStack, Text, useColorMode } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react';

const ColorModeSwitch = () => {
	const {colorMode, toggleColorMode} = useColorMode();

	return (
		<HStack>
				<Switch colorScheme={'green'} isChecked={colorMode === "dark"} onChange={toggleColorMode}></Switch>
				<Text fontWeight={'bold.200'} whiteSpace={'nowrap'}>Dark Mode</Text>
		</HStack>
	)
}

export default ColorModeSwitch