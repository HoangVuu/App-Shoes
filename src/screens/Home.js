import React, { Component } from 'react'
import { Text, View, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { danhSachSanPham } from '../assets/data/data'
import Product from '../components/Product'

const { width, height } = Dimensions.get('window')

export default class Home extends Component {

    render() {
        return (
            <View style={{flex:1, flexWrap:'wrap',  flexDirection: 'column'}}>
            <FlatList
            style={{maginTop:'15%',backgroundColor:'#f5f5f5'}}
            data={danhSachSanPham}
            renderItem={({ item }) => {
               return <TouchableOpacity >
                   <Product  key={item.id} shoes={item} />
               </TouchableOpacity>
            }}
            numColumns= {2}
            keyExtractor={(item, index) => index }
            > 
            </FlatList> 
            </View>
        )
    }
}
