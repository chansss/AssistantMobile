import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image} from 'react-native';



type Props = {};
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header_corner}>
                    <View style={styles.header_top}>
                        <View style={styles.backbutton}>
                            <Image source={require('../System_img/back-light.png')} style={{height:29,width:29}}/>
                        </View>
                        <View style={styles.morebutton}>
                            <Image source={require('../System_img/search.png')} style={{height:29,width:29}}/>

                        </View>
                    </View>
                    <View style={styles.header_bottom}>
                        <Text style={styles.header_text}>
                            Activity
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#dedce0',

    },
    header_corner:{
        width: width,
        height:height*0.18,
        borderBottomLeftRadius:height*0.18*0.6,
        backgroundColor: '#fff',
    },
    header_top:{
        flexDirection:'row',
        flex:0.4,
        top:height*0.045
    },
    header_bottom:{
        marginLeft:height*0.17*0.6+20,
    },
    header_text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        top:height*0.17*0.23
    },
    backbutton:{
        marginLeft:25,
        flex:0.5,
    },
    morebutton:{
        marginRight:25,
        flex:0.5,
        alignItems: 'flex-end'
    },


});

module.exports=Header;