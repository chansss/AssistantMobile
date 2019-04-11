import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,UIManager, findNodeHandle,Alert,TouchableOpacity,ScrollView} from 'react-native';
import {Badge} from 'react-native-elements'

type Props = {};
export default class TaskDetail extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state={
           item : this.props.item,
           index : this.props.index
        };

    }


    componentWillMount(): void {

    }

    render() {
        return (
            <View style={{flex:1}}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

module.exports=TaskDetail;
