import { Button, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {

  return (
    // | nav   | nav  |
    // | aside | main |
    <Grid templateAreas={{
      base: `"nav" "main"`, // mobile devices (< 1024 px)
      lg: `"nav nav" "aside main"` // 1024 px
    }}> 
      {/* Top bar navigation panel */}
      <GridItem area='nav'>
        <NavBar></NavBar>
      </GridItem>
      {/* Side panel - only show for 1024 px */}
      <Show above="lg">
        <GridItem area='aside'>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      {/* Main contents area */}
      <GridItem area='main'>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
