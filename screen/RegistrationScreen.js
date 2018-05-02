import React,{ Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'; 
import { NavigationActions } from 'react-navigation';

class RegistrationScreen extends React.Component {}

const RootStack = StackNavigator({
    Registration: {
      screen: RegistrationScreen,
    },
},);

export default class App extends React.Component {

    constructor(props) { 
        super(props)
        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: ''
        }
    }

    UserRegistrationFunction = () =>{
        // const { UserName }  = this.state ;
        // const { UserEmail }  = this.state ;
        // const { UserPassword }  = this.state ;
       
        // if (UserName == '' || UserEmail == '' || UserPassword == '') {
        //     Alert.alert("Пожалуйста, заполните поля в форме");
        // }
        // else{

        //     fetch('https://hranim.name/app/userregistration.php', {
        //         method: 'POST',
        //         headers: {
        //           'Accept': 'application/json',
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //           name: UserName,
        //           email: UserEmail,
        //           password: UserPassword
        //         })
        //     })

        //     .then((response) => response.json())
        //     .then((responseJson) => {Alert.alert(responseJson);})
        //     .catch((error) => {console.error(error);});
            this.props.navigation.navigate('Profile');
            // this.props.navigation.navigate('Profile',{Name:UserName,Email: UserEmail});
        //}
    }

    render() {
        return <RootStack />
    }

    render() {
        return (
          <View style={styles.container}>
            <Image style={styles.imgfon} source={require('../images/background-pages.png')} />

            <KeyboardAvoidingView
              style={styles.Keyboard}
              behavior="padding"
            >

            <TextInput
              placeholder="Введите Ваше Имя"
              onChangeText={UserName => this.setState({UserName})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />

            <TextInput
              placeholder="Введите Ваш Email"
              onChangeText={UserEmail => this.setState({UserEmail})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Введите Ваш Пароль"
                onChangeText={UserPassword => this.setState({UserPassword})}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                secureTextEntry={true}
            />

            <TouchableOpacity onPress={this.UserRegistrationFunction}
              style={styles.loginScreenButton}
              title="Зарегистрироваться"
              underlayColor='#fff'>
              <Text style={styles.submitText}>Зарегистрироваться</Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>
          </View>
        );
    }
}

let styles = StyleSheet.create({
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

    texthome: {
        color: 'white',
        fontSize: 28,
        marginBottom: 30,
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
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },

    homelogo: {
        width: 180,
        resizeMode: 'contain',
        height:180,
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 15,
        height: 50,
        borderWidth: 1,
        borderColor: '#ffffff00',
        backgroundColor:'white',
        borderRadius: 5 ,
        borderRadius: 10 ,
        width: '90%',
    },

    Keyboard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    sendControlContainerInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 3,
    },

    textBox: {
        borderRadius: 5,
        height: 100,
        paddingHorizontal: 10,
        flex: 3,
    }
});