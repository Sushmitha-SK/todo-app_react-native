import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { AvatarImages } from '../assets/Avatargroup.png'

const ToDo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([
        {
            id: Date.now().toString() + 1,
            todo: 'User Research & Analysis',
            completed: true
        },
        {
            id: Date.now().toString() + 2,
            todo: 'Black & White Wireframe',
            completed: true
        },
        {
            id: Date.now().toString() + 3,
            todo: 'Design On Figma',
            completed: true
        },

    ]);

    const handleAddTodo = () => {
        if (todo.length > 0) {
            const newTodo = {
                id: Date.now().toString(),
                todo: todo,
            };
            setTodos([...todos, newTodo]);
            setTodo('');
        }
    };

    const deleteTodo = () => {
        setTodos([]);
    }

    const toggleTodo = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.taskView}>
                <Text style={styles.titleText} fontFamily="Inter">Task Details</Text>
            </View>

            <View style={styles.taskViewContainer}>
                <View>
                    <Text style={styles.taskTitleLabel} fontFamily="Inter">Task Title</Text>
                    <Text style={styles.taskTitleText} fontFamily="Inter">NFT Web App Prototype</Text>

                </View>
                <View marginTop={12}>
                    <Text style={styles.taskTitleLabel} fontFamily="Inter" >Descriptions</Text>
                    <Text style={styles.taskDescText} fontFamily="Inter">Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..</Text>
                </View>
            </View>
            <View style={styles.avatarView}>
                <Image
                    source={AvatarImages}
                    style={styles.image}
                />
            </View>
            <View style={styles.tasklistView}>
                <Text style={styles.tasklist}>Task List</Text>
                <TouchableOpacity onPress={deleteTodo}>
                    <Image source={require('../assets/Trash.png')} style={styles.trashIcon} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <View style={styles.todo}>
                        <TouchableOpacity
                            style={styles.checkbox}
                            onPress={() => toggleTodo(item.id)}
                        >
                            {item.completed && <View style={styles.checkboxInnerCircle} >
                                <Text style={styles.checkboxMark}>✓</Text>
                            </View>}
                        </TouchableOpacity>
                        <Text style={item.completed ? styles.completedText : styles.todoText} fontFamily='Inter'>{item.todo}</Text>
                    </View>
                )}
            />

            <View style={styles.todoInputView}>
                <Text style={styles.addTodo} >+</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add Task"
                    placeholderTextColor="#98A2B3"
                    color="black"
                    value={todo}
                    onChangeText={text => setTodo(text)}
                    onSubmitEditing={handleAddTodo}
                />
            </View>

        </SafeAreaView>
    )
}

export default ToDo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    taskView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 100,
        marginTop: 2
    },
    titleText: {
        fontSize: 16,
        fontWeight: 500,
        color: "#111322",
    },

    taskViewContainer: {
        paddingHorizontal: 16,

    },
    taskTitleLabel: {

        fontSize: 14,
        fontWeight: 500,
        marginBottom: 12,
        color: '#5D6B98'

    },
    taskTitleText: {
        color: '#1D2939',
        fontSize: 20,
        fontWeight: 600,


    },
    taskDescText: {
        marginTop: 4,
        fontWeight: 500,
        fontSize: 14,
        color: '#111322'
    },

    input: {
        width: '100%',
        height: 50,
        borderWidth: 0,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        outlineStyle: 'none'

        // marginBottom: 20,
    },
    list: {
        // width: '100%',
        paddingHorizontal: 16,

    },
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 16,
        marginBottom: 10,
        backgroundColor: "#F9F9FB",

    },
    todoText: {
        flex: 1,
        marginRight: 10,
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#98A2B3',
        borderRadius: 15,
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'center',
    },
    checkboxInnerCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#7F56D9',
    },
    checkboxMark: {
        textAlign: "center",
        // paddingTop: 4,
        fontSize: 20,
        color: '#FFFFFF'
    },
    tasklistView: {
        marginRight: 15,
        flex: 1,
        maxHeight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tasklist: {
        margin: 15,
        color: "#5D6B98",
        fontWeight: 500

    },
    completedText: {
        flex: 1,
        marginRight: 10,
        color: "#30374F",
        fontWeight: 500,
    },
    todoText: {
        flex: 1,
        marginRight: 10,
        fontSize: 16,
        color: "#30374F",
        fontWeight: 500,
    },
    todoInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F9F9FB",
        justifyContent: 'space-between',
        borderRadius: 20,
        margin: 15,
        padding: 10,
        height: '72px'
    },
    addTodo: {
        fontSize: 30,
        color: "#98A2B3",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#F9F9FB",
    },
})