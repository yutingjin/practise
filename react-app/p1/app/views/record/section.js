/* @flow */
import React from 'react';
import { Component, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import fecha from 'fecha';
import localization from '../../components/localization/localization'

export default class extends Component {

    render() {
        const order = this.props.order;
        return (
            <TouchableOpacity style={[styles.section, this.props.style]} onPress={this.props.onPress}>
                <View style={styles.container}>
                    <View style={[styles.horizontal, {flex:1}]}>
                        <Text style={[styles.text, styles.title]}>
                          {order.code}
                        </Text>
                        <Text style={styles.time}>
                          {fecha.format(order.time, localization.TIME_FORMAT)}
                        </Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.details}>医生：{order.doctor}</Text>
                        <Text numberOfLines={1} style={styles.details}>诊断：{order.diagnosis}</Text>
                        <Text numberOfLines={1} style={styles.details}>处方：{order.prescription}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        height: 85,
        paddingTop: 10,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 10,
        alignItems: 'center'
    },
    time: {
        color: '#ababab',
        fontSize: 12,
        paddingLeft: 14,
        flex: 1,
        textAlign: 'right',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    details: {
        color: '#6f6f6f',
        paddingTop: 3
    },
    text: {
        fontSize: 14,
    },
    horizontal: {
        // alignItems: 'center',
        flexDirection: "row",
    },
    title: {
        paddingRight: 15
    },
    container: {
        flex: 1
    }
});
