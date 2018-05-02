import React,{ Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Item, Input } from 'native-base';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'; 
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker'

class BookingScreen extends React.Component {}

const RootStack = StackNavigator({
    Booking: {
      screen: BookingScreen,
    },
},);

export default class MyDatePicker extends Component {



	constructor(props){
		super(props)
			this.state = { date:new Date().toDateString() }
			this.state = { UserDates: '', UserTime: ''}
	}

    UserBookingFunction = () => {

        const { UserDates }  = this.state ;        
        const { UserTime }  = this.state ;

        fetch('https://hranim.name/app/booking.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              dates: UserDates,
              times: UserTime,
            })
        })

        .then((response) => response.json())
        .then((responseJson) => {Alert.alert(responseJson);})
        .catch((error) => {console.error(error);});
    }

    render() {
		return <RootStack />;
	}

	render(){
		return (
			<View>
				<DatePicker
					date={this.state.date}
					mode="date"
					format="MMMM Do YYYY"
					minDate="this.state.date"
					confirmBtnText="Выбрать"
					cancelBtnText="Закрыть"
					locale="rus"
					customStyles={{
						dateIcon: {
							position: 'absolute',
							left: 0,
							top: 4,
							marginLeft: 0
						},
						dateInput: {
							display:'none',
						}
					}}
					onDateChange = { UserDates => { this.setState({UserDates}) } }
				/>

				<Item>
					<Input placeholder="Выберите дату" value={ this.state.UserDates } />
				</Item>

				<DatePicker
					date={this.state.date}
					mode="time"
					minDate="this.state.date"
					confirmBtnText="Выбрать"
					cancelBtnText="Закрыть"
					locale="rus"
					customStyles={{
						dateIcon: {
							position: 'absolute',
							left: 0,
							top: 4,
							marginLeft: 0
						},
						dateInput: {
							display:'none',
						}
					}}
					onDateChange = { UserTime => { this.setState({UserTime}) } }
				/>

				<Item>
					<Input placeholder="Выберите время" value={ this.state.UserTime } />
				</Item>

				<TouchableOpacity style={styles.loginScreenButton} onPress={ this.UserBookingFunction } >
		        	<Text>Записаться</Text>
		        </TouchableOpacity>
		    </ View>    
		)

	}
}


let styles = StyleSheet.create({

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
});