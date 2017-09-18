// React Components
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import {
    Content, Card, CardItem, Body, Item, Icon, Input, Button, List, ListItem
} from 'native-base';

// Components
import MeanList from './meanList';
import configs from '../../../configs/basic'

// Helpers
import {removeOldWord, wordClean, wordAsObj} from '../../../helpers/wordFormater'
import {updateMean} from '../../../helpers/favouriteHelper'
import favouriteSevice from '../../../services/favouriteService'
import toastService from '../../../services/toastService'
const english2sinhala = require('../../../../db/en-si.2.json');

/**
 * Manage main search functionality
 */
export default class FinderPage extends Component {
    words: any;
    timeout: any;
    defautWordEmpty: any = {};

    constructor() {
        super();
        this.state = {
            finder: 'do',
            means: [],
            selectedWords: this.defautWordEmpty
        };
        this.words = english2sinhala;

        this.findMean(this.state.finder);

        favouriteSevice.get().then((result) => {
            this.setState({selectedWords: result});
        });
    }

    /**
     * When change search call find
     * @param text
     */
    finderChangeHandler(text) {
        this.findMean(text);
    }

    /**
     * Search the mean of word
     * Wait untill the finish typing
     * @param text
     */
    findMean(text: any) {

        // Todo:: if space remove old world search for new word
        text = removeOldWord(text);

        // Update the finder value istancely
        this.setState({finder: text});

        // Remove every white space
        text = wordClean(text);

        // Make a new timeout set to go off in 800ms
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            // find the meaning for word
            if (this.words[text]) {
                this.setState({means: this.words[text]});
            }
            else {
                this.clearResult();
            }
        }.bind(this), configs.search.typeWait);
    }

    /**
     * Clear search value and search result set
     */
    clear() {
        favouriteSevice.get().then((result) => {
            console.log(`madd__msg_ return value of favouriteSevice.get()-->`, result)
        });
        this.clearFinder();
        this.clearResult();
    }

    /**
     * Clear only search bar
     */
    clearFinder() {
        //Todo:: remove state.selectedWords
        this.setState({finder: '', selectedWords: this.defautWordEmpty});
    }

    /**
     * Clear search result
     */
    clearResult() {
        this.setState({means: []});
    }

    /**
     * Selected or deselected trigger from mean
     * @param word
     * @param mean
     * @param isSelected
     */
    selectedWordHandler(word: string, mean: string, isSelected: boolean) {
        //Clog:: console.log(`madd__msg_ selected word->${word}, mean->${mean}, isSelected->${isSelected}`);
        let selectedWordObj: any = this.state.selectedWords;
        // update the means array
        let newSelectedWordObj: any = updateMean(selectedWordObj, word, mean, isSelected);
        //Clog:: console.log(`madd__msg_ FinderPage:selectedWordHandler->newSelectedWordObj`, newSelectedWordObj)
        // Update the sate object
        this.setState({selectedWords: newSelectedWordObj});
        // Show Toast message
        favouriteSevice.save(newSelectedWordObj).then((result) => {
            if (isSelected) toastService.show(`${word} favourited`);
            else toastService.show(`${word} unfavourited`);
        });
    }

    onFocusHandler() {
        console.log(`madd__msg_ onFocusHandler triggered`)
        this.clear();
    }

    render() {
        return (
            <Content>

                <Card>

                    <Item>
                        <Icon name="search"/>
                        {/* Not used TextInput bz it's width not set to wide */}
                        <Input
                            name="finder"
                            value={this.state.finder}
                            onChangeText={(text) => {
                                this.finderChangeHandler(text)
                            }}
                            onFocus={this.onFocusHandler.bind(this)}
                            placeholder="Search"/>
                        <Button title="Clear" onPress={this.clear.bind(this)}>
                            <Text>Clear</Text>
                        </Button>
                        <Button
                            onPress={() => {
                                Actions.FavouritePage();
                            }}>
                            <Text>Goto Page 2</Text>
                        </Button>

                    </Item>

                    <MeanList
                        selectedWords={this.state.selectedWords}
                        selectWord={this.selectedWordHandler.bind(this)}
                        findMean={this.findMean.bind(this)}
                        means={this.state.means}
                        finder={this.state.finder}/>
                </Card>

            </Content>
        );
    }
}
