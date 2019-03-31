/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Header from '../../Component/Header'
import Card from '../../common/Card'
import {Platform, StyleSheet, Text, View,Alert,Animated,FlatList} from 'react-native';
import {Projector} from 'teaset';
import { CheckBox } from 'react-native-elements'
import SliderPro from "../../Component/SliderPro";
type Props = {};
export default class HomePage extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
            navigator:this.props.navigator==null?null:this.props.navigator,
            height:new Animated.Value(0),
            index:0,
            data:[]
        }
    }

    componentDidMount(){
        Animated.timing(                  // Animate over time
            this.state.height,            // The animated value to drive
            {
                toValue: size.height*0.3,                   // Animate to opacity: 1 (opaque)
                duration: 10000,              // Make it take a while
            }
        ).start();
    }

    componentWillMount(): void {
    }

    _keyExtractor = (item, index) => item.value;

    render() {
        return (
            <View style={styles.container}>
                    <FlatList
                        ListHeaderComponent={()=>
                            <Header
                                title={"今日"}
                                leftIcon={require('../../System_img/icons-menu.png')}
                                rightIcon={require('../../System_img/icons-dark-more.png')}
                                footerColor={color.white_header}
                                themeColor={color.white_header}
                                themeText={color.black_header}
                                bottomRender={
                                    <FlatList
                                        data={[{value:'Study',index:0}, {value:'Learn',index:1}, {value:'Home',index:2},{value:'Study',index:0}, {value:'Learn',index:1}, {value:'Home',index:2}]}
                                        renderItem={({item}) => <SliderPro
                                            func={(index)=>this.changeTab(index)}
                                            height={size.height*0.1}
                                            value={item.value}
                                            index={item.index}
                                        />}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                }
                                height={55}
                            />
                        }
                        data={[{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},{value:'123'},]}
                        renderItem={({item})=>
                            <View style={{height:50,width:size.width,margin:20,flexDirection:'row'}}>
                                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-end'}}>
                                    <CheckBox
                                        checked={false}
                                        iconType={'material'}
                                        uncheckedIcon={'check-square-o'}
                                    />
                                </View>
                                <View style={{flex:0.8,justifyContent:'center',alignItems:'flex-start'}}>
                                    <Text>
                                        {item.value}
                                    </Text>
                                </View>
                            </View>
                        }
                        ListFooterComponent={()=><Text>End</Text>}
                    />
            </View>);
    }

    changeTab(index){

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    }
});

module.exports=HomePage;
