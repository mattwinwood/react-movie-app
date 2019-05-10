// Methods not specific to any component. As this scales we can break out into separate files and include index.js
const generateRandomID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function getRandomElementsInArray(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function getAverageRating(movies) {
    if (movies.length === 0) return 0;
    let ratingsArr = movies.map(movie => movie.userRating); // Get all properties
    const total = ratingsArr.reduce((total, currentValue) => total + currentValue, 0); // Get sum of user ratings
    const average = total / ratingsArr.length; // calc average
    return average.toFixed(1); // X.X units
}

function compareByAsc(key) {
    return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    };
}

function compareByDesc(key) {
    return function (a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
    };
}

export {generateRandomID, getRandomElementsInArray, getAverageRating, compareByAsc, compareByDesc}
