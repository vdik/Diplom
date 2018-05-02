import React,{ Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, AppRegistry } from 'react-native';
import { Container, Header, Content, Card, List, ListItem, Separator, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Footer, FooterTab } from 'native-base';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'; 

class ProfileScreen extends React.Component {}

let RootStack = StackNavigator({
    Profile: {
      screen: ProfileScreen,
    },
},); 

export default class App extends React.Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        return <RootStack />;
    }

    render(){
        let {goBack} = this.props.navigation;
        return(
            <Container style = {styles.container}>
                <Image style = {styles.imgfon} source = {require('../images/background-pages.png')} />
                <Content>
                    <Separator style = {{backgroundColor:'#f39c12'}}>
                        <Text style = {{color:'white',fontWeight: 'bold'}}>Данные пользователя</Text>
                    </Separator>
                    <ListItem>
                        <Text style = {{color:'white'}}>{window.myvar}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style = {{color:'white'}}>{window.myvar}</Text>
                    </ListItem>
                </Content>
                <Footer style = {{backgroundColor:'#f39c12'}}>
                    <FooterTab>
                        <Button vertical
                            onPress = {() => this.props.navigation.navigate('Menu')}
                        >
                            <Icon name = 'home' style={{ color: 'white' }} />
                            <Text style = {{color:'white'}}>Меню</Text>
                        </Button>
                        <Button vertical
                            onPress = {() => this.props.navigation.navigate('Home')}
                        >
                            <Icon name = "ios-exit-outline" style={{ color: 'white' }} />
                            <Text style = {{color:'white'}}>Выйти</Text>
                        </Button>
                  </FooterTab>
                </Footer>
            </Container>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imgfon: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        width:'85%',
        height: 50,
        backgroundColor: '#f39c12',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#ffffff00',
        shadowOffset:{  width: 1,  height: 4,  },
        shadowColor: 'rgba(0, 0, 0, .6)',
        shadowOpacity: 1.0,
    },

    submitText: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },

    texthome: {
        color: 'white',
        fontSize: 28,
        marginBottom: 30,
    },

    container: {
        marginTop:30,
    },
});