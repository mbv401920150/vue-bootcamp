import type {GiphyResponse} from "../interfaces/GiphyResponse.ts";

const giphyKey = "DeMjeKZpWAbwWJVkXZPvcJQ5lj6bGIQ1";
const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}`;

fetch(giphyUrl, {method: "GET"})
    .then(response => response.json())
    .then((body: GiphyResponse) => console.log(body.data.images.downsized_medium.url))
    .catch((error) => {
        console.error(error);
    });


