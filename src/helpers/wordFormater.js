/**
 * Clean the word from white spaces
 * Trim the word
 * @param word
 * @returns {*}
 */
export function wordClean(word: string) {
    if (!word) {
        return null;
    }
    word = word.trim();
    word = word.toLowerCase();
    return word;
}

/**
 * Convert array to object
 * @param arr
 * @returns {*}
 */
export function toObject(arr) {
    if (arr == null) {
        return {};
    }

    let rv: any = {};
    for (let i: number = 0; i < arr.length; ++i)
        rv[arr[i]] = arr[i];
    return rv;
}

/**
 * Object convert to array
 * @param obj
 * @returns {Array}
 */
export function toArray(obj) {
    return Object.keys(obj);
}


/**
 * Date as a file name
 * @param seperator
 * @returns {string}
 */
export function getToday(seperator = '-') {
    let dateobj = new Date();
    let year = dateobj.getFullYear();
    let month = dateobj.getMonth();
    let date = dateobj.getDate();
    return `${year}${seperator}${month}${seperator}${date}`;
}

/**
 * When old word search and space then search new word
 * Then remove the old word and find mean for new word
 * @param text
 * @returns {*}
 */
export function removeOldWord(text) {
    word = wordClean(text);
    if(word==="") return text;
    let spaceIndex = word.indexOf(' ');
    let textLength = word.length;
    console.log(`madd__msg_ spaceIndex->${spaceIndex}`)
    console.log(`madd__msg_ textLength->${textLength}`)

    if (spaceIndex > -1) {
        return word.substr(spaceIndex + 1, textLength - spaceIndex);
    }
    return text;
}