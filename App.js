import React, {Component} from 'react';
import {Container, StyleProvider} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import getTheme from './native-base-theme/components';
import nineLessons from './native-base-theme/variables/nineLessons';

import AppHeader from './src/components/addHeader';
import AppFooter from './src/components/addFooter';
import FinderPage from './src/components/pages/finder/finderPage';
import FavouritePage from './src/components/pages/favourite/favouritePage';

export default class MyProject extends Component {
    render() {
        return (
            <Container>
                <Router hideNavBar="true">
                    <Scene key="root">
                        <Scene key="FinderPage" component={FinderPage} title="FinderPage" initial={true}/>
                        <Scene key="FavouritePage" component={FavouritePage} title="FavouritePage"/>
                    </Scene>
                </Router>
            </Container>
        );
    }
}
