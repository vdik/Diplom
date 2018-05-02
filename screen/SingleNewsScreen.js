import React,{ Component } from 'react';
import { StyleSheet, ActivityIndicator, ListView, View, Alert, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H3 } from 'native-base';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

class SingleNewsScreen extends React.Component {}

const RootStack = StackNavigator({
    SingleNews: {
      screen: SingleNewsScreen,
    },
},); 

export default class App extends React.Component {

    render() {
        return <RootStack />;
    }
 
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <H3>{ this.props.navigation.state.params.title }</H3>
                                    <Image source={{uri: 'https://cdn.dribbble.com/users/303502/screenshots/1150715/news-icon_1x.png'}} style={{height: 200, width: null, flex: 1}}/>
                                    <Text>{ this.props.navigation.state.params.text }</Text>  
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>Дата публикации: Март 18, 2018</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgfon: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
});