import GameGrid from '@/components/GameGrid'
import GameHeading from '@/components/GameHeading'
import GenreList from '@/components/GenreList'
import PlatformSelector from '@/components/PlatformSelector'
import SortSelector from '@/components/SortSelector'
import { Grid, Show, GridItem, Box, Flex } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, // mobile devices (< 1024 px)
        lg: `"aside main"`, // 1024 px
      }}
      templateColumns={{
        base: "1fr", // 1 fraction (take all available space)
        lg: "200px 1fr", // 2 columns (200px for aside and take all available space for main contents)
      }}
    >
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
  )
}

export default HomePage