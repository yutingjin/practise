import React, {Text, Component, StyleSheet} from 'react-native';

export default class extends Component {
    render() {
        return <Text style={styles.barTitleText}>{this.props.title}</Text>
    }
}

var styles = StyleSheet.create({
    barTitleText: {
        color: '#fff',
        fontFamily: '.HelveticaNeueInterface-MediumP4',
        fontSize: 17,
        marginTop: 11
    }
});
