import CriticScore from "@/components/CriticScore";
import DefinitionItem from "@/components/DefinitionItem";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenShot from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/use-game";
import { Grid, GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameScreenShot gameId={game.id}></GameScreenShot>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
