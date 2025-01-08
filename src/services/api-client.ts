import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fa46bc378a3d402f99a5e7d4ba13e1aa'
    }
})

interface FetchResponse<T> {
  count: number;
  results: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor (endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params?: object) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {params})
      .then(res => res.data.results);
  }

  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then(res => res.data);
  }
}

export default APIClient;