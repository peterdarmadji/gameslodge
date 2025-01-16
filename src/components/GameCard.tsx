import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GamerRatings from "./GamerRatings";
import getCroppedImageUrl from "@/services/image-url";
import { Game } from "@/entities/Game";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card bg={colorMode === "light" ? "gray.100" : "gray.700"} height={"100%"}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody
        display="flex"
        flexDirection="column"
        flex="1" // Allows CardBody to expand and fill available space
      >
        <Heading fontSize={"2xl"} key={game.id}>
          <Link to={"games/" + game.slug}>{game.name}</Link>
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <GamerRatings game={game}></GamerRatings>
      </CardBody>
    </Card>
  );
};

export default GameCard;
