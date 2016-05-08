import React, {Component, TextInput, StyleSheet} from 'react-native';

class SimpleTextInput extends Component {
    render() {
        const { hasError } = this.props;

        return (
            <TextInput {...this.props}
                style={[styles.input, hasError && styles.hasError, this.props.style]}
                placeholderTextColor="#ddd"
                clearButtonMode="while-editing"
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 42,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    hasError: {
        color: 'red'
    }
});

export default SimpleTextInput;