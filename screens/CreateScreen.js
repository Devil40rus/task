import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert, AsyncStorage } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import styled from 'styled-components/native';

const CreateScreen = ({ navigation }) => {
    const [Surname, setSurname] = useState("")
    const [Name, setName] = useState("")
    const [Middlename, setMiddlename] = useState("")
    const [Login, setLogin] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [modal, setModal] = useState(false)

    const pickFromGallery = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            await AsyncStorage.setItem("photo", data.uri);
        } else {
            Alert.alert("Пожалуйста, выберите");
        }
    }

    const pickFromCamera = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            await AsyncStorage.setItem("photo", data.uri);
        } else {
            Alert.alert("Пожалуйста, выберите");
        }
    }

    const onRegisterPress = async () => {
        await AsyncStorage.setItem("surname", Surname);
        await AsyncStorage.setItem("name", Name);
        await AsyncStorage.setItem("middlename", Middlename);
        await AsyncStorage.setItem("login", Login);
        await AsyncStorage.setItem("email", Email);
        await AsyncStorage.setItem("phone", Phone);
        navigation.navigate('Profile')
    }

    return(
        <Container>
            <TextInput
                label='Фамилия'
                style={styles.inputStyle}
                value={Surname}
                onChangeText={Surname => setSurname(Surname)}
            />
            <TextInput
                label='Имя'
                style={styles.inputStyle}
                value={Name}
                onChangeText={Name => setName(Name)}
            />
            <TextInput
                label='Отчество'
                style={styles.inputStyle}
                value={Middlename}
                onChangeText={Middlename => setMiddlename(Middlename)}
            />
            <TextInput
                label='Логин'
                style={styles.inputStyle}
                value={Login}
                onChangeText={Login => setLogin(Login)}
            />
            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={Email}
                onChangeText={Email => setEmail(Email)}
            />
            <TextInput
                label='Телефон'
                style={styles.inputStyle}
                value={Phone}
                onChangeText={Phone => setPhone(Phone)}
            />
            <Button
                style={styles.inputStyle}
                icon="upload"
                mode="contained"
                onPress={() => setModal(true)}
            >
                Загрузить
            </Button>
            <Button
                style={styles.inputStyle}
                icon="content-save"
                mode="contained"
                onPress={() => onRegisterPress()}
            >
                Сохранить
            </Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button
                            icon="camera"
                            mode="contained"
                            onPress={() => pickFromCamera()}
                        >
                            Камера
                        </Button>
                        <Button
                            icon="image-area"
                            mode="contained"
                            onPress={() => pickFromGallery()}
                        >
                            Галерея
                        </Button>
                    </View>
                    <Button
                        onPress={() => setModal(false)}
                    >
                        Отмена
                    </Button>
                </View>
            </Modal>
        </Container>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 5
    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%"
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    }
})

const Container = styled.View`
    flex: 1;
`;

export default CreateScreen