import React, {Component} from 'react';
import {Text} from 'react-native';
import {List, ListItem} from 'native-base';

import Mean from './mean'

export default class MeanList extends Component {
    meanItems: any;
    findMeanHandler(text){
        this.props.findMean(text)
    }

    render() {
        // Check means set?
        if (this.props.means.length > 0) {
            this.meanItems = this.props.means.map((mean) => {
                return (<Mean key={mean}
                              mean={mean}
                              finder={this.props.finder}
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
