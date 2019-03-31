import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,UIManager, findNodeHandle,Alert,TouchableOpacity} from 'react-native';

type Props = {};
export default class Card extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
            themeColor:this.props.themeColor==null?'#fff':this.props.themeColor,
            footerColor : this.props.footerColor==null?'#f1f':this.props.footerColor,
            borderWidth : 0,
            navigator:this.props.navigator==null?null:this.props.navigator
        };

    }


    componentWillMount(): void {
        this.init();
    }

    onon(){
        const handle = findNodeHandle(this.refs.Card);
        UIManager.measure(handle,(x, y, width, height, pageX, pageY)=>{
            Alert.alert(''+height)
        })
    }

    init(){
        this.setState({borderWidth:this.state.themeColor==='#fff'&&this.state.footerColor==='#fff'?1.5:0})

    }


    render() {
        const width = size.width;
        const height = size.height;
        const card_corner={
            flex:1,
            padding:20,
            borderBottomLeftRadius:height*0.18*0.6,
            borderBottomWidth:this.state.borderWidth,
            borderLeftWidth:this.state.borderWidth,
            borderColor:'#E7E4E9',
            backgroundColor: this.state.themeColor,
        };
        if(this.props.onPress==null){
            return (

                <View style={{backgroundColor: this.state.footerColor,width:width,height:this.props.height==null?200:this.props.height}}
                                  ref={'Card'}>
                    <View style={card_corner}>
                        {this.props.component}
                    </View>
                </View>
            );}
        else{
            return (
                <TouchableOpacity
                    style={{backgroundColor: this.state.footerColor,width:width,height:this.props.height==null?200:this.props.height}}
                    ref={'Card'}
                    onPress={this.props.onPress}
                >
                    <View style={card_corner}>
                        {this.props.component}
                    </View>
                </TouchableOpacity>
            );
        }

    }
}

const styles = StyleSheet.create({

});

module.exports=Card;
