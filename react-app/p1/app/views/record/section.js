/* @flow */
import React from 'react';
import { Component, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import fecha from 'fecha';
import localization from '../../components/localization/localization'

export default class extends Component {

    renderStatus(order: Object) {
        return (
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{order.status}</Text>
            </View>
        )
    }

    render() {
        const order = this.props.order;
        return (
            <TouchableOpacity style={[styles.section, this.props.style]} onPress={this.props.onPress}>
                <View style={{flex: 1, flexDirection: 'row'}} >
                    <View style={styles.container}>
                        <View style={styles.horizontal}>
                            <Text style={[styles.text, styles.title]}>
                              {order.code}
                              <Text style={[styles.text, styles.time, {textAlign: 'right'}]}>
                                {fecha.format(order.time, localization.TIME_FORMAT)}
                              </Text>
                            </Text>
                        </View>
                        <View style={styles.horizontal}>
                            <Text numberOfLines={1} style={styles.address}>诊断：{order.diagnosis}</Text>
                            <Text numberOfLines={1} style={styles.address}>处方：{order.prescription}</Text>
                        </View>
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
        height: 60,
        paddingTop: 10,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 10,
        alignItems: 'center'
    },
    time: {
        color: '#ababab',
        fontSize: 12,
        paddingLeft: 14
    },
    address: {
        color: '#6f6f6f'
    },
    text: {
        fontSize: 14,
    },
    priceWrapper: {
    },
    priceQuote: {
        fontSize: 8,
        color: '#5fc7f4',
        textAlign: 'right'
    },
    price: {
        fontSize: 20,
        color: '#0093f3',
        textAlign: 'right'
    },
    horizontal: {
        //alignItems: 'center',
    },
    title: {
        paddingRight: 15
    },
    orderSectionReturn: {
        borderStyle: 'solid'
    },
    container: {
        flex: 1
    }
});
