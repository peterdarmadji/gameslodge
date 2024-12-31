import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box width={{base: "100%", lg: '280px', xl: '240px'}} overflow={'hidden'} borderRadius={'10px'}>
        {children}
    </Box>
  )
}

export default GameCardContainer