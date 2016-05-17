/* @flow */
import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DropDown, { Select, Option, OptionList } from 'react-native-selectme';
import Icon from 'react-native-vector-icons/Ionicons';
import Message from '../../components/message';
import variables from '../../components/global/variables';
import localization from '../../components/localization/localization';
import PageDivider from '../../components/page_divider';
import Button from '../../components/button'
import Page from '../../components/page';
//import actionTypes from '../../actions/action_types';

function mapStateToProps(state) {
    return {
        order: state.order,
        session: state.session,
        loading: state.loading,
        error: state.error
    }
}

const mockData = [
    { id:1, name:"李时珍", title:"title1" },
    { id:2, name:"扁鹊", title:"title2" },
    { id:3, name:"华佗", title:"title3" },
    { id:4, name:"谁谁谁", title:"title4" },
    { id:5, name:"小花", title:"title5" },
]

var Consult = React.createClass({

    getInitialState:function(){
        return {
            loading: false,
            error: {},
            doctor: ''
        };
    },

    componentDidMount:function() {
        // load details
    },

    _getOptionList:function() {
        return this.refs['OPTIONLIST'];
    },

    componentWillReceiveProps:function(nextProps) {
        this.setState({
            loading: false,
            error: nextProps.error
        })
    },

    onSelectDoctor:function(option) {
        console.log(option)
        this.setState({
          ...this.state,
          doctor: option
        });
    },

    render:function(){
        console.log("Window width: ", windowWidth)

        return <View style={styles.detailContainer}>
          <View style={[styles.detailContent]}>

            <PageDivider title={'选择医生'} />
            <View>
                <Select width={windowWidth - 40}
                        defaultValue="华佗"
                        optionListRef={this._getOptionList}
                        onSelect={this.onSelectDoctor}
                        style={styles.textInputWrapper}>
                    {mockData.map((item) => {
                        return <Option value={item}>{item.name}</Option>
                    })}
                </Select>

                {/* The dropdown layout need to be over the next component, so keey the option list at last */}
                <PageDivider title={'问题描述'} />
                <View style={styles.textInputWrapper}>
                    <TextInput multiline={true} style={styles.textInput} placeholder={'请详细描述您要咨询的问题'}/>
                </View>

                <OptionList ref="OPTIONLIST" overlayStyles={styles.overlay}/>
            </View>

            <PageDivider title={'用药情况'} />
            <View style={styles.textInputWrapper}>
                <TextInput multiline={true} style={styles.textInput} placeholder={'请详细列出您正在使用的药物'}/>
            </View>

            <PageDivider title={'局部照片'} />
            <View style={[styles.textInputWrapper, styles.textInput]}>
                <Icon name={'ios-camera'} size={40} color={'#009af1'} />
            </View>

            <Button style={{marginTop: 15}} type="bordered" onPress={()=>{console.log('press save button')}}>
                提交
            </Button>

          </View>
        </View>
    },

})

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
      text: {
          fontSize: 16
      },

      detailContainer: {
          flex: 1,
          backgroundColor: '#EBEEF0',
          // backgroundColor: '#EBEEF0',
          // justifyContent: 'space-around'
          justifyContent: 'space-between',
          paddingTop: variables.navBarHeight
      },

      detailContent: {
          //flex: 1,
          //width: windowWidth - 20,
          backgroundColor: '#EBEEF0',
          marginLeft: 20,
          marginRight: 20
      },

      detailFooter: {
          paddingLeft: 14,
          paddingRight: 14,
          paddingBottom: 14
      },

      textInputWrapper: {
          backgroundColor:'#fff',
          marginBottom:20,
          borderRadius: 10
      },

      textInput: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          borderColor: '#EBEEF0',
          borderWidth: 1,
          padding: 10
      },

      overlay: {
        position: 'absolute',
        width: window.width,
        height: window.height/2,
        flex : 1,
        justifyContent : "center",
        // alignItems : "flex-start",
        alignItems : "center",
        backgroundColor : "#ffffff"
      }
})

export default connect(mapStateToProps)(Consult);
