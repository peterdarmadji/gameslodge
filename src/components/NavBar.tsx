import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo2.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import SettingsPage from './SettingsPage';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    // Layout items in single horizontal rows
    <HStack padding={'10px'}>
      <Link to={'/gameslodge/'}>
        <Image src={logo} boxSize={'60px'} marginLeft={2} objectFit={'cover'}/>
      </Link>
        <SearchInput></SearchInput>
        <SettingsPage></SettingsPage>
    </HStack>
  )
}

export default NavBar