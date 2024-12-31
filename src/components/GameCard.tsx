import { Game } from '@/hooks/use-games'
import { Card, CardBody, Heading, HStack, Icon, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card maxW={'sm'} overflow={'hidden'} borderRadius={'10px'} variant={'outline'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)}></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Text color={
          game.rating >= 4.20 ? "green.400" : game.rating >= 3.5 ? "yellow.400" : "red.400" 
          }>Rating: {game.rating}</Text>
      </CardBody>
    </Card>
  )
}

export default GameCard