/**
 * Service for favourite word save in local storage
 */
import {ToastAndroid} from 'react-native';
export default {
    /**
     * Show Toast message
     * @param message
     * @returns {Promise}
     */
    show(message: string){
        return new Promise((resolve, reject) => {
            if(message.length<1) reject('No message')
            ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            resolve(true);
        });
    }
}