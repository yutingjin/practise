/* @flow */
import React from 'react'
import { Component, View, StyleSheet, Text, TouchableHighlight, Dimensions, Image, Linking} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
//import Loading from '../../components/loading';
import Page from '../../components/page';
import Button from '../../components/button';
import TextInput from '../../components/text_input';
import localization from '../../components/localization/localization';

const { width } = Dimensions.get('window');
const iconSize = width / 5;

function mapStateToProps(state) {
    return {
        global: state.global
    }
}

class Info extends Component {

    state : {
        userId: '',
        userName: '',
        mobileNo: '',
        sex: '',
        birthday: '',
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            userId: '',
            userName: '',
            mobileNo: '',
            sex: '',
            birthday: '',
        })
    }

    placeholder(){

    }

    onNameChange(event){
      this.setState({
          userName: event.nativeEvent.text
      });
    }

    onMobileNoChange(event){
      this.setState({
          mobileNo: event.nativeEvent.text
      })
    }

    render() {
        let state = this.state ? this.state : {};
        return (
          <Page>
            <View style={styles.container}>
                <View style={[styles.section, styles.row]}>
                    <View>
                        <Icon name={'person'} size={40} color={'gray'} />
                    </View>
                    <View style={{flex: 1}}>
                        <TextInput
                            maxLength={24}
                            keyboardType="default"
                            placeholder="姓名"
                            value={state.userName}
                            onChange={this.onNameChange.bind(this)}
                            onBlur={this.placeholder.bind(this)}
                        />
                    </View>
                </View>
                <View style={[styles.row, styles.section]}>
                    <View>
                        <Icon name={'male'} size={40} color={'gray'} />
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput
                            keyboardType="default"
                            placeholder="性别"
                            value={state.sex}
                            onChange={this.placeholder.bind(this)}
                            onBlur={this.placeholder.bind(this)}
                        />
                    </View>
                </View>
                <View style={[styles.row, styles.section]}>
                    <View>
                        <Icon name={'ios-telephone'} size={40} color={'gray'} />
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput
                            keyboardType="phone-pad"
                            placeholder="手机号码"
                            value={state.mobileNo}
                            onChange={this.onMobileNoChange.bind(this)}
                            onBlur={this.placeholder.bind(this)}
                        />
                    </View>
                </View>
                <View style={[styles.row, styles.section]}>
                    <View>
                        <Icon name={'ios-telephone'} size={40} color={'gray'} />
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput
                            keyboardType="phone-pad"
                            placeholder="出生日期"
                            value={state.birthday}
                            onChange={this.placeholder.bind(this)}
                            onBlur={this.placeholder.bind(this)}
                        />
                    </View>
                </View>
                <Button disabled={false} onPress={this.placeholder.bind(this)}>{localization.SAVE}</Button>
            </View>
          </Page>
        )
    }
}

export default connect(mapStateToProps)(Info);

// Styles
const styles = StyleSheet.create({
    content: {
        flex: 1
    },

    container: {
        flex: 1,
        padding: 15
    },

    row: {
        flexDirection: 'row',
        marginHorizontal: 15
    },

    section: {
        marginBottom: 15
    },

    cardIcon: {
        position: 'absolute',
        left: 7,
        top: 10.5
    },

    cardInfo: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 15,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardNumber: {
        fontSize: 20,
        paddingVertical: 15,
        color: '#333',
        fontWeight: '200'
    },
    metaInfo: {
        marginHorizontal: 15
    },
    metaTitle: {
        fontSize: 13,
        paddingBottom: 5,
        color: '#333',
        fontWeight: '200'
    },
    metaVal: {
        fontSize: 18,
        color: '#333',
        fontWeight: '200'
    }
});
