import React, {Component} from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const {textBoxStyle, titleStyle, buttonStyle} = StyleSheet.create({
  textBoxStyle: {
    fontSize: 20,
    width: width * 0.75,
    borderBottomWidth: 3,
    borderColor: '#9999FF',
    height: 50,
    marginTop: '5%',
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
    borderRadius: 50,
  },
});

export default class Login extends Component {
  state = {
    email: '123lnhvu',
    password: '123456',
  };
  //Hàm lấy giá trị từ các text input
  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    //Đối tượng từ stack để chuyển hướng trang
    let {navigation} = this.props;
    //state chứa giá trị người dùng nhập
    let {email, password} = this.state;
    //Kiểm tra nếu người dùng nhập đúng email và pass => Chuyển qua home screen ngược lại xuất thông báo thất bại
    if (email === '123lnhvu' && password === '123456') {
      navigation.navigate('homescreen', {params: {email: email}}); //Truyền params qua home
    } else {
      Alert.alert('Notification', 'Login failed !');
    }
  };

  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[titleStyle]}>ĐĂNG NHẬP</Text>
        {/*Sử dụng sự kiện onChangeText để bắt giá trị khi người dùng nhập vào */}
        <TextInput
          style={[textBoxStyle]}
          placeholder="Tên đăng nhập"
          onChangeText={this.handleChange.bind(this, 'email')}
          defaultValue="123lnhvu"
        />

        <TextInput
          style={[textBoxStyle]}
          secureTextEntry={true}
          placeholder="Mật khẩu"
          onChangeText={value => {
            this.handleChange('password', value);
          }}
          defaultValue="123456"
        />

        <TouchableOpacity onPress={this.handleSubmit}>
          <View style={[buttonStyle]}>
            <Text style={{color: '#fff', fontSize: 25}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
