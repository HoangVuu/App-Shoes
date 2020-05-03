import React, {Component} from 'react';
import {View, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {danhSachSanPham} from '../assets/data/data';
import Product from '../components/Product';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

export class Home extends Component {
  render() {
    let {navigation} = this.props;
    let viewDetail = item => {
      navigation.navigate('productDetail', {item});
    };
    console.log(this.props.productList);
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'column',
          padding: (width * 0.04) / 6,
          backgroundColor: '#f5f5f5',
        }}>
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          style={{maginTop: '15%', backgroundColor: '#f5f5f5'}}
          data={this.props.productList}
          removeClippedSubviews
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  viewDetail(item);
                }}>
                <Product key={item.id} shoes={item} />
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.product,
  };
};

export default connect(mapStateToProps)(Home);
