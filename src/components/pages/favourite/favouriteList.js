// Libraries
import _ from "lodash";
import React, {Component} from 'react';
import {List, ListItem, Label} from 'native-base';

// Components
import Favourite from './favourite'

//Other
import {words2dashed} from '../../../helpers/wordFormater'

export default class FavouriteList extends Component {
    favouriteItems: any;

    /**
     * Finder value get from clicked mean
     * @param text
     */
    findMeanHandler(text) {
        this.props.findMean(text)
    }

    /**
     * Get selected word
     * @param word
     * @param mean
     * @param value
     */
    selectedWordHandler(word: string, mean: string, isSelected: boolean) {
        this.props.selectWord(word, mean, isSelected);

    }

    render() {
        //Todo::Last Favourite List should be list
        //Clog:: console.log(`madd__msg_ this.props.favouriteListWords`,this.props.favouriteListWords);
        this.favouriteItems = [];
        // Words array -> means
        _.forEach(this.props.favouriteList, (means, word) => {
            this.favouriteItems.push(<ListItem itemDivider key={word}><Label>{word}</Label></ListItem>);
            // Means array -> mean
            _.forEach(means, (mean, key,) => {
                this.favouriteItems.push(
                    <Favourite key={words2dashed(mean)}
                               mean={mean}
                               finder={word}
                               selecteWord={this.selectedWordHandler.bind(this)}
                               findMean={this.findMeanHandler.bind(this)}
                    />
                );
            });

        });
        return <List>{this.favouriteItems}</List>
    }
}
