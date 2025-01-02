import useGenres from '@/hooks/use-genres'
import React from 'react'

const GenreList = () => {
  const {genres, error, isLoading} = useGenres()

  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList