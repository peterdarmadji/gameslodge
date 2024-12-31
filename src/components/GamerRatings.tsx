import React from 'react'
import { Text } from '@chakra-ui/react'
import { Game } from '@/hooks/use-games'

interface Props {
    game: Game
}

const GamerRatings = ({game}: Props) => {
  return (
    <Text color={
        game.rating >= 4.20 ? "green.400" : game.rating >= 3.5 ? "yellow.400" : "red.400" 
        }>Rating: {game.rating}
    </Text>
  )
}

export default GamerRatings