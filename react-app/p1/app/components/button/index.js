import React, {  Component, StyleSheet }  from 'react-native';
import Button from 'react-native-button';

export default class extends Component {
    onPress() {
        !this.props.disabled && this.props.onPress();
    }
    render() {
        return (
            <Button
                containerStyle={[styles.btn, this.props.disabled && styles.disabled, this.props.type && styles[this.props.type], this.props.style]}
                style={[styles.text, this.props.type && styles[this.props.type + 'Text']]}
                onPress={this.onPress.bind(this)}
            >
                {this.props.text || this.props.children}
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 5,
        paddingVertical: 11,
        paddingHorizontal: 10,
        backgroundColor: '#009af1'
    },

    disabled: {
        backgroundColor: '#e0e0e0'
    },

    bordered: {
        borderWidth: 1,
        borderColor: '#009af1',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontWeight: 'normal',
        fontFamily: 'System'
    },
    borderedText: {
        color: '#009af1'
    }
});
