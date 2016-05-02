import React, {  Component, View } from 'react-native';
import { connect } from 'react-redux';
import { DefaultRenderer } from 'react-native-router-flux';

import styles from './styles';

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