import { Game } from '@/hooks/use-games'
import { Card, CardBody, Heading, HStack, Icon, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import GamerRatings from './GamerRatings'
import getCroppedImageUrl from '@/services/image-url'

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card width={'300px'} overflow={'hidden'} borderRadius={'10px'} variant={'outline'} boxShadow={'lg'}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)}></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <GamerRatings game={game}></GamerRatings>
      </CardBody>
    </Card>
  )
}

export default GameCard