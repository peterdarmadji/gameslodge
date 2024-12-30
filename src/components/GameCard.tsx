import { Game } from '@/hooks/use-games'
import { Avatar, Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root maxW={'sm'} overflow={'hidden'} borderRadius={'10px'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  )
}

export default GameCard