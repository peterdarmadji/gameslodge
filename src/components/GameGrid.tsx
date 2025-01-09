import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import useGames from "@/hooks/use-games";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box id="scrollableDiv" height={"800px"} overflow={"auto"}>
      <InfiniteScroll
        scrollableTarget="scrollableDiv"
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            alignItems={"stretch"}
            padding={"10px"}
          >
            { isFetchingNextPage &&
              skeletons.map((Skeleton) => (
                <GameCardContainer key={Skeleton}>
                  <GameCardSkeleton></GameCardSkeleton>
                </GameCardContainer>
              ))}
          </SimpleGrid>
        }
        dataLength={fetchedGamesCount} // total number of items fetched so far
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          alignItems={"stretch"}
          padding={"10px"}
        >
          {isLoading &&
            skeletons.map((Skeleton) => (
              <GameCardContainer key={Skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))}

          {/* "Load more" queries */}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
