import React, {  Component, View }  from 'react-native';

export default class extends Component {
    render()  {
        return (
            <View style={styles.card}>
                {this.props.children}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15,
        marginTop: 15
    }
});
