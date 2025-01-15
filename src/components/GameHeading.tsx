import useGenre from '@/hooks/use-genre'
import usePlatform from '@/hooks/use-platform'
import useGameQueryStore from '@/store'
import { Heading } from '@chakra-ui/react'

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = useGenre(genreId);
  
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

  // "platform" "genre" games
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginTop={1.5} marginBottom={2} fontSize={'4xl'}>
        {heading}
    </Heading>
  )
}

export default GameHeading