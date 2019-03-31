import {Dimensions,Platform,StatusBar,PixelRatio} from  'react-native';

const {width, height} = Dimensions.get('window');
const  OS = Platform.OS;
const ios = (OS == 'ios');
const android = (OS == 'android');
const  isIPhoneX = (ios && height == 812 && width == 375);
const  statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);

global.color = {
    black_header:'#241332',
    white_header:'#fff',
    gray:'#241332',
    purple:'#8A56AC',
    pink:'#241332',
    green1:'#241332',
    green2:'#52912E',
    green3:'#253E12',
    blue1:'#4EBDEF',
    blue2:'#4666E5',
    blue3:'#132641',
    other:'#58B2BE',
    button_gray:'#998FA2',

 };

global.size={
    width:width,
    height:height
};