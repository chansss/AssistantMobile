import React, {Component} from 'react';
import Header from '../../Component/Header'
import Card from '../../common/Card'
import {Platform, StyleSheet, Text, View,Alert,Animated,FlatList,Image,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import {Projector,Drawer} from 'teaset';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { CheckBox, colors } from 'react-native-elements'
import SliderPro from "../../Component/SliderPro";
import CommonColor from '../../common/CommonColor'
import TaskDetail from '../TaskDetail/TaskDetail'
import DrawerLayout from '../../Component/DrawerLayout';
import AddNewTask from '../AddNewTask/AddNewTask'
const size = global.size
type Props = {};
export default class HomePage extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
            navigator:this.props.navigator==null?null:this.props.navigator,
            height:new Animated.Value(0),
            index:0,
            data:[
                {value:'买一台Mac',startTime:'9:00',endTime:'11:30',book:true,notification:true,color:'blue'},
                {value:'复习四六级',startTime:'10:00',endTime:'11:30',book:false,notification:false,color:'green'},
                {value:'Go Shopping !',startTime:'13:30',endTime:'11:30',book:true,notification:false,color:'blue'},
                {value:'买一台Mac',startTime:'9:00',endTime:'11:30',book:false,notification:false,color:'purple'},
                {value:'买一台Mac',startTime:'9:00',endTime:'11:30',book:false,notification:false,color:'green'},
                {value:'买一台Mac',startTime:'9:00',endTime:'11:30',book:false,notification:false,color:'green'},
                {value:'完成毕业设计',startTime:'12:00',endTime:'1:30',book:false,notification:false,color:'green'}
            ],
            topData:[{value:'Study',index:0,color:'blue'}, {value:'Learn',index:1,color:'green'}, {value:'Home',index:2,color:'purple'},{value:'Study',index:0,color:'pink'}, {value:'Learn',index:1,color:'lightGreen'}],
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

    componentWillMount(){
    }

    _keyExtractor = (item, index) => item.value;

    open()
    {
        this.dr=Drawer.open(<DrawerLayout
                                navigator = {this.props.navigator}
                                dr={()=>this.close()}
                            />,'left')
    }

    close()
    {
        if(this.dr!=='') {
            this.dr.close()
        }
    }

    render() {
        return (
                <View style={styles.container}>
                <TouchableScale style={{position:'absolute',bottom:20,right:23,height:60,width:60,zIndex:2}}
                       onPress={()=> this.pushToNewTask()}
                        activeScale={0.9}>
                    <Image source={require('../../System_img/button-fab-add-gray.png')} style={{height:60,width:60,}}/>
                </TouchableScale>

                     <Header
                        title={"今日"}
                        leftIcon={require('../../System_img/icons-menu.png')}
                        // rightIcon={require('../../System_img/icons-dark-more.png')}
                        footerColor={color.black_header}
                        themeColor={color.white_header}
                        themeText={color.black_header}
                        leftFunction={()=>this.open()}
                        bottomRender={
                            <FlatList
                                data={this.state.topData}
                                renderItem={({item}) => <SliderPro
                                    func={(index)=>this.changeTab(index)}
                                    height={size.height*0.1}
                                    value={item.value}
                                    index={item.index}
                                    color={item.color}
                                />}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        }
                        height={55}
                    />
                    <ScrollView style={{backgroundColor:global.color.black_header,zIndex:1}}>
                    <FlatList
                        extraData = {this.state}
                        data={this.state.data}
                        renderItem={({item,index})=>{
                            var list = this.state.checked;
                            list.push(false);

                            return(<TouchableOpacity style={{height:85,width:size.width,flexDirection:'row',
                                    borderBottomLeftRadius:85*0.6,
                                    borderBottomWidth:0,
                                    borderColor:'#E7E4E9',
                                    borderLeftWidth:0,}}
                                    onPress={()=> this.pushTo(item,index)}
                                    >
                                <View style={{flex:0.2,justifyContent:'flex-start',alignItems:'flex-end'}}>
                                    <CheckBox
                                        uncheckedIcon={<Image style={{top:1}} source={require('../../System_img/uncheck.png')} />}
                                        checkedIcon={<Image style={{top:1}} source={require('../../System_img/check.png')} />}
                                        checked={this.state.checked[index]}
                                        onPress={() => this.changeState(index)}
                                    />
                                </View>
                                <View style={{flex:0.8,top:16.5,alignItems:'flex-start',justifyContent:'flex-start'}}>
                                    <Text style={[this.changeText(this.state.checked[index]),{justifyContent:'flex-end',flexWrap:'wrap',width:global.size.width}]}>
                                        {'\u00A0\u00A0\u00A0'+item.value+'\u00A0\u00A0\u00A0'}
                                    </Text>
                                    <View style={{left:10,marginTop:15,flexDirection:'row'}}>
                                        <Image style={{height:15,width:15,bottom:-2.3}} source={require('../../System_img/icons-dark-time.png')}/>
                                        <Text style={{marginRight:20,color:'#707070'}}>{'   '+item.startTime}</Text>
                                        {this.renderBookIcon(item.book)}
                                        {this.renderNotificationIcon(item.notification)}
                                        {this.renderColorIcon(item.color)}
                                    </View>
                                </View>
                            </TouchableOpacity>)
                        }}
                        
                    />
                    </ScrollView> 
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
            return {color:'#fff'}
        }
    }

    changeTab(index){

    }

    pushTo = (item,index) =>{
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name:'TaskDetail',
                component: TaskDetail,
                params:{
                    navigator:this.props.navigator,
                    item:item,
                    index:index
                }
            });
        }
    }


    pushToNewTask = () =>{
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name:'AddNewTask',
                component: AddNewTask,
                params:{
                    navigator:this.props.navigator,
                }
            });
        }
    }

    renderBookIcon(isBool){
        if(isBool){
            return (<Image style={{height:10.5,width:12,bottom:-4.2,marginRight:15}} source={require('../../System_img/heart.png')} />)
        }
    }

    renderNotificationIcon(isBool){
        if(isBool){
            return (<Image style={{height:11,width:10,bottom:-4.2,marginRight:17}} source={require('../../System_img/icons-dark-notification.png')} />)
        }
    }

    renderCalenderIcon(isBool){
        if(isBool){
            return (<Image style={{height:11,width:10,bottom:-4.2,marginRight:17}} source={require('../../System_img/icons-dark-notification.png')} />)
        }
    }

    renderColorIcon(color){
        var c = global.colors;
        for(var i = 0;i<c.length;i++){
            if(c[i].name == color){
                return (<View style={{backgroundColor:c[i].color,height:10,width:10,top:4.4,borderRadius:5}}></View>)
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor:'#fff'
    }
});

module.exports=HomePage;
