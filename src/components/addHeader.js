import React, {Component} from 'react';
import { Image} from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';

export default class AppHeader extends Component  {
    render() {
        return (
            <Header>
                <Body>
                <Image source={require('../img/9lessonsLogo.png')}
                       style={{width: 160,height: 30}}/>
                </Body>
            </Header>
        );
    }
}
