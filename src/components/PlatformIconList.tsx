import { Platform } from '@/hooks/use-games'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { BsGlobe } from 'react-icons/bs';
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  // Create an array of all slugs from the platforms
  const allSlugs = platforms.map((p) => p.slug);

  // Create a unique set of slugs
  const uniqueSlugs = [...new Set(allSlugs)];

  // Log them to see if there's any unexpected or missing slug
  console.log("Unique slugs in PlatformIconList:", uniqueSlugs);

  const iconMap: {[key: string]: IconType} = {
    pc: BsGlobe,
    playstation: BsGlobe,
    xbox: BsGlobe,
    mac: BsGlobe,
    linux: BsGlobe,
    android: BsGlobe,
    ios: BsGlobe,
    nintendo: BsGlobe,
    web: BsGlobe,
  }

  return (
    // <HStack>
    //   {/* {platforms.map((p) => {
    //     // 2) Log each individual platform
    //     console.log("Platform object:", p);

    //     // 3) Log the slug-to-icon lookup
    //     console.log("Slug:", p.slug, " => Icon:", iconMap[p.slug]);

    //     return <Icon key={p.id} as={iconMap[p.slug] || BsGlobe} />
    //   }
    //   )} */}

    //   {/* {platforms.map((platform) => (<Icon as={iconMap[platform.slug]}></Icon>))} */}
    // </HStack>
    <div>
      <Icon as={BsGlobe} boxSize="2rem" color="blue" />
    </div>
  );  
}

export default PlatformIconList