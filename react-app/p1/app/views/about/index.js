/* @flow weak */
import React from 'react'
import { Component, View, StyleSheet, Text, TouchableHighlight, Dimensions, Image, Linking} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { connect } from 'react-redux';
//import Loading from '../../components/loading';

function mapStateToProps(state) {
    return {
        global: state.global
    }
}

class About extends Component {

    state : {
        version : {}
    };

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Title <Text>{this.state.version}</Text></Text>
                </View>
                <View style={styles.introContainer}>
                    <Text style={styles.introTitle}>something</Text>
                    <View>
                        <Text style={styles.intro}>something</Text>
                        <Text style={styles.intro}>something</Text>
                        <Text style={styles.intro}>something</Text>
                        <Text style={styles.intro}>something</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.copyright}>footer</Text>
                </View>
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

export default connect(mapStateToProps)(About);
