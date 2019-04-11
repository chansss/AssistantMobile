import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,UIManager, findNodeHandle,Alert,TouchableOpacity,ScrollView} from 'react-native';
import {Badge} from 'react-native-elements'

type Props = {};
export default class SliderPro extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
            themeColor:this.props.themeColor==null?'#fff':this.props.themeColor,
            backColor : this.props.backColor==null?'#fff':this.props.backColor,
            borderWidth : 0,
            navigator:this.props.navigator==null?null:this.props.navigator
        };

    }


    componentWillMount(): void {

    }

    renderView(){
        return (<Badge
            value={this.props.value}
            onPress={()=>this.props.func(this.props.index)}
            textStyle={{color:'#fff',fontSize:15}}
            badgeStyle={{backgroundColor:this.renderColor(this.props.color),borderWidth:0,height:27,paddingLeft:13,paddingRight:13,borderRadius:100,top:10}}
        />)
    }


    render() {
        const width = size.width;
        const height = size.height;
        const card_corner={
        };
        return (

            <View style={{height:this.props.height==null?200:this.props.height,}}>
                <View style={{flex:1,flexDirection:'row',marginRight:30,bottom:10}}>
                    {this.renderView()}
                </View>
            </View>
        );
    }

    renderColor(color){
        var c = global.colors;
        for(var i = 0;i<c.length;i++){
            if(c[i].name == color){
                return c[i].color
            }
        }
    }
}

const styles = StyleSheet.create({

});

module.exports=SliderPro;
