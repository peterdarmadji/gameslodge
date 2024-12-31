import { Game } from '@/hooks/use-games'
import { Card, CardBody, Heading, Icon, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card maxW={'sm'} overflow={'hidden'} borderRadius={'10px'} variant={'outline'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)}></PlatformIconList>
        <Text color={
          (game.rating >= 4.20) ? "green.400" : "yellow.400" 
          }>Rating: {game.rating}</Text>
      </CardBody>
    </Card>
  )
}

export default GameCard