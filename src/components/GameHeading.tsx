import { GameQuery } from '@/App'
import { Heading } from '@chakra-ui/react'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    // "platform" "genre" games
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginTop={1.5} marginBottom={2} fontSize={'4xl'}>
        {heading}
    </Heading>
  )
}

export default GameHeading