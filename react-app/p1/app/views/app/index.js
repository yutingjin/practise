import React, { Component, View, StyleSheet, NetInfo, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Loading from '../../components/loading';
import { menu, isConnected, userGuide } from '../../actions/common';

var { height, width } = Dimensions.get('window');

function mapStateToProps(state) {
    return {
        //global: state.global
    };
}

class App extends Component {

    componentDidMount() {
//        this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
//        NetInfo.isConnected.addEventListener('change', this.handleConnectivityChange);
//        NetInfo.isConnected.fetch().done(
//            (connected) => {
//                this.handleConnectivityChange(connected);
//            }
//        );
        setTimeout(Actions.main, 1000);
    }

    componentDidUpdate() {
//        if (this.props.global.showUseGuide) {
//            Actions.userGuide();
//        } else {
//            setTimeout(Actions.main, 2000);
//        }
    }

    handleConnectivityChange(connected) {
        this.props.dispatch(isConnected(connected));
    }

    render() {
        return (
            // <Image source={require('./splash.png')} style={[styles.container, {width: width, height: height}]}>
            //     <Loading color="#fff" />
            // </Image>
            <Text>Study React Native</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect(mapStateToProps)(App);
