import React, {View, Text, Component, StyleSheet, PixelRatio} from 'react-native';

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={[styles.line, styles.suffix]} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10
    },

    line: {
        flex: 1,
        height: 1 / PixelRatio.get(),
        backgroundColor: '#ccc',
        alignSelf: 'center'
    },

    suffix: {
        marginRight: 20,
        marginLeft: 20
    },

    title: {
        marginLeft: 10,
        fontSize: 16,
        textAlign: 'center',
        color: '#888'
    }
});
