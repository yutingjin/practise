import React, { Component, View, Text, StyleSheet, ListView, TouchableHighlight } from 'react-native';

class Header extends Component {
    render() {
        return <View style={styles.title}><Text style={styles.titleText}>{this.props.title}</Text></View>
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#ebeef0',
        padding: 13,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -2
        }
    },
    titleText: {
        fontSize: 16
    }
});

export default Header;
