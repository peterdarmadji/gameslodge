import { Platform } from '@/hooks/use-games'
import usePlatforms from '@/hooks/use-platforms'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ( {onSelectPlatform, selectedPlatform}: Props ) => {
	const {data, error} = usePlatforms()

	if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList height={"50vh"} overflowY={'auto'}>
            {data.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector