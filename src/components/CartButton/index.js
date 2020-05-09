import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from '@react-navigation/compat';
import {connect} from 'react-redux';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 20,
    width: 42,
  },
  iconCart: {
    top: 5,
  },

  badge: {
    position: 'absolute',
    top: 0,
    right: 3,
    backgroundColor: '#51A9FF',
    width: 20,
    height: 20,
    borderRadius: 10,
  },

  badgeText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '600',
  },
});

export class CartButton extends Component {
  goToCard = () => {
    this.props.navigation.navigate('Cart');
  };

  countTotal = () => {
    let result = this.props.cartList.reduce((sum, currentItem) => {
      return sum + currentItem.quantity;
    }, 0);
    return result;
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.goToCard}>
        <Icon name="shopping-cart" style={styles.iconCart} size={30} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{this.countTotal()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cart,
});

export default withNavigation(connect(mapStateToProps)(CartButton));
