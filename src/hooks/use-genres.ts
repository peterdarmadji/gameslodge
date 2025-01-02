import useData from "./use-data";

export interface Genre {
	id: number;
	name: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;