import useGenres from "@/hooks/use-genres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem
} from "@chakra-ui/react";
import ListItemSkeleton from "./ListItemSkeleton";
import useGameQueryStore from "@/store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId) 
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3} marginTop={3}>Genres</Heading>
      <List marginBottom={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItemSkeleton key={skeleton}></ListItemSkeleton>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"2px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              ></Image>
              <Button
                justifyContent={"flex-start"}
                width={"100%"}
                textAlign={"left"}
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"ghost"}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
