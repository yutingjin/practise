import React, { View, Text, Component, StyleSheet } from 'react-native';
import variables from '../../components/global/variables';

class Page extends Component {

    render() {
        return (
            <View style={styles.container}>{this.props.children}</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEEF0',
        paddingTop: variables.navBarHeight
    }
});

export default Page;
