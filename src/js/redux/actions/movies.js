import axios from "axios/index";
import {CONFIG_API_KEY} from "../../../config";

export const SET_MOVIES = "SET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const IS_REQUESTING = "IS_REQUESTING";
export const REQUEST_ERROR = "REQUEST_ERROR";

export function isRequesting(isRequesting) {
    return {type: IS_REQUESTING, isRequesting};
}

export function requestError(bool) {
    return { type: 'REQUEST_ERROR', requestError: bool };
}

export function setMovies(movies) {
    return {type: SET_MOVIES, movies};
}

export function addMovie(movie) {
    return {type: ADD_MOVIE, movie};
}

export function getMovies(searchTerm) {
    return dispatch => {
        dispatch(isRequesting(true));
        axios.get("http://www.omdbapi.com/?s=" + searchTerm + "&type=movie&r=json&plot=full&apikey=" + CONFIG_API_KEY)
             .then(response => dispatch(setMovies(response.data.Search)))
             .then(res => dispatch(isRequesting(false)))
             .catch(e => dispatch(requestError(true)))
    }
}


