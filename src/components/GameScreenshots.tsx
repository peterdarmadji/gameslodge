import useScreenshots from '@/hooks/use-screen-shots'
import { Image, SimpleGrid } from '@chakra-ui/react'
import { isError } from '@tanstack/react-query'
import React from 'react'

interface Props {
  gameId: number
}

const GameScreenShot = ({gameId}: Props) => {
  const {data, error, isLoading} = useScreenshots(gameId)

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
      {data?.results.map(s => <Image key={s.id} src={s.image}></Image>)}
    </SimpleGrid>
  )
}

export default GameScreenShot