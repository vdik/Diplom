import React,{ Component } from 'react';
import { Image, StyleSheet, ListView, View, ActivityIndicator, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Footer, FooterTab } from 'native-base';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'; 

class PersonalScreen extends React.Component {}

const RootStack = StackNavigator({
    Personal: {
      screen: PersonalScreen,
    },
},); 

export default class App extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    GetItem (fio) {
        Alert.alert(fio);
    }

    render() {
        return <RootStack />;
    }

    componentDidMount() {
 
    return fetch('https://hranim.name/app/doctors.php')
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson),
            },);
        })
        .catch((error) => {
            console.error(error);
        });
    }
 
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Container style = {styles.container}>
                <Content>
                    <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Card style={{flex: 0}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: rowData.img_doc }} />
                                    <Body>
                                        <Text onPress={this.GetItem.bind(this, rowData.fio)} >{rowData.fio}</Text>
                                        <Text note numberOfLines={2} >{rowData.specialization}</Text>
                                    </Body>
                                 </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text numberOfLines={4} >{rowData.description}</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent textStyle={{color: '#87838B'}}>
                                        <Icon name="star" />
                                        <Text>1,926 рейтинг</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card> 
                    }/>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Menu')}
                        >
                            <Icon name='home' style={{ color: 'white' }} />
                            <Text>Меню</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Profile', { Email:'vv@mail.ru' })}
                        >
                            <Icon name="person" style={{ color: 'white' }} />
                            <Text>Профиль</Text>
                        </Button>
                  </FooterTab>
                </Footer>
            </Container>
        );
    }
}

let styles = StyleSheet.create({
});