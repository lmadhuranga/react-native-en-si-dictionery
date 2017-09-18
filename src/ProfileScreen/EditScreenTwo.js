import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
export default class EditScreenTwo extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>EditScreenTwo</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Edit Screen 2</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("EditScreenTwo")}>
                        <Text>Goto EditScreenTwo</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

