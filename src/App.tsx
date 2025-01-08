import { Box, Button, Flex, Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useEffect, useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"
import { Platform } from "./services/platform-service"
import { Genre } from "./services/genre-service"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  useEffect(() => {
    document.title = "Game Hub"
  }, [])

  return (
    // | nav   | nav  |
    // | aside | main |
    <Grid 
      height={"100vh"}
      overflow={"hidden"}
      templateAreas={{
        base: `"nav" "main" "footer"`, // mobile devices (< 1024 px)
        lg: `"nav nav" "aside main" "footer footer"` // 1024 px
      }}
      templateRows={{
        base: 'auto 1fr auto',
        lg: 'auto 1fr auto'
      }}
      templateColumns={{
        base: '1fr', // 1 fraction (take all available space)
        lg: '200px 1fr' // 2 columns (200px for aside and take all available space for main contents)
      }}
      minHeight={"100vh"} // footer sits at bottom of tall screens
    > 
      {/* Top bar navigation panel */}
      <GridItem area='nav'>
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}></NavBar>
      </GridItem>
      {/* Side panel - only show for 1024 px */}
      <Show above="lg">
        <GridItem area='aside' position={"sticky"} overflowY={"auto"} paddingX={5}>
          <GenreList onSelectGenre={(genre) => { setGameQuery({...gameQuery, genre}) } } selectedGenre={gameQuery.genre}></GenreList>
        </GridItem>
      </Show>
      {/* Main contents area */}
      <GridItem area='main' overflowY={"auto"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={5}>
            <Box marginRight={2}>
              <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
        {/* Footer area */}
        <GridItem area='footer' color={"whiteAlpha.600"} textAlign={"center"} padding={4}>
          <Text fontSize={12}>© 2025 Peter Darmadji. All rights reserved.</Text>
        </GridItem>
      </GridItem>
    </Grid>
  )
}

export default App
