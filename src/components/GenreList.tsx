import useGenres from '@/hooks/use-genres'

const GenreList = () => {
  const {data, error, isLoading} = useGenres()

  return (
    <ul>
      {data.map(data => <li key={data.id}>{data.name}</li>)}
    </ul>
  )
}

export default GenreList