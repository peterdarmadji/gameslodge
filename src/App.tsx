import { Button, Grid, GridItem } from "@chakra-ui/react"

function App() {

  return (
    // | nav   | nav  |
    // | aside | main |
    <Grid templateAreas={{
      base: `"nav" "main"`, // mobile devices (< 1024 px)
      lg: `"nav nav" "aside main"` // 1024 px
    }}> 
      {/* Top bar navigation panel */}
      <GridItem area='nav' bg='coral'>Nav</GridItem>
      {/* Side panel - only show for 1024 px */}
      <GridItem area='aside' bg='gold'display={{base: "none", lg: "block"}}>Aside</GridItem>
      {/* Main contents area */}
      <GridItem area='main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  )
}

export default App
