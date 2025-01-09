import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./services/platform-service";
import { Genre } from "./services/genre-service";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  useEffect(() => {
    document.title = "Game Hub";
  }, []);

  return (
    // | nav   | nav  |
    // | aside | main |
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile devices (< 1024 px)
        lg: `"nav nav" "aside main"`, // 1024 px
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
      templateColumns={{
        base: "1fr", // 1 fraction (take all available space)
        lg: "200px 1fr", // 2 columns (200px for aside and take all available space for main contents)
      }}
    >
      {/* Top bar navigation panel */}
      <GridItem area="nav" position={"sticky"} zIndex={"999"} top={"0"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      {/* Side panel - only show for 1024 px */}
      <Show above="lg">
        <GridItem
          area="aside"
          position={"sticky"}
          overflowY={"auto"}
          top={"80px"}
          paddingX={5}
          maxHeight="calc(100vh - 80px)"
        >
          <GenreList
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genreId: genre.id });
            }}
            selectedGenreId={gameQuery.genreId}
          ></GenreList>
        </GridItem>
      </Show>
      {/* Main contents area */}
      <GridItem area="main" maxHeight="calc(100vh - 80px)" overflow={"hidden"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={2}>
            <Box marginRight={2}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
