import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width={'300px'} overflow={'hidden'} borderRadius={'10px'} variant={'outline'} boxShadow={'lg'}>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton