/**
 * Created by Summer on 2016/9/26.
 */

import React, {Component, PropTypes} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

var Prop = React.PropTypes;

export default class NavigationSence extends Component {

    //static 用来修饰组件默认属性
    static propTypes = {
        title: Prop.string.isRequired,
        onForward: Prop.func.isRequired,
        onBack: Prop.func.isRequired,
    };

    _testFunc() {
        // alert("func 1");
    }

    _testFunc2() {
        alert("func 2");
    }

    render() {
        return (

            <View style={{backgroundColor: '#abc'}}>

                <Text>标题:{this.props.title}</Text>

                <TouchableOpacity style={styles.button} onPress={this.props.onForward}>
                    <Text style={styles.text}> Next Scene</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]} onPress={this.props.onBack}>
                    <Text style={styles.text}> Last Scene</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.button, {marginBottom: 30}]} onPress={this._testFunc2.bind(this)}>
                    <Text style={styles.text}>func2</Text>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={this._testFunc}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 50, backgroundColor: 'blue'}}>
                        <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    button: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 30

    },

    text: {
        fontSize: 16,
        color: 'white',
    },
});