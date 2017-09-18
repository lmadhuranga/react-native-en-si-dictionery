import React, {Component} from 'react';
// Theme Component
import {ListItem, Left, Icon, Body, Right, Switch, Label} from 'native-base';

// Other
import ToastService from '../../../services/toastService'

export default class Favourite extends Component {

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
        ToastService.show(`Todo::${finder}`);
        // this.props.findMean(finder);
    }

    render() {
        return (
            <ListItem icon>
                <Left>
                    <Icon name="plane"/>
                </Left>
                <Body>
                <Label
                    key={this.props.mean}
                    onPress={this.meanPressHandler.bind(this, this.props.finder, this.props.mean)}
                >
                    {this.props.mean}
                </Label>
                </Body>
            </ListItem>
        );
    }
}
