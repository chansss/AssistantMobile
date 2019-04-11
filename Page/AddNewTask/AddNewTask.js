import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    UIManager,
    findNodeHandle,
    Alert,
    TouchableOpacity,
    ScrollView,Image,
    FlatList, TextInput, Dimensions
} from 'react-native';
import {Badge, CheckBox, Input} from 'react-native-elements'
import SliderPro from "../../Component/SliderPro";
import DatePicker from 'react-native-datepicker'
import Header from "../../Component/Header";

import TouchableScale from "react-native-touchable-scale";

var height = Dimensions.get('window').height; //full height+
var width = Dimensions.get('window').width; //full width


type Props = {};
export default class AddNewTask extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
            date:this.getTimeServer(),

            topData:[{value:'Study',index:0,color:'blue'}, {value:'Learn',index:1,color:'green'}, {value:'Home',index:2,color:'purple'},{value:'Study',index:0,color:'pink'}, {value:'Learn',index:1,color:'lightGreen'}],
            taskName:'',
            taskDesc:'',
            taskStart:this.getTimeServer(),
            taskEnd:'',
            taskStar:false,
            taskCategory:'',
            taskNoti:false,
            taskCateSelected:false
        };

    }


    componentWillMount(): void {

    }


    render() {
        return (

            <View style={{flex:1,backgroundColor:'#241332'}}>
                <Header
                    title={"新建任务"}
                    leftIcon={require('../../System_img/icons-dark-back.png')}
                    rightIcon={'noIcon'}
                    footerColor={color.black_header}
                    themeColor={color.white_header}
                    themeText={color.black_header}
                    leftFunction={()=>this.back()}
                    bottomRender={
                        <Text style={{left:12,color:'#998FA2',fontSize:13,marginBottom:0,top:-20}}>
                            在此新建您的任务
                        </Text>}
                    height={20}
                />
                <ScrollView>
                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{backgroundColor:'#241332',borderBottomLeftRadius:global.size.height*0.18*0.6,flex:1,paddingTop:20}}>
                            <Input
                                placeholder='任务名称'
                                containerStyle={{margin:20,width:width-80,marginBottom:0,marginLeft:60}}
                                inputContainerStyle={{borderBottomWidth:1,borderColor:'#8A56AC',paddingLeft:0}}
                                labelStyle={{color:'#998FA2',fontWeight:'100',fontSize:12}}
                                inputStyle={{color:'#fff'}}
                                placeholderTextColor={'#bbb'}
                                onChangeText={(text) => this.setState({taskName:text})}
                                value={this.state.taskName}
                                leftIcon={<Image style={{height:19,width:19}} source={ require('../../System_img/icons-light-card.png')}/>}
                                leftIconContainerStyle={{height:15,width:15,right:9,top:1}}
                            />


                            <Input
                                placeholder=' 任务描述'
                                containerStyle={{margin:20,width:width-80,marginBottom:0,marginLeft:60}}
                                inputContainerStyle={{borderBottomWidth:1,borderColor:'#8A56AC'}}
                                labelStyle={{color:'#998FA2',fontWeight:'100',fontSize:12,}}
                                inputStyle={{color:'#fff',padding:0,margin:0}}
                                placeholderTextColor={'#bbb'}
                                onChangeText={(text) => this.setState({taskDesc:text})}
                                value={this.state.taskDesc}
                                leftIcon={<Image style={{height:17,width:17}} source={ require('../../System_img/icons-light-edit.png')}/>}
                                leftIconContainerStyle={{height:15,width:15,right:9,top:1}}
                            />

                            <Input
                                placeholder='选择日期'
                                label={'任务日期'}
                                containerStyle={{margin:20,width:width-80,marginBottom:40,marginLeft:60}}
                                inputContainerStyle={{borderColor:'#8A56AC',borderBottomWidth:0,paddingLeft:0}}
                                labelStyle={{color:'#998FA2',fontWeight:'100',fontSize:13,top:8}}
                                inputStyle={{color:'#fff'}}
                                placeholderTextColor={'#776d90'}
                                onChangeText={(text) => this.setState({taskDesc:taskStart})}
                                value={this.state.taskStart}
                                inputComponent={()=>
                                    <DatePicker
                                    style={{width: 200,marginTop:20,marginBotom:10}}
                                    date={this.state.taskStart}
                                    mode="date"
                                    showIcon={false}
                                    placeholder="请选择日期"
                                    format="YYYY-MM-DD"
                                    minDate={this.state.date}
                                    maxDate="2100-01-01"
                                    confirmBtnText="确定"
                                    cancelBtnText="取消"
                                    customStyles={{
                                        dateInput: {
                                            borderRadius:100,backgroundColor:'#fff',borderWidth: 0
                                        },
                                        dateText:{
                                            color:'#241332'
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({taskStart: date})}}
                                />}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#fff',height:500}}>
                        <TouchableScale activeScale={0.97} style={{flexDirection: 'row',marginLeft:20,marginRight:20,marginTop:20,height:30}} onPress={() => this.setState({taskCateSelected:!this.state.taskCateSelected})}>
                            <View style={{flex:0.13}}>
                                <CheckBox
                                    uncheckedIcon={<Image style={{height:24,width:24,top:-3,right:10}} source={require('../../System_img/icons-darl-filter.png')} />}
                                    checked={false}
                                />
                            </View>
                            <View style={{flex:0.72}}>
                                {this.renderItem3()}
                            </View>
                            <View style={{flex:0.15}}>
                                <Image source={require('../../System_img/icons-light-next.png')} style={{bottom:-1}}/>
                            </View>
                        </TouchableScale>


                        <TouchableScale activeScale={0.97} style={{flexDirection: 'row',marginLeft:20,marginRight:20,marginTop:20}} onPress={() => this.setState({taskStar:!this.state.taskStar})}>
                            <View style={{flex:0.13}}>
                                <CheckBox
                                    uncheckedIcon={<Image style={{height:17,width:19,top:-10,right:7}} source={require('../../System_img/heart.png')} />}
                                    checkedIcon={<Image style={{height:17,width:19,top:-10,right:7}} source={require('../../System_img/heart-active.png')} />}
                                    checked={this.state.taskStar}
                                />
                            </View>
                            <View style={{flex:0.72}}>
                                {this.renderItem()}
                            </View>
                            <View style={{flex:0.15}}>

                            </View>
                        </TouchableScale>

                        <TouchableScale activeScale={0.97} style={{flexDirection: 'row',marginLeft:20,marginRight:20,marginTop:20}} onPress={() => this.setState({taskNoti:!this.state.taskNoti})}>
                            <View style={{flex:0.13}}>
                                <CheckBox
                                    uncheckedIcon={<Image style={{height:18,width:18,top:-10,right:7}} source={require('../../System_img/icons-dark-notification.png')} />}
                                    checkedIcon={<Image style={{height:18,width:18,top:-10,right:7}} source={require('../../System_img/icons-light-notification.png')} />}
                                    checked={this.state.taskNoti}
                                />
                            </View>
                            <View style={{flex:0.72}}>
                                {this.renderItem2()}
                            </View>
                            <View style={{flex:0.15}}>

                            </View>
                        </TouchableScale>


                    </View>
                </ScrollView>
            </View>
        );
    }

    renderItem(){
        if(!this.state.taskStar){
            return(
                <View>
                    <Text style={{textAlign: 'left',fontSize:18,right:0.5,color:'#000'}}>标记本项目</Text>
                    <Text style={{textAlign: 'left',fontSize:13,marginTop:5,color:'#817889'}}>标记后任务会出现 红心 标记</Text>
                </View>)

        }else{
            return(
                <View>
                    <Text style={{textAlign: 'left',fontSize:18,right:0.5,color:'#F56161'}}>已标记本项目</Text>
                    <Text style={{textAlign: 'left',fontSize:13,marginTop:5,color:'#F68D8D'}}>标记后任务会出现 红心 标记</Text>
                </View>)
        }
    }

    renderItem2(){
        if(!this.state.taskNoti){
            return(
                <View>
                    <Text style={{textAlign: 'left',fontSize:18,right:0.5,color:'#000'}}>需要提醒？</Text>
                    <Text style={{textAlign: 'left',fontSize:13,marginTop:5,color:'#817889'}}>勾选后会在任务开始时进行提醒</Text>
                </View>)

        }else{
            return(
                <View>
                    <Text style={{textAlign: 'left',fontSize:18,right:0.5,color:'#D47FA6'}}>好的，提醒我</Text>
                    <Text style={{textAlign: 'left',fontSize:13,marginTop:5,color:'#E6C3D3'}}>当任务开始，将会提醒您</Text>
                </View>)
        }
    }

    renderItem3(){
        if(!this.state.taskCateSelected){
            return(
                <View>
                    <Text style={{textAlign: 'left',fontSize:18,right:0.5,color:'#000'}}>选择您的项目分类</Text>
                </View>)

        }else{
            return(
                <View style={{flexDirection:'row'}}>
                    <Text style={{textAlign: 'left',fontSize:18,right:0.5,color:'#000'}}>选择成功！</Text>
                    <Text style={{bottom:3,paddingRight:15,paddingLeft:15,backgroundColor:'#D47FA6',borderRadius:100,textAlign: 'center',fontSize:13,marginTop:5,color:'#fff',justifyContent: 'flex-start'}}>Study</Text>
                </View>)
        }
    }



    back = () =>{
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }


    getTimeServer()
    {
        const date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day = date.getDate().toString();
        if(day<10) {
            day='0'+day;
        }
        if(month<10) {
            month='0'+month;
        }
        return year+'-'+month+'-'+day;
    }
}

const styles = StyleSheet.create({

});

module.exports=AddNewTask;
