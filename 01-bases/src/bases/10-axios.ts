import axios from 'axios';

import type {GiphyResponse} from "../interfaces/GiphyResponse.ts";

const giphyKey = "DeMjeKZpWAbwWJVkXZPvcJQ5lj6bGIQ1";
///random?api_key=${giphyKey}
const giphyBaseUrl = `https://api.giphy.com/v1/gifs`;

const giphyApi = axios.create({
    baseURL: giphyBaseUrl,
    params: {
        api_key: giphyKey
    }
});

giphyApi.get("/random")
    .then((response: {data: GiphyResponse}) => console.log({ abc: "test", dataX: response.data.data.images.downsized_medium.url}))
    .catch((error) => {
        console.error(error);
    });

export default giphyApi;