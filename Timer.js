import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground, StyleSheet, Pressable, Text, View, TextInput, TouchableOpacity, Keyboard, Alert, Modal } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
// import skyp from './assets/skyp.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Timer({ navigation: { goBack } }) {

    const [time, setTime] = useState();
    const [timer1, setTimer1] = useState(0);
    const [useCountdown, setUseCountdown] = useState(0);
    const [stopPlaying, setstopPlaying] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);


    const timeSet = () => {
        setTimer1(time)
    }

    // to stop the timer and display the modal

    useEffect(() => {
        if (useCountdown === 0) {
            setTimer1(0)
            setTime(0)
            setstopPlaying(false)
        }
        else if (useCountdown === 1) {
            setTimeout(() => {
                setModalVisible(true)
            }, 5);


        }
        else {
            setstopPlaying(true)
        }
    }, [useCountdown])


    return (
        <View style={styles.container} >
            <ImageBackground source={require('./assets/skyp.png')} style={styles.ImgBackground}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

                    <View style={{ marginTop: '50%', alignItems: 'center', }}>
                        <CountdownCircleTimer
                            size={290}
                            strokeWidth={20}
                            isPlaying={stopPlaying}
                            initialRemainingTime={10}
                            duration={timer1}
                            colors={['#a47dba', '#9f88ac', '#c5a0da', '#c8bfce']}
                            colorsTime={[17, 14, 7, 0]}
                            trailColor={'#fff'}
                        >
                            {({ remainingTime }) => <Text style={{ fontSize: 30, color: '#624077' }}>{setUseCountdown(remainingTime)} {useCountdown}</Text>}

                        </CountdownCircleTimer>
                    </View>
                </TouchableWithoutFeedback>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Well Done !</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => { setModalVisible(!modalVisible), goBack() }}
                            >
                                <Text style={styles.textStyle}>Let's complete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <KeyboardAvoidingView

                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeTaskWrapper}
                >
                    <Text>{ }</Text>
                    <TextInput style={styles.input} keyboardType='numeric' placeholder={'Enter Time (seconds)'} value={time} onChangeText={text => setTime(text)} />
                    <View style={{}} />
                    <TouchableOpacity onPress={() => timeSet()}>
                        <View style={styles.addWrapper}>
                            <MaterialCommunityIcons name='plus-outline' size={30} color={'#b3b3b3'} />
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        margin: 5,
        // backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(1,1,1,0.05)'

    },
    ImgBackground: {
        flex: 1,
        width: '100%',
        height: '100%'

    },
    modalStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff',
        flex: 1,
        justifyContent: 'center'
    }

    ,

    centeredView: {
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // right:90,
        width: '90%',
        height: '78%'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        height: '30%',
        alignItems: "center",
        shadowColor: "#64566d",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    buttonClose: {
        borderColor: "#a590b2",
        borderRadius: 30,
        borderWidth: 1,
        marginTop: 38,
    },
    textStyle: {
        color: "#a590b2",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
    },
    modalText: {
        marginTop: 9,
        marginBottom: 12,
        textAlign: "center",
        fontSize: 30,
        color: '#3c2d46'
    }
});

