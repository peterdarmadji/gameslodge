import useGenres from "@/hooks/use-genres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ListItemSkeleton from "./ListItemSkeleton";
import { Genre } from "@/services/genre-service";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"ghost"}
                onClick={() => onSelectGenre(genre)}
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
