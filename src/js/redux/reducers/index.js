import {GET_SHARED_COLLECTION, NEW_COLLECTION, SAVE_COLLECTION, SET_ACTIVE_COLLECTION} from "../actions/collections";
import {SET_MOVIES, IS_REQUESTING, REQUEST_ERROR, ADD_MOVIE} from "../actions/movies";
import {SET_ACTIVE_VIEW} from "../actions/visibility";
import {CONFIG_SEED_COLLECTIONS} from "../../../config";

function reducer(state, action) {
    switch (action.type) {
        case ADD_MOVIE:
            const thisMovie = {...action.movie, userRating: 1};
            const collection = {...state.collection};
            collection.movies.push(thisMovie);
            return Object.assign({}, state, {collection});
        case SET_MOVIES:
            return {...state, movies: action.movies};
        case NEW_COLLECTION:
            return {...state, collections: [...state.collections, action.collection]};
        case SAVE_COLLECTION:
            return Object.assign({}, state, {
                collections: state.collections.map((collection, index) => {
                    const collectionIndex = getCollectionIndexById(state, action.id);
                    if (index === collectionIndex) return Object.assign({}, collection, action.collection)
                    return collection
                })
            })
        case GET_SHARED_COLLECTION:
            const sharedCollection = state.collections.find((collection) => collection.id === action.id);
            return Object.assign({}, state, {sharedCollection});
        case SET_ACTIVE_COLLECTION:
            return Object.assign({}, state, {collection: action.collection});
        case IS_REQUESTING:
            return {...state, isRequesting: action.isRequesting};
        case REQUEST_ERROR:
            return {...state, requestError: action.requestError};
        case SET_ACTIVE_VIEW:
            return {...state, activeView: action.activeView};
        default:
            return state;
    }
}

function getCollectionIndexById(state, id) {
    return state.collections.map(function (x) {return x.id; }).indexOf(id);
}

const initialState = {
    activeView: ["CreateView", "CollectionView"],
    recordDetails: {},
    collections: CONFIG_SEED_COLLECTIONS,
    collection: null,
    sharedCollection: null,
    movies: [],
    isRequesting: false,
    requestError: false
};

function app(state = initialState, action) {
    return (
        reducer(state, action)
    );
}

export default app;
