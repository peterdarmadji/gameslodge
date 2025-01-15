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
import useGameQueryStore from "./store";

function App() {

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
        <NavBar></NavBar>
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
          <GenreList></GenreList>
        </GridItem>
      </Show>
      {/* Main contents area */}
      <GridItem area="main" maxHeight="calc(100vh - 80px)" overflow={"hidden"}>
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <Flex marginBottom={2}>
            <Box marginRight={2}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector></SortSelector>
          </Flex>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
