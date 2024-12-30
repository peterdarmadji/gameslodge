import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fa46bc378a3d402f99a5e7d4ba13e1aa'
    }
})