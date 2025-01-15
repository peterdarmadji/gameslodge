import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo2.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import SettingsPage from './SettingsPage';

const NavBar = () => {
  return (
    // Layout items in single horizontal rows
    <HStack padding={'10px'}>
        <Image src={logo} boxSize={'60px'} marginLeft={2}/>
        <SearchInput></SearchInput>
        <SettingsPage></SettingsPage>
    </HStack>
  )
}

export default NavBar