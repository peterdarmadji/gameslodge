import { GameQuery } from '@/App'
import useGenre from '@/hooks/use-genre'
import useGenres from '@/hooks/use-genres'
import usePlatform from '@/hooks/use-platform'
import usePlatforms from '@/hooks/use-platforms'
import { Heading } from '@chakra-ui/react'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  // "platform" "genre" games
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginTop={1.5} marginBottom={2} fontSize={'4xl'}>
        {heading}
    </Heading>
  )
}

export default GameHeading