import React, {Component} from 'react';
import {Container, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import nineLessons from './native-base-theme/variables/nineLessons';

import AppHeader from './src/components/addHeader';
import AppFooter from './src/components/addFooter';
import FinderPage from './src/components/pages/finderPage';

export default class MyProject extends Component {
    render() {
        return (
             <StyleProvider style={getTheme(nineLessons)}>
                <Container>

                    <AppHeader/>
                    <FinderPage/>
                    <AppFooter/>

                </Container>
            </StyleProvider>
        );
    }
}