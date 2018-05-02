import React,{ Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView, TouchableOpacity,DatePickerIOS} from 'react-native';
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
			this.state = { UserDates: ''}
	}

    UserBookingFunction = () => {

        const { UserDates }  = this.state ;
        console.log(UserDates);

        fetch('https://hranim.name/app/booking.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              dates: UserDates,
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
					style={{width: '90%'}}
					date={this.state.date}
					mode="date"
					placeholder= "Выберите дату и время"
					value = "Выберите дату и время"
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
							marginLeft: 36,
							width: '90%'
						}
					}}
					onDateChange = { (date) => { this.setState({date: date}) } }
					onDateChange = { UserDates => { this.setState({UserDates}) } }
				/>

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