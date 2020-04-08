import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

const { width, height } = Dimensions.get('window')

export default class Product extends Component {
    render() {
        const { shoes } = this.props;
        return (
          <View style= {{minHeight:300,width:width*0.48, backgroundColor:'white', padding:'2%', margin:5, borderRadius:10 }} >
             <View>
            <Image source={shoes.hinhAnh} style={{width:width*0.4, height: 180, resizeMode: 'contain', transform: [{ rotate: '-25deg' }] }} />
            </View>
            <View style={{paddingLeft:'5%',}}>
                 <Text style={{ fontWeight:'bold', fontSize: 17,  width: 'auto',height:70, alignItems:'flex-end'}}>{shoes.tenSP}</Text>
                <Text  style={{ fontSize: 16, marginTop: 8, color:'#9999FF' }}>{shoes.gia}</Text>
            </View>  
        </View>
        )
    }
}
