import React,{ Component } from 'react';
import { Constants } from 'expo';
import { Image, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignInScreen from './screen/SignInScreen';
import RegistrationScreen from './screen/RegistrationScreen';
import MenuScreen from './screen/MenuScreen';
import AboutusScreen from './screen/AboutusScreen';
import ContactsScreen from './screen/ContactsScreen';
import ProfileScreen from './screen/ProfileScreen';
import PersonalScreen from './screen/PersonalScreen';
import NewsScreen from './screen/NewsScreen';
import BookingScreen from './screen/BookingScreen';
import SingleNewsScreen from './screen/SingleNewsScreen';

class HomeScreen extends React.Component {
  	static navigationOptions = {
    	header: null,
  	};

    render() {
        return (
          <View style={styles.container}>
           <Image style={styles.imgfon} source={require('./images/background.png')}  />
           <Text style={styles.logo}>Aesthetics clinic</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}
              style={styles.loginScreenButton}
              title="Войти"
              underlayColor='#fff'>
              <Text style={styles.submitText}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}
              style={styles.loginScreenButton}
              title="Зарегистрироваться"
              underlayColor='#fff'>
              <Text style={styles.submitText}>Зарегистрироваться</Text>
            </TouchableOpacity>

          </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    imgfon: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    logo: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: {width: 4, height: 5},
        marginTop: 50,
        marginBottom: 100,
    },

    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:20,
        paddingTop:10,
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
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },

});

let RootStack = StackNavigator({

    Home: {
        screen: HomeScreen,
    },
    SignIn: {
        screen: SignInScreen,
    },
    Registration: {
        screen: RegistrationScreen,
    },    
    Menu: {
        screen: MenuScreen,
    },     
    Contacts: {
        screen: ContactsScreen,
    },     
    Aboutus: {
        screen: AboutusScreen,
    },     
    Profile: {
        screen: ProfileScreen,
    },    
    Personal: {
        screen: PersonalScreen,
    },    
    News: {
        screen: NewsScreen,
    },    
    Booking: {
        screen: BookingScreen,
    },
    SingleNews: {
      screen: SingleNewsScreen,
    },
},
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}