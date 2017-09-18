import _ from "lodash";
import React, {Component} from 'react';
import {Text} from 'react-native';
import {ListItem, Left, Icon, Body, Right, Switch} from 'native-base';

export default class Mean extends Component {

    isMeanSelected(word: string, mean: string, selectedWords: any) {
        //Clog:: console.log(`mad__msg  word ->${word} |mean ->${mean} |selectedWords -> `, selectedWords);
        if (selectedWords[word]) return !(_.isUndefined(selectedWords[word][mean]));
        return false;
    }

    /**
     * When click mean send to finder
     * @param finder
     * @param mean
     */
    meanPressHandler(finder, mean) {
        this.props.findMean(finder);
    }

    /**
     * Toggle mean selection
     * @param value
     */
    toggleMeanHandler(isSelected: boolean) {
        console.log(`madd__msg_ mean:toggleMeanHandler triger`)
        // selected word
        this.props.selecteWord(this.props.finder, this.props.mean, isSelected);
        this.setState({isMeanSelected: isSelected});
    }

    render() {
        return (
            <ListItem icon>
                <Left>
                    <Icon name="plane"/>
                </Left>
                <Body>
                <Text
                    key={this.props.mean}
                    // onPress={this.meanPressHandler.bind(this, this.props.finder, this.props.mean)}
                >
                    {this.props.mean}
                </Text>
                </Body>
                <Right>
                    <Switch
                        onValueChange={this.toggleMeanHandler.bind(this)}
                        value={this.isMeanSelected(this.props.finder, this.props.mean, this.props.selectedWords)}/>
                </Right>
            </ListItem>
        );
    }
}
