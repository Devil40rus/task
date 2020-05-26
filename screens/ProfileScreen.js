import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            surname: '',
            name: '',
            middlename: '',
            login: '',
            email: '',
            phone: '',
            photo: ''
        };
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        await AsyncStorage.getItem('surname', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    surname: sData
                })
            }
        });
        await AsyncStorage.getItem('name', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    name: sData
                })
            }
        });
        await AsyncStorage.getItem('middlename', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    middlename: sData
                })
            }
        });
        await AsyncStorage.getItem('login', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    login: sData
                })
            }
        });
        await AsyncStorage.getItem('email', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    email: sData
                })
            }
        });
        await AsyncStorage.getItem('phone', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    phone: sData
                })
            }
        });
        await AsyncStorage.getItem('photo', (err, sData) => {
            if ( err == null ) {
                this.setState({
                    photo: sData
                })
            }
        });
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.root}>
                <LinearGradient
                    colors={["#0033ff", "#6bc1ff"]}
                    style={{height: "20%"}}
                />
                <View style={{alignItems: "center"}}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 140/2,
                            marginTop: -50
                        }}
                        source={{uri: `${this.state.photo}`}}
                    />
                </View>
                <Card style={styles.myCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.myText}>Фамилия: {this.state.surname} </Text>
                    </View>
                </Card>
                <Card style={styles.myCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.myText}>Имя: {this.state.name} </Text>
                    </View>
                </Card>
                <Card style={styles.myCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.myText}>Отчество: {this.state.middlename} </Text>
                    </View>
                </Card>
                <Card style={styles.myCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.myText}>Логин: {this.state.login} </Text>
                    </View>
                </Card>
                <Card style={styles.myCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.myText}>Email: {this.state.email} </Text>
                    </View>
                </Card>
                <Card style={styles.myCard}>
                    <View style={styles.cardContent}>
                        <Text style={styles.myText}>Телефон: {this.state.phone} </Text>
                    </View>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20}}>
                    <Button
                        icon="account-edit"
                        mode="contained"
                        onPress={() => navigation.navigate('Create')}
                    >
                        Изменить
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    myCard: {
        margin: 8,
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8
    },
    myText: {
        fontSize: 13,
        marginTop: 3,
        marginLeft: 5
    }
})
