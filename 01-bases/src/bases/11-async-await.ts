// export const getImage = async () => {
//     return 'https://aaaa'
// }
//
// export const getImagePromise = () => {
//     return new Promise((resolve) => {
//         resolve('https://abba')
//     })
// };


import giphyApi from './10-axios';
import type {GiphyResponse} from "../interfaces/GiphyResponse.ts";

const resp = await giphyApi.get<GiphyResponse>("/random")

console.log({ method: 'base-11', resp: resp.data.data.images.original.url});