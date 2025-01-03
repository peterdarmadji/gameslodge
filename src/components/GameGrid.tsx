import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "@/hooks/use-games";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/use-genres";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      spacing={6}
      alignItems={"stretch"}
    >
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GameCardContainer key={Skeleton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {data.map((data) => (
        <GameCardContainer key={data.id}>
          <GameCard game={data}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
