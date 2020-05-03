import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import CartItem, {CardItem} from '../../components/CartItem';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

export class Cart extends Component {
  getData = () => {
    // send request get to cart
    this.props.dispatch({
      type: 'GET_FROM_CART', //thuộc tính bắt buộc: mô tả hành động
    });
  };

  render() {
    console.log(this.props.cardList);
    return (
      <View>
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          style={{maginTop: '15%', backgroundColor: '#f5f5f5'}}
          data={this.props.cardList}
          removeClippedSubviews
          renderItem={({item}) => {
            console.log(item.product.id);
            return (
              <TouchableOpacity>
                {/* onPress={() => {
                     viewDetail(item);
                   }}> */}
                <CardItem key={item.product.id} card={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardList: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
