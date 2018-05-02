import React,{ Component } from 'react';
import { Image, StyleSheet, ListView, View, ActivityIndicator, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

class NewsScreen extends React.Component {}

const RootStack = StackNavigator({
    News: {
      screen: NewsScreen,
    },    
},); 

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    GetItem (title_news,text_news) {
        this.props.navigation.navigate('SingleNews',{title: title_news,text:text_news});
    }

    render() {
        return <RootStack />;
    }

    componentDidMount() {
 
        return fetch('https://hranim.name/app/news.php')
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
            <Container>
                <Image style={styles.imgfon} source={require('../images/background-pages.png')} />
                <Content>
                    <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Card style={{flex: 0}}>
                            <CardItem>
                              <Left>
                                <Body>
                                    <Text>{ rowData.title_news }</Text>
                                    <Text note>Март 18, 2018</Text>
                                </Body>
                              </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Image source={{uri: 'https://cdn.dribbble.com/users/303502/screenshots/1150715/news-icon_1x.png'}} style={{height: 200, width: '100%', flex: 1}}/>
                                    <Text numberOfLines={2}>{rowData.text_news}</Text>  
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button 
                                    onPress = {this.GetItem.bind(this, rowData.title_news,rowData.text_news)}
                                    transparent 
                                    textStyle={{color: '#87838B'}}>
                                        <Icon name="eye" />
                                        <Text>Читать</Text>
                                    </Button>
                                </Left>
                            </CardItem>
                        </Card>
                    }/>
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
    
    imageViewContainer:{
        width: 100,
        height: 100,
        borderRadius: 100/2
    },
});