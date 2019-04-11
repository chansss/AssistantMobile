import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';




var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

type Props = {};
export default class Header extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state = {
            //theme 选择颜色模式  控制初始图标颜色
            //Color selector
            theme : this.props.theme==null?1:this.props.theme,
            themeColor : this.props.themeColor==null?color.white_header:this.judgeThemeColor(),
            title:this.props.title==null?'Header':this.props.title,
            themeText : this.props.themeText==null?color.black_header:this.props.themeText,
            leftIcon : this.judgeIconleft(),
            rightIcon : this.judgeIconRight(),
            footerColor : this.props.footerColor==null?'#fff':this.props.footerColor,
            borderWidth:1.5,
            navigator:this.props.navigator==null?null:this.props.navigator,
            bottomHeight:this.props.height==null?0:this.props.height
        }
    }


    componentWillMount(){
        this.initial()
    }

    render() {
        const container= {
            height:height*0.18+this.state.bottomHeight,
            width:width,
            backgroundColor: this.state.footerColor
        };
        const header_corner={
            width: width,
            height:height*0.18+this.state.bottomHeight,
            borderBottomLeftRadius:height*0.18*0.6,
            backgroundColor: this.state.themeColor,
            borderBottomWidth:this.state.borderWidth,
            borderLeftWidth:this.state.borderWidth,
            borderColor:'#E7E4E9',
        };
        const header_top={
            flexDirection:'row',
            height:height*0.18*0.3,
            top:height*0.045
        };
        const header_bottom={
            height:height*0.18*0.7,
            marginLeft:height*0.17*0.6+20,
        };
        const header_text={
            fontSize: 30,
            fontWeight: 'bold',
            color: this.state.themeText,
            top:height*0.17*0.23,
            right:width*0.07
        };

        const backbutton={
            marginLeft:25,
                flex:0.5,
        };
        const morebutton={
            marginRight:25,
                flex:0.5,
                alignItems: 'flex-end'
        };



        if(this.props.bottomRender==null){
        return (
            <View style={container}>
                <View style={header_corner}>
                    <View style={header_top}>
                        <View style={backbutton}>
                            <TouchableOpacity onPress={this.props.leftFunction==null?()=>this.touch():()=>this.props.leftFunction()} style={{height:29,width:29}}>
                                <Image source={this.state.leftIcon} style={{height:29,width:29}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={morebutton}>
                            <TouchableOpacity onPress={this.props.rightFunction==null?()=>this.touch():()=>this.props.rightFunction()} style={{height:29,width:29}}>
                                <Image source={this.state.rightIcon} style={{height:29,width:29}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={header_bottom}>
                        <Text style={header_text}>
                            {this.state.title}
                        </Text>
                    </View>
                </View>
            </View>
        );}
        else{
            return(
            <View style={container}>
                <View style={header_corner}>
                    <View style={header_top}>
                        <View style={backbutton}>
                            <TouchableOpacity onPress={this.props.leftFunction==null?()=>this.touch():()=>this.props.leftFunction()} style={{height:29,width:29}}>
                                <Image source={this.state.leftIcon} style={{height:29,width:29}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={morebutton}>
                            <TouchableOpacity onPress={this.props.rightFunction==null?()=>this.touch():()=>this.props.rightFunction()} style={{height:29,width:29}}>
                                <Image source={this.state.rightIcon} style={{height:29,width:29}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={header_bottom}>
                        <Text style={header_text}>
                            {this.state.title}
                        </Text>
                    </View>
                    <View style={{height:this.state.bottomHeight,paddingLeft:60}}>
                        {this.props.bottomRender}
                    </View>
                </View>
            </View>)
        }
    }

    //初始化标题栏颜色
    initial(){
        this.setState({borderWidth:this.state.themeColor==='#fff'&&this.state.footerColor==='#fff'?1.5:0})
    }

    touch(){};


    judgeIconleft(){
        if(this.props.leftIcon==null&&this.props.theme==null){
            return require('../System_img/icons-dark-back.png')
        }
        else if(this.props.leftIcon==null&&this.props.theme==1){
            return require('../System_img/icons-dark-back.png')
        }
        else if(this.props.leftIcon==null&&this.props.theme==2){
            return require('../System_img/icons-light-back.png')
        }else{
            return this.props.leftIcon
        }
    }


    judgeIconRight(){
        if(this.props.rightIcon==null&&this.props.theme==null){
            return require('../System_img/Icons-search-gray.png')
        }
        else if(this.props.rightIcon==null&&this.props.theme==1){
            return require('../System_img/Icons-search-gray.png')
        }
        else if(this.props.rightIcon==null&&this.props.theme==2){
            return require('../System_img/icons-light-search.png')
        }
        else if(this.props.rightIcon == 'noIcon') {
            return null;
        }else {
            return this.props.rightIcon
        }
    }

    judgeThemeColor(){
        switch(this.props.themeColor){
            case 'dark':return color.black_header;
            case 'light':return color.white_header;
            case 'purple':return color.purple;
            default : return this.props.themeColor;
        }
    }
}

module.exports=Header;