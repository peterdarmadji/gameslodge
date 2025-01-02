import { HStack, ListItem, Skeleton } from '@chakra-ui/react'
import React from 'react'

const ListItemSkeleton = () => {
  return (
	<ListItem paddingY={'5px'}>
		<HStack>
			<Skeleton
				boxSize={"32px"}
				borderRadius={8}
			></Skeleton>
		</HStack>
	</ListItem>
  )
}

export default ListItemSkeleton