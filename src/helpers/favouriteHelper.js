import {wordAsObj} from './wordFormater'
/**
 * When selected Find word & add mean
 * When not-selected Find word & remove mean
 * @param selectedWordArr
 * @param word
 * @param mean
 * @param isSelected
 * @returns {*}
 */
export function updateMean(selectedWordObj:any, word:string, mean:string, isSelected:boolean) {
    //Clog:: console.log(`madd__msg_  selectedWordObj->${selectedWordObj} | word->${word} |  mean->${mean} |  isSelected->${isSelected} |`)
    // check word is exist
    let defaultValue = {};
    if(selectedWordObj==null) selectedWordObj = defaultValue;
    if ((!selectedWordObj[word]) && isSelected) {

        selectedWordObj[word] = defaultValue;
        selectedWordObj[word] = wordAsObj(mean);
    }
    else {
        if (isSelected) {
            // Add word to array
            selectedWordObj[word][mean] = mean;
        }
        else {
            delete(selectedWordObj[word][mean]);
        }

    }
    //Clog:: console.log(`madd__msg_ favouriteService:updateMean->selectedWordObj`,selectedWordObj);
    return selectedWordObj;
}