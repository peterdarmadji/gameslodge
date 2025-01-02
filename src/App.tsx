import { Button, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/use-genres"
import PlatformSelector from "./components/PlatformSelector"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    // | nav   | nav  |
    // | aside | main |
    <Grid templateAreas={{
      base: `"nav" "main"`, // mobile devices (< 1024 px)
      lg: `"nav nav" "aside main"` // 1024 px
    }}
    templateColumns={{
      base: '1fr', // 1 fraction (take all available space)
      lg: '200px 1fr' // 2 columns (200px for aside and take all available space for main contents)
    }}
    > 
      {/* Top bar navigation panel */}
      <GridItem area='nav'>
        <NavBar></NavBar>
      </GridItem>
      {/* Side panel - only show for 1024 px */}
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => { setSelectedGenre(genre) } } selectedGenre={selectedGenre}></GenreList>
        </GridItem>
      </Show>
      {/* Main contents area */}
      <GridItem area='main'>
        <PlatformSelector></PlatformSelector>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
