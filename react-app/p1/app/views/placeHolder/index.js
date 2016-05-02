import React, { Component, View, StyleSheet, Text, TextInput, TouchableHighlight, Dimensions, Image, Linking} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { connect } from 'react-redux';
import Loading from '../../components/loading';

class PlaceHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"479247893247293"
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                <Text style={styles.intro}>Mobile</Text>
                <TextInput
                    style={styles.intro}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
            </View>
        )
    }
}


const width = Dimensions.get('window').width;
const baseSize = Math.floor(width / 27);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 0,
        paddingVertical: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    headerText: {
        marginTop: 6,
        fontSize: 18
    },

    tableView: {
        backgroundColor: '#fff'
    },

    tableCell: {
        flexDirection: 'row',
        padding: baseSize,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellBd: {
        fontSize: baseSize + 2,
        flex: 1
    },
    version: {
        fontSize: baseSize + 1,
        color: '#aaa'
    },
    introContainer: {
        padding: baseSize,
        flex: 1
    },
    introTitle:{
        textAlign: 'center',
        fontSize: baseSize + 4,
        marginVertical: baseSize+2
    },
    intro: {
        fontSize: baseSize,
        color: '#888',
        paddingBottom: baseSize / 2,
        textAlign: 'center'
    },
    footer: {
        padding: 10,
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    copyright: {
        fontSize: baseSize - 2,
        color: '#888'
    },
});

function mapStateToProps(state) {
    return {
        global: state.global
    }
}

export default connect(mapStateToProps)(PlaceHolder);
