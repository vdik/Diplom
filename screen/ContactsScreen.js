import React,{ Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Constants } from 'expo';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';

class ContactsScreen extends React.Component {}

const RootStack = StackNavigator({
    Contacts: {
      screen: ContactsScreen,
    },
},); 

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.imgfon} source={require('../images/background-pages.png')} />
                <FlatList
                    data={[
                        {key: 'Мы работаем:'},
                        {key: 'с понедельника по субботу'},                        
                        {key: 'с 9:00 до 17:00,'},
                        {key: 'в воскресенье - выходной. '},                    
                        {key: 'Мы находимся по адресу:'},
                        {key: '83001, г. Донецк, ул. 50-летия СССР, 144/2.'},
                        {key: 'Запись на приём производится по телефонам:'},
                        {phone: '(062) 381-00-88 ,'},
                        {phone: '(071) 340-84-56 ,'},
                        {phone: '(066) 633-54-52 '},
                        {messenger: 'skype: mscestetica_1'},
                    ]}
                    renderItem={({item}) => <Text style={styles.texblock}>{item.key}
                    {item.phone}
                    {item.messenger}</Text>}
                    keyExtractor={(item, index) => index}
                />

                <MapView style={styles.map}
                    initialRegion={{
                    latitude: 48.0230000,
                    longitude: 37.8022400,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }} >
                </MapView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    imgfon: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    map: {
        height: '40%',
        width: '100%',
        right: 0,
        bottom: 0,
    },
    
    texblock: {
        fontSize: 16,
		color: 'white',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 2,
	},
});