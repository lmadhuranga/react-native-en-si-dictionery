/**
 * Service for favourite word save in local storage
 */
import {AsyncStorage} from 'react-native'
let table_name: string = 'favorite'
export default {
    /**
     * Save the mean of word
     * @param data
     * @returns {Promise}
     */
    save(data) {
        //Clog:: console.log(`madd__msg_ favourteService:save->data`,data)
        console.log(`madd__msg_ favourteService:save->data`,data)
        return new Promise((resolve, reject) => {
            try {
                AsyncStorage.setItem(table_name, JSON.stringify(data));
                resolve(data);
            } catch (error) {
                // Error saving data
                console.log(`madd__msg_ errro data save`, error);
                reject(error);
            }

        });
    },
    /**
     * Get all the saved means
     * @returns {Promise}
     */
    get() {
        return new Promise(function (resolve, reject) {
            try {
                /*const value = await AsyncStorage.getItem('@MySuperStore:key');
                 if (value !== null){
                 // We have data!!
                 console.log(value);
                 }*/
                AsyncStorage.getItem(table_name, (err, result) => {
                    //Clog:: console.log(`madd__msg_ favourteService:get->result`,result)
                    if (err) {
                        reject(err);
                        console.log(`madd__msg_ get data error`, error);
                    }
                    else resolve(JSON.parse(result));
                });
            } catch (error) {
                // Error retrieving data
                console.log(`madd__msg_ get data error`, error);
                reject(error);
            }

        });
    }
}