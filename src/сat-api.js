import axios from 'axios';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(resp => {
    return resp.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_tIirL8Qg8RxNFNZCMuSncQZpbuMiwi9GgwkDQfVlBkDpwzxkzdgrpLJN5FRzGYzT`
    )
    .then(resp => {
      return resp.data;
    });
}
