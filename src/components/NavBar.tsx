import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo2.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    // Layout items in single horizontal rows
    <HStack padding={'10px'}>
        <Image src={logo} boxSize={'60px'} marginLeft={2}/>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar