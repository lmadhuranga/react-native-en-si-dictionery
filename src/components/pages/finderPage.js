import React, {Component} from 'react';
import {Text} from 'react-native';
const english2sinhala = require('../../../db/en-si.2.json');
import MeanList from './commen/meanList';
import configs from '../../configs/basic'
import {removeOldWord, wordClean} from '../../helpers/wordFormater'
import {
    Content, Card, CardItem, Body, Item, Icon, Input, Button, List, ListItem
} from 'native-base';

/**
 * Manage main search functionality
 */
export default class FinderPage extends Component {
    words: any;
    timeout: any;

    constructor() {
        super();
        this.state = {
            finder: 'do',
            means: []
        };
        this.words = english2sinhala;

        this.findMean(this.state.finder);
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
     * Wait untile the finish typing
     * @param text
     */
     findMean(text:any){

        //Todo:: if space remove old world search for new word
        text = removeOldWord(text);

        //update the finder value istancely
        this.setState({finder: text});

        // remove every white space
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
        this.clearFinder();
        this.clearResult();
    }

    /**
     * Clear only search bar
     */
    clearFinder() {
        this.setState({finder: ''});
    }

    /**
     * Clear search result
     */
    clearResult() {
        this.setState({means: []});
    }

    render() {
        return (
            <Content>
                <Card>
                    <Item>
                        <Icon name="search"/>
                        <Input
                            name="finder"
                            value={this.state.finder}
                            onChangeText={(text) => {
                                this.finderChangeHandler(text)
                            }}
                            placeholder="Search"/>

                        <Button title="Clear" onPress={this.clear.bind(this)}><Text>Clear</Text></Button>

                    </Item>
                    <MeanList findMean={this.findMean.bind(this)}  means={this.state.means} finder={this.state.finder} />
                </Card>
            </Content>
        );
    }
}
