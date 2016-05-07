/* @flow weak */
import React from 'react'
import { Component, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DefaultRenderer } from 'react-native-router-flux';

function mapStateToProps(state) {
    return {
        //locationPermission: state.locationPermission
    };
}

class Home extends Component {

    render() {
        const children = this.props.navigationState.children;
        return (
            <View style={styles.container}>
                <DefaultRenderer navigationState={children[0]} />
            </View>
        )
    }
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EBEEF0'
    },
    center: {
        flex: 0,
        alignItems: 'center'
    }
});
