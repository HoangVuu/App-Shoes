import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from '@react-navigation/compat';

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 20,
  },

  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
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

  render() {
    return (
      <TouchableOpacity style={StyleSheet.container} onPress={this.goToCard}>
        <Icon name="shopping-cart" size={30} />
        <View style={StyleSheet.badge}>
          <Text style={StyleSheet.badgeText}>1212</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CartButton);
