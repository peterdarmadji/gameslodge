import { GameQuery } from '@/App'
import useGenres from '@/hooks/use-genres'
import usePlatforms from '@/hooks/use-platforms'
import { Heading } from '@chakra-ui/react'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
  const {data: genres} = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId)
  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)

  // "platform" "genre" games
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginTop={1.5} marginBottom={2} fontSize={'4xl'}>
        {heading}
    </Heading>
  )
}

export default GameHeading