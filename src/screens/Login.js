import React, { Component } from 'react'

import { Text, View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } =Dimensions.get('window')

const { textBoxStyle, titleStyle, buttonStyle } = StyleSheet.create({

    textBoxStyle: {
        fontSize: 20,
        width: width * 0.75,
        borderBottomWidth: 3,
        borderColor: '#9999FF',
        height: 50,
        marginTop: '5%'
    },

    titleStyle: {
        fontSize: 40,
        fontWeight: '600',
        marginTop: 25,
    },

    buttonStyle: {
        marginTop: 25,
        backgroundColor: '#9999FF',
        width: width / 2,
        alignContent: 'center',
        padding: '5%',
        alignItems: 'center',
        borderRadius: 50
    }
})


export default class Login extends Component {

    state = {
        email: '123lnhvu',
        password: '123456',
    }
    //Hàm lấy giá trị từ các text input
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <View style={{ flex:1, flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                <Text style={[titleStyle]}>ĐĂNG NHẬP</Text>
                {/*Sử dụng sự kiện onChangeText để bắt giá trị khi người dùng nhập vào */}
                <TextInput style={[textBoxStyle]}placeholder='Tên đăng nhập' defaultValue='123lnhvu' />

                <TextInput style={[textBoxStyle]} secureTextEntry={true}  placeholder='Mật khẩu'  defaultValue='123456' />

                <TouchableOpacity>
                    <View style={[buttonStyle]}>
                        <Text style={{ color: '#fff', fontSize: 25 }}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


