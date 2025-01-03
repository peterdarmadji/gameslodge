import useGenres, { Genre } from "@/hooks/use-genres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import ListItemSkeleton from "./ListItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre} : Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <List>
      {isLoading && skeletons.map(skeleton => (
        <ListItemSkeleton key={skeleton}></ListItemSkeleton>
      ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button whiteSpace={"wrap"} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
