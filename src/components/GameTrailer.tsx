import useTrailers from "@/hooks/use-trailers";
import React from "react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return <video src={first.data[480]} poster={first.preview} controls></video>;
};

export default GameTrailer;
