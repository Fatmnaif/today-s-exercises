import React, { useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import skyp from './assets/skyp.png';

export default function Todo({ navigation }) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const taskSet = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    function finishTheTask(i){
        let itemsCopy = [...taskItems];
        itemsCopy.splice(i, 1);
        setTaskItems(itemsCopy)
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground source={skyp} style={styles.ImgBackground}>

                {/* onPress={ navigation.navigate("Timer")  } */}
            

                <Text style={styles.Title1}>Today's Exercises</Text>
                <View style={{ width: '100%', height: '60%', top: '10%' }}>
                    <ScrollView
                        keyboardShouldPersistTaps='never'
                    >
                        <View style={styles.tasksWrapper}>
                            <View style={styles.items}>
                                {
                                    taskItems.map((item, id) => {
                                        return (
                                            <View style={styles.theTask} key={id}>
                                                <Text style={{color:'#727272', fontSize:20}}>{item} </Text>
                                                <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
                                                    <MaterialCommunityIcons name='alarm' style={styles.alarmstayle} size={29} />
                                                    {// الى هنا بس 
                                                    }</TouchableOpacity>
                                                <TouchableOpacity  onPress={() => finishTheTask(id)} style={styles.finish}>
                                                    <MaterialCommunityIcons name='close-outline' size={28}  color={'#777379'}/>
                                                </TouchableOpacity>

                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>

                    </ScrollView>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeTask}
                >
                    <TextInput style={styles.input} placeholder={'Write your task'} value={task} onChangeText={text => setTask(text)} />
                    <View style={{}} />
                    <TouchableOpacity onPress={() => taskSet()}>
                        <View style={styles.addbutton}>
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
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingHorizontal: 20,
    },
    Title1: {
        top: 75,
        left: 13,
        fontSize: 24,
        fontWeight: 'bold',
        color:'#727272'
    },
    items: {
        marginTop: 30,
    },
    writeTask: {
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
    addbutton: {
        width: 60,
        height: 60,
        margin: 5,
        // backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        justifyContent:'center',
        backgroundColor:'rgba(1,1,1,0.05)'        

    },
    ImgBackground: {
        width: '100%',
        height: '100%'

    },
    alarmstayle: {
        top: -25,
        left: '78%',
        color:'#777379',
        width:25,
    },
    theTask: {
        borderColor: '#C0C0C0',
        borderRadius: 30,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        margin: 8,
        paddingTop:10,
        height:50,
        backgroundColor:'rgba(1,1,1,0.1)'        
    },
    finish:{
       left:'90%',
        top:-52,
        width:25,
    }
});