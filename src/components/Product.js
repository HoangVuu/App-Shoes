import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'; // cho phép truyền kết nối dữ liệu

const {width, height} = Dimensions.get('window');

export class Product extends Component {
  addToCart = () => {
    // send request add to cart
    this.props.dispatch({
      type: 'ADD_TO_CART', //thuộc tính bắt buộc: mô tả hành động
      payload: this.props.shoes, // khi nào cần gửi dữ liệu lên thì gửi kèm
    });
  };

  render() {
    const {shoes} = this.props;
    console.log(shoes.img);
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          minHeight: 300,
          width: width * 0.48,
          backgroundColor: 'white',
          margin: (width * 0.04) / 6,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 3,
          },
          shadowOpacity: 0.2,
          elevation: 6,
        }}>
        <Image
          source={{uri: shoes.img}}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'contain',
            transform: [{rotate: '-25deg'}],
          }}
        />
        <View style={{paddingLeft: '5%'}}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              width: 'auto',
              height: 70,
              alignItems: 'flex-end',
            }}>
            {/* {shoes.tenSP} */}
            {shoes.name}
          </Text>
          <Text style={{fontSize: 16, marginTop: 8, color: '#9999FF'}}>
            {/* {shoes.gia} */}
            {shoes.price}
          </Text>
          <TouchableOpacity onPress={this.addToCart}>
            <View style={{backgroundColor: "red" }}>
              <Text>Add to card</Text>
            </View>
          </TouchableOpacity>
          {/* <Button style={{}} title="Add to card" onPress={this.addToCart} /> */}
        </View>
      </View>
    );
  }
}

export default connect()(Product);
