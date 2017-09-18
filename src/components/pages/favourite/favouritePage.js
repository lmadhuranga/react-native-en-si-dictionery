// React Components
import React, {Component} from 'react';
import {
    Content, Card, CardItem, Body, Item, Icon, Input, Button, List, ListItem, H1
} from 'native-base';

// Components

import FavouriteList from './favouriteList'

// Helpers
import favouriteSevice from '../../../services/favouriteService'

/**
 * Manage main search functionality
 */
export default class FavouritePage extends Component {
    defautWordEmpty: any = {};

    constructor() {
        super();
        this.state = {
            selectedWords: [],
            selectedWordsMeas: this.defautWordEmpty
        };

        // Get all favourite list
        favouriteSevice.get().then((meansArr) => {
            //Clog:: console.log(`madd__msg_ favouriteSevice.get().then favouritePage =====>`, meansArr);
            this.setState({
                selectedWordsMeas: meansArr
            });
        }, (error) => {
            console.log(`madd__msg_ error `, error);
        });

    }

    render() {

        return (
            <Content>
                <Card>
                    <H1 rounded>Favourite Words 1</H1>
                </Card>
                <Card>
                    <FavouriteList
                        favouriteList={this.state.selectedWordsMeas}
                    />
                </Card>
            </Content>
        );
    }
}
