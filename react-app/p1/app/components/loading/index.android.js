import React, { View, Text, ProgressBarAndroid, Component, StyleSheet } from 'react-native';
import capitalize from 'lodash/capitalize';

class Loading extends Component {
    render() {
        let size = "Normal";
        if (this.props.size) {
            size = capitalize(this.props.size);
        }
        return (
            <View style={[styles.centering, styles.loading]}>
                <ProgressBarAndroid
                    color={this.props.color || 'gray'}
                    styleAttr={size}
                />
                {this.props.tip && <Text style={styles.tip}>{this.props.tip}</Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    gray: {
        backgroundColor: '#cccccc'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tip: {
        marginTop: 10,
        color: '#666'
    }
});

export default Loading;
