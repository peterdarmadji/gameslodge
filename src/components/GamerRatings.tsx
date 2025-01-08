import React from "react";
import { Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Game } from "@/services/game-service";

interface Props {
  game: Game;
}

const GamerRatings = ({ game }: Props) => {
  return (
    <HStack spacing={2}>
      <Icon color={"yellow.400"} as={FaStar}></Icon>
      <Text
        color={
          game.rating >= 4.2
            ? "green.400"
            : game.rating >= 3.5
            ? "yellow.400"
            : "red.400"
        }
        fontSize={16}
        fontWeight={"bold"}
      >
        {game.rating}
      </Text>
    </HStack>
  );
};

export default GamerRatings;
