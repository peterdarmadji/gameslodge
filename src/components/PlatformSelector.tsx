import usePlatform from '@/hooks/use-platform';
import usePlatforms from '@/hooks/use-platforms'
import { Platform } from '@/services/platform-service';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ( {onSelectPlatform, selectedPlatformId}: Props ) => {
	const {data, error} = usePlatforms()
  const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList height={"50vh"} overflowY={'auto'}>
            {data?.results.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector