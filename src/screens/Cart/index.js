import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import CartItem from '../../components/CartItem';
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
          style={{backgroundColor: '#f5f5f5', marginTop: 5}}
          data={this.props.cardList}
          removeClippedSubviews
          renderItem={({item}) => {
            console.log(item.product.id);
            return (
              <TouchableOpacity style={styles.info}>
                {/* onPress={() => {
                     viewDetail(item);
                   }}> */}
                <CartItem key={item.product.id} card={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    marginBottom: 5,
    margin: '2%',
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    elevation: 6,
  },
});

const mapStateToProps = state => {
  return {
    cardList: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
