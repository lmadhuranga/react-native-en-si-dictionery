import React, {Component} from 'react';
import {Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';

export default class AppBody extends Component {
    render() {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                My Project Text
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}