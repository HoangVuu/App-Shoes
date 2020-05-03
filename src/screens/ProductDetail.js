import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {height} = Dimensions.get('window');

export default class ProductDetail extends Component {
  state = {
    productDetail: {SPLQ: []},
  };

  componentDidMount = () => {
    let {item} = this.props.route.params;
    console.log('param', item);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({productDetail: item});
  };

  viewDetail = item => {
    this.setState({productDetail: item});
  };

  renderRelatedProduct = (mangSPLQ = []) => {
    // eslint-disable-next-line no-undef
    let mangPhimLQ = danhSachSanPham.filter((item, _index) => {
      let i = mangSPLQ.findIndex(maSP => maSP == item.maSP);
      if (i != -1) {
        return item;
      }
    });
    return mangPhimLQ.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.viewDetail(item);
          }}
          key={index}>
          <Row style={{justifyContent: 'flex-start', marginTop: 5}}>
            <Col style={{width: 'auto'}}>
              <Image
                source={{uri: item.hinhAnh}}
                resizeMode="contain"
                style={{width: 100, height: 100}}
              />
            </Col>
            <Col>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  {item.tenSP}
                </Text>
              </View>
              <View
                style={{justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'red',
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  {item.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  VNĐ
                </Text>
              </View>
            </Col>
          </Row>
        </TouchableOpacity>
      );
    });
  };

  render() {
    let {productDetail} = this.state;
    return (
      <Grid>
        <Row
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexWrap: 'wrap',
            maxHeight: height / 4,
            backgroundColor: 'red',
          }}>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 20, color: 'orange', fontWeight: 'bold'}}>
              {productDetail.tenSP}
            </Text>
            <Text style={{fontSize: 15, color: '#000'}}>
              {productDetail.moTa}
            </Text>
            <Text style={{fontSize: 20, color: 'red', fontWeight: '300'}}>
              {productDetail.gia
                ? productDetail.gia
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : ''}{' '}
              VNĐ
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {productDetail.size?.map((size, index) => {
                return (
                  <TouchableOpacity key={index}>
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        backgroundColor: '#DDDDDD',
                        marginRight: 8,
                        marginTop: 5,
                        padding: 10,
                        borderRadius: 5,
                      }}>
                      <Text>{size}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <View style={{marginBottom: 5, marginTop: 5}}>
              <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.addCart(item);
                  }}>
                  <View style={{backgroundColor: 'black'}}>
                    <Text
                      style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
                      +
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 17,
                    paddingTop: 15,
                    paddingLeft: 5,
                    paddingRight: 10,
                  }}>
                  1
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.addCart(item);
                  }}>
                  <View
                    style={{backgroundColor: 'black', margin: 10, padding: 8}}>
                    <Text
                      style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
                      -
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{alignItems: 'flex-end'}}>
                <View style={{borderRadius: 5, backgroundColor: 'orange'}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 'bold',
                      padding: 10,
                      paddingTop: 5,
                      width: 'auto',
                    }}>
                    <Icon
                      name="cart-arrow-down"
                      size={20}
                      style={{color: '#fff'}}
                    />{' '}
                    Đặt mua{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Row>
      </Grid>
    );
  }
}
