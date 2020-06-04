import axios from 'axios';

const randomMovies = ['Titanic', 'Forrest Gump', 'Good will Hunting'];

const randomMovie = randomMovies[Math.floor(Math.random() * randomMovies.length)];

export const GET_RANDOM_MOVIE = 'GET_RANDOM_MOVIE';

export function getMovie(omdbData) {
    return {
        type: GET_RANDOM_MOVIE, omdbData
    }
}

export function getRandomMovie() {
    return function (dispatch, getState) {
       return axios.get(`https://www.omdbapi.com/?t=${randomMovie}&apikey=thewdb`)
                .then(response => dispatch(getMovie(response.data)))
                .catch(error => console.error('error', error))
        
    }
}