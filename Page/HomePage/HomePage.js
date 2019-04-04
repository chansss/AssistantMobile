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
import {Platform, StyleSheet, Text, View,Alert,Animated,FlatList,Image} from 'react-native';
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
            data:[{value:'买一台Mac',startTime:'9:00',endTime:'11:30'},{value:'完成毕业设计',startTime:'12:00',endTime:'1:30'}],
            topData:[{value:'Study',index:0}, {value:'Learn',index:1}, {value:'Home',index:2},{value:'Study',index:0}, {value:'Learn',index:1}, {value:'Home',index:2}],
            checked:[],
            total_length:0
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
                                        data={this.state.topData}
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
                        data={this.state.data}
                        renderItem={({item,index})=>{
                            var list = this.state.checked;
                            list.push(false);

                            return(<View style={{height:50,width:size.width,margin:20,flexDirection:'row'}}>
                                <View style={{flex:0.2,justifyContent:'center',alignItems:'flex-end'}}>
                                    <CheckBox
                                        uncheckedIcon={<Image style={{top:1}} source={require('../../System_img/uncheck.png')} />}
                                        checkedIcon={<Image style={{top:1}} source={require('../../System_img/check.png')} />}
                                        checked={this.state.checked[index]}
                                        onPress={() => this.changeState(index)}
                                    />
                                </View>
                                <View style={{flex:0.8,alignItems:'flex-start'}}>
                                    <Text style={[this.changeText(this.state.checked[index]),{yu}]}>
                                        {'\u00A0\u00A0\u00A0'+item.value+'\u00A0\u00A0\u00A0'}
                                    </Text>
                                    <Text style={{left:9.5,marginTop:15,color:'#998FA2'}}>
                                        <Image style={{height:15,width:15}} source={require('../../System_img/icons-dark-time.png')}/>{'   '+item.startTime+' - '+item.endTime+'   '}
                                    </Text>
                                </View>
                            </View>)
                        }}
                        ListFooterComponent={()=><Text>End</Text>}
                    />
            </View>);
    }

    changeState(number){
        var list = this.state.checked;
        list[number] = !list[number];
        if(list[number]){

        }else{

        }
        this.setState({checked: list})
    }

    changeText(bool){
        if(bool){
            return {textDecorationLine: 'line-through',color:'#D47FA6'}
        }else{
            return {color:'#241332'}
        }
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
