import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'; // cho phép truyền kết nối dữ liệu

export class CardItem extends Component {
  decreaseQuantity = () => {
    this.props.dispatch({
      type: 'DECREASE_QUANTITY',
      payload: this.props.item.product.id,
    });
  };

  render() {
    const {card} = this.props;
    return (
      <View style={styles.cardItemContainer}>
        <Image style={styles.image} source={{uri: card.product.img}} />
        <View>
          <Text> {card.product.name}</Text>
          <Text> 200 000</Text>
          <View style={styles.quantityBtn}>
            <Button title="+" />
            <Text>{card.quantity}</Text>
            <Button title="-" onPress={this.decreaseQuantity} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardItemContainer: {
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: 80,
  },

  quantityBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default connect()(CardItem);
