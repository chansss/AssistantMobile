import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,ImageBackground,ScrollView,FlatList,Image,  } from 'react-native';
import {Label,Button,Drawer} from 'teaset';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {Card,ListItem} from 'react-native-elements'
var height = Dimensions.get('window').height; //full height+
var width = Dimensions.get('window').width; //full width
import TaskDetail from '../Page/TaskDetail/TaskDetail'
import HomePage from '../Page/HomePage/HomePage'
type Props = {};

export default class DrawerLayout extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
            menu:[
                {'icon':require('../System_img/home.png'),
                'activeIcon':require('../System_img/home-active.png'),
                'title':'主页',flag:true},
                {'icon':require('../System_img/home.png'),'activeIcon':require('../System_img/home-active.png'),'title':'Home',flag:false},
                {'icon':require('../System_img/home.png'),'activeIcon':require('../System_img/home-active.png'),'title':'Meetups',flag:false},
                {'icon':require('../System_img/home.png'),'activeIcon':require('../System_img/home-active.png'),'title':'Enevts',flag:false},
                {'icon':require('../System_img/home.png'),'activeIcon':require('../System_img/home-active.png'),'title':'Contact Us',flag:false},
            ],
            components:[HomePage,TaskDetail,TaskDetail,TaskDetail,TaskDetail],
            lastIndex:0
        }
    }

    componentWillMount(){

    }

    render() {
        return (
            <View style={{height:height,width:width*0.7,backgroundColor: '#fff',zIndex:1}}>
                <View style={{position:'absolute',height:height*0.18*0.6,width:width*0.7,zIndex:2,backgroundColor:'rgba(153,153,153,1)'}} ></View>
                <ImageBackground 
                    source={require('../appImage/BG.png')}  
                    imageStyle={{backgroundColor:'#7426B4',opacity:0.6,borderBottomLeftRadius:height*0.18*0.5,borderTopRightRadius:height*0.18*0.5}}
                    style={{flex:0.4,paddingLeft:33,zIndex:3}}>
                    <View style={{flex:0.5,alignContent:'center'}}>
                        <View style={{flex:0.95}}></View>
                        <Image style={{height:60,width:60,borderRadius:30}} source={require('../appImage/BG.png')}></Image>
                    </View>
                    <View style={{flex:0.5,alignContent:'flex-end'}}>
                    <View style={{flex:0.06}}></View>
                        <Text style={{fontSize:25,color:'#fff',fontWeight:'bold'}}>
                            Aurelien Salomon
                        </Text>
                        <View style={{height:7}}></View>
                        <Text style={{fontSize:11,color:'rgba(255,255,255,0.8)'}}>
                            让世界离我近一些
                        </Text>
                    </View>
                    


                </ImageBackground >
                <ScrollView style={{flex:0.6,zIndex:3,paddingLeft:18}}>
                    {/*<FlatList*/}
                        {/*ListHeaderComponent={*/}
                            {/*<View style={{height:30}}></View>*/}
                        {/*}*/}
                        {/*data={this.state.menu}*/}
                        {/*renderItem={({item,index}) => {*/}
                        {/*if(item.flag){*/}
                            {/*return(*/}
                                {/*<View style={{marginLeft:33,}}>*/}
                                {/*<Button style={{borderRadius:100,width:120,borderColor: '#fff',*/}
                                            {/*backgroundColor:'#8A56AC',marginBottom:15,height:40}}*/}
                                            {/*onPress={()=>this.selectButton(index)}>*/}
                                {/*<Image source={item.activeIcon}*/}
                                            {/*style={{marginRight:17,height:20,width:20}}*/}
                                            {/*></Image>*/}
                                    {/*<Text style={{color:'#fff',fontSize:18}}>{item.title}</Text>*/}
                                {/*</Button>*/}
                            {/*</View>  */}
                            {/*)*/}
                        {/*}else{*/}
                            {/*return(*/}
                            {/*<View style={{marginLeft:33,}}>*/}
                                {/*<Button style={{borderRadius:100,width:120,borderColor: '#fff',*/}
                                            {/*backgroundColor:'#fff',marginBottom:15,height:40}}*/}
                                            {/*onPress={()=>this.selectButton(index)}>*/}
                                {/*<Image source={item.icon}*/}
                                            {/*style={{marginRight:17,height:20,width:20}}*/}
                                            {/*></Image>*/}
                                    {/*<Text style={{color:'#241332',fontSize:18}}>{item.title}</Text>*/}
                                {/*</Button>*/}
                            {/*</View>  */}
                            {/*)*/}
                        {/*}*/}
                        {/*}*/}
                        {/*}*/}
                    {/*/>*/}
                    <FlatList
                        ListHeaderComponent={
                        <View style={{height:30}}></View>
                        }
                        data={this.state.menu}
                        renderItem={({item,index}) => {
                                    var u = item;
                                    var i = index;
                                    if(u.flag){
                                    return (
                                        <ListItem
                                            Component={TouchableScale}
                                            friction={90} //
                                            tension={100} // These props are passed to the parent component (here TouchableScale)
                                            activeScale={0.95} //
                                            containerStyle={{backgroundColor:'#8A56AC',borderRadius:100,height:50,width:150}}
                                            key={i}
                                            onPress={()=>this.selectButton(i)}
                                            titleStyle={{color:'#fff'}}
                                            title={u.title}
                                            leftAvatar={{containerStyle:{height:20,width:20},avatarStyle: {backgroundColor:'#8A56AC'}, rounded: false, source: u.activeIcon }}
                                        />
                                    );}
                                    else{
                                        return (
                                            <ListItem
                                                Component={TouchableScale}
                                                friction={90} //
                                                tension={100} // These props are passed to the parent component (here TouchableScale)
                                                activeScale={0.95} //
                                                key={i}
                                                onPress={()=>this.selectButton(i)}
                                                title={u.title}
                                                leftAvatar={{containerStyle:{height:20,width:20},avatarStyle: {backgroundColor:'#fff'}, rounded: false, source: u.icon }}
                                            />
                                        );
                                    }
                                }}
                    />

                </ScrollView>
            </View>
        )
    }

    selectButton(index){
        if(index !== this.state.lastIndex){
            var list = this.state.menu;
            list[this.state.lastIndex].flag = false;
            list[index].flag = true;
            this.setState({menu:list,lastIndex:index});
            this.pushTo(this.state.components[index])
        }
    }


    pushTo = (component) =>{
        const { navigator } = this.props;
        if (navigator) {
            navigator.replace({
                component: component,
                params:{
                    navigator:this.props.navigator,
                }
            });
        }
        // this.props.dr()
    }
}
const styles = StyleSheet.create({

});

module.exports=DrawerLayout;