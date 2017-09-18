import React, {Component} from 'react';
import {Text} from 'react-native';
import {List, ListItem} from 'native-base';

import Mean from './mean'

export default class MeanList extends Component {
    meanItems: any;

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
        // Check means set?
        if (this.props.means.length > 0) {
            this.meanItems = this.props.means.map((mean) => {
                return (<Mean key={mean}
                              mean={mean}
                              finder={this.props.finder}
                              selecteWord={this.selectedWordHandler.bind(this)}
                              findMean={this.findMeanHandler.bind(this)}
                />);
            });

            return (
                <List>
                    {this.meanItems}
                </List>
            );

        }
        else {
            return <List><ListItem><Text>Not found</Text></ListItem></List>
        }
    }
}
