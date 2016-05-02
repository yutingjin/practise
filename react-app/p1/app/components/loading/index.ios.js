import React, { View, Text, ActivityIndicatorIOS, Component, StyleSheet } from 'react-native';

class Loading extends Component {
    render() {
        return (
            <View style={[styles.centering, styles.loading]}>
                <ActivityIndicatorIOS
                    animating={true}
                    style={[styles.centering, this.props.style]}
                    size={this.props.size}
                    color={this.props.color || 'gray'}
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
