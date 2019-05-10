export const SET_ACTIVE_COLLECTION = "SET_ACTIVE_COLLECTION";
export const SET_SHARED_COLLECTION = "SET_SHARED_COLLECTION";
export const SAVE_COLLECTION = "SAVE_COLLECTION";
export const NEW_COLLECTION = "NEW_COLLECTION";

export function newCollection(collection) {
    console.log("Used newCollection()...", collection);
    return {type: NEW_COLLECTION, collection};
}

export function setSharedCollection(id) {
    console.log("Used setSharedCollection()...", id);
    return {type: SET_SHARED_COLLECTION, id};
}

export function setActiveCollection(collection) {
    console.log("Used setActiveCollection()...", collection);
    return {type: SET_ACTIVE_COLLECTION, collection};
}

export function saveCollection(collection, id) {
    console.log("Used saveCollection()...", collection);
    return {type: SAVE_COLLECTION, collection, id};
}

export function updateCollection(collection, id) {
    return dispatch => {
        dispatch(setActiveCollection(collection));
        dispatch(saveCollection(collection, id));
    }
}
