import React, {Component} from 'react';
import {Text} from 'react-native';
import {ListItem, Left, Icon, Body, Right, Switch} from 'native-base';

export default class Mean extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMeanSelected: false
        }
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
    toggleMeanHandler(value) {
        this.setState({isMeanSelected: value});
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
                        value={this.state.isMeanSelected}/>
                </Right>
            </ListItem>
        );
    }
}
