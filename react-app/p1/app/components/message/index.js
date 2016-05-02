import React, {View, Text, Image, Component, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Message extends Component {

    render() {
        const { width } = Dimensions.get('window');
        let iconSize = width / 5;
        return (
            <View style={styles.container}>
                <Icon name={this.props.icon} size={iconSize} color={this.props.iconColor} />
                <View>{this.props.children}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    }
});

export default Message;
