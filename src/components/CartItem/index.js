import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {connect} from 'react-redux'; // cho phép truyền kết nối dữ liệu
import createAction from '../../redux/actions';

const {width} = Dimensions.get('window');

class CardItem extends Component {
  decreaseQuantity = () => {
    this.props.dispatch({
      type: 'DECREASE_QUANTITY',
      payload: this.props.card.product.id,
    });
  };

  increaseQuantity = () => {
    this.props.dispatch({
      type: 'INCREASE_QUANTITY',
      payload: this.props.card.product.id,
    });
  };

  removeCartItem = () => {
    // gui dispatch yêu cầu xóa
    this.props.dispatch({
      type: 'REMOVE_TO_CART',
      payload: this.props.card.product.id,
    });
  };

  showNotify = () => {
    Alert.alert('sdfgh', 'Do you want to delete this product?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => this.removeCartItem},
    ]);
  };

  handleDecreseCard = () => {
    if (this.props.card.quantity > 1) {
      this.decreaseQuantity();
    } else {
      this.showNotify();
    }
  };

  // componentDidUpdate(){

  // }

  render() {
    const {card} = this.props;
    return (
      <View style={styles.cardItemContainer}>
        <Image style={styles.image} source={{uri: card.product.img}} />

        <View style={styles.wrapper}>
          <View style={styles.description}>
            <Text> {card.product.name}</Text>
            <Text> 200 000</Text>
          </View>

          <View style={styles.total}>
            <View style={styles.quantityView}>
              <TouchableOpacity
                style={{padding: 5}}
                onPress={this.handleDecreseCard}>
                <View style={styles.quantityBtn}>
                  <Text style={styles.sub}>-</Text>
                </View>
              </TouchableOpacity>

              <Text>{card.quantity}</Text>

              <TouchableOpacity
                onPress={this.increaseQuantity}
                style={{padding: 5}}>
                <View style={styles.quantityBtn}>
                  <Text style={styles.plus}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardItemContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
  },
  wrapper: {
    flexDirection: 'row',
    width: width * 0.7,
    justifyContent: 'space-between',
  },

  description: {
    justifyContent: 'center',
    paddingLeft: '5%',
  },

  total: {
    justifyContent: 'center',
    paddingRight: '10%',
  },

  image: {
    width: width * 0.3,
    height: 80,
  },

  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  quantityBtn: {
    borderRadius: 50,
    backgroundColor: 'orange',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sub: {
    fontSize: 30,
  },

  plus: {
    fontSize: 25,
  },
});

export default connect()(CardItem);
