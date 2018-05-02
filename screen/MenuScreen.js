import React,{ Component } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button, Icon, Badge } from 'native-base';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MenuScreen extends React.Component {
}

let RootStack = StackNavigator({
    Menu: {
      screen: MenuScreen,
    },
},); 

export default class App extends React.Component {

	static navigationOptions = {
        header: null
    }

	render() {
		return <RootStack />;
	}

	render() {
		return(
			<Container style = {styles.container}>
				<Header/>
	            <Image style = {styles.imgfon} source = {require('../images/background-pages.png')} />
        		<Content style = {styles.align}>
					<Button style = {styles.btn} iconLeft onPress = {() => this.props.navigation.navigate('Personal')} >
						<Icon name='ios-medical-outline' />
						<Text style = {{color:'white'}}>Наши доктора</Text>
					</Button>
									
					<Button style = {styles.btn} iconLeft onPress = {() => this.props.navigation.navigate('Booking')} >
						<Icon name='ios-calendar-outline' />
						<Text style = {{color:'white'}}>Записаться</Text>
					</Button>

					<Button style = {styles.btn} iconLeft onPress = {() => this.props.navigation.navigate('News')} >
						<Icon name='ios-text-outline' />
						<Text style = {{color:'white'}}>Новости</Text>
					</Button>	

					<Button style = {styles.btn} iconLeft onPress = {() => this.props.navigation.navigate('Aboutus')} >
						<Icon name='clipboard' />
						<Text style = {{color:'white'}}>О клинике</Text>
					</Button>				

					<Button style = {styles.btn} iconLeft onPress = {() => this.props.navigation.navigate('Contacts')} >
						<Icon name='ios-map-outline' />
						<Text style = {{color:'white'}}>Контакты</Text>
					</Button>				

					<Button style = {styles.btn} iconLeft onPress = {() => this.props.navigation.navigate('Profile')} >
						<Icon name='person' />
						<Text style = {{color:'white'}}>Профиль</Text>
					</Button>

	        	</Content>
			</Container>
		);
	}
}

let styles = StyleSheet.create({

    imgfon: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    align:{
    	flex: 1,
    },

    btn:{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: 10,
        marginTop: 10,
        width: '70%',
        height: 50,
        backgroundColor: '#f39c12',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff00',
        shadowOffset:{  width: 1,  height: 4,  },
        shadowColor: 'rgba(0, 0, 0, .6)',
        shadowOpacity: 1.0,
    },
});

