/* @flow */
import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//import { Select, Option, OptionList, updatePosition } from 'react-native-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Message from '../../components/message';
import variables from '../../components/global/variables';
import localization from '../../components/localization/localization';
import PageDivider from '../../components/page_divider';
import Button from '../../components/button'
import Page from '../../components/page';
// import { order, reportLoss } from '../../actions/order';
import { errorCodes, orderStatuses, paymentStatuses, orderSteps } from '../../actions/action_code';
import actionTypes from '../../actions/action_types';


import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

function mapStateToProps(state) {
    return {
        order: state.order,
        session: state.session,
        loading: state.loading,
        error: state.error
    }
}

const mockData = [
    { id:1, name:"option1", title:"title1" },
    { id:2, name:"option2", title:"title2" },
    { id:3, name:"option3", title:"title3" },
    { id:4, name:"option4", title:"title4" },
    { id:5, name:"option5", title:"title5" },
]

var RecordDetails = React.createClass({

    getInitialState:function(){
        return {
            loading: false,
            error: {},
            canada: '',
            usa: ''
        };
    },

    componentDidMount:function() {
        // load details
        // updatePosition(this.refs['SELECT1']);
        // updatePosition(this.refs['SELECT2']);
        // updatePosition(this.refs['OPTIONLIST']);
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

    editRecord:function(){
        // TODO
        console.log("edit record")
    },

    onSelect:function(options){
        console.log(options)
    },

    renderFull:function() {
        const order = this.props.order;
        let title = <Text style={styles.text}>{localization.OK}</Text>;
        let icon = 'ios-checkmark';
        let iconColor = variables.$green;

        console.log("Window width: ", windowWidth)
        return (
            <View style={styles.detailContainer}>
                <View style={[styles.detailContent]}>
                    <Message icon={icon} iconColor={iconColor}>{title}</Message>
                    <PageDivider title={localization.DETAIL} />
                    <View style={{backgroundColor:'#fff', marginBottom:30}}>
                        <TextInput multiline={true} style={styles.textInput}/>
                    </View>

                    <PageDivider title={localization.DETAIL} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Select width={windowWidth - 40} ref="SELECT1" defaultValue="Select an option ..."
                                optionListRef={this._getOptionList}
                                onSelect={this._canada}>
                            {mockData.map((item) => {
                                return <Option>{item.name}</Option>
                            })}
                        </Select>

                        <Text>Selected Canadas province: {this.state.canada}</Text>

                        <OptionList ref="OPTIONLIST"/>
                    </View>

                    <PageDivider title={localization.DETAIL} />
                    <View style={{backgroundColor:'#fff', marginBottom:30}}>
                        <TextInput multiline={true} style={styles.textInput}/>
                    </View>
                </View>
                <View style={styles.detailFooter}>
                    <Button style={{marginTop: 15}} type="bordered" onPress={this.editRecord}>
                        Footer Button
                    </Button>
                </View>
            </View>
        )
    },

    render:function(){
        let title = <Text style={styles.text}>{localization.OK}</Text>;
        let icon = 'ios-checkmark';
        let iconColor = variables.$green;

        return <View style={styles.detailContainer}>
          <View style={[styles.detailContent]}>


            <PageDivider title={'选择医生'} />
            <View>
                <Select width={windowWidth - 40} ref="SELECT1"
                        defaultValue="华佗"
                        optionListRef={this._getOptionList}
                        onSelect={this._canada}
                        style={{backgroundColor:'#fff', marginBottom:20}}>
                  <Option>华佗</Option>
                  <Option>扁鹊</Option>
                  <Option>李时珍</Option>
                </Select>

                <PageDivider title={'问题描述'} />
                <View style={{backgroundColor:'#fff', marginBottom:30}}>
                    <TextInput multiline={true} style={styles.textInput}
                               placeholder={'   请详细描述您要咨询的问题'}/>
                </View>

                <OptionList ref="OPTIONLIST" overlayStyles={styles.overlay}/>

            </View>

            <PageDivider title={'用药情况'} />
            <View style={{backgroundColor:'#fff', marginBottom:30}}>
                <TextInput multiline={true} style={styles.textInput}
                           placeholder={'   请详细列出您正在使用的药物'}/>
            </View>

            <Message icon={icon} iconColor={iconColor}>{title}</Message>

          </View>
        </View>
    },

    // render:function(){
    //     return <View>
    //         {this.renderSelect()}
    //     </View>
    // },

    _canada:function(state) {
      this.setState({
        ...this.state,
        usa: state
      });
    },

})

/**
{mockData.map((item) => {
    return <Option>{item.name}</Option>
})}
*/

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

      dropDown: {
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center'
      },

      dropDownOption: {
          // backgroundColor: '#fff',
          backgroundColor: 'yellow',
      },

      textInput: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // width: windowWidth - 20,
          height: 80,
          borderColor: '#EBEEF0',
          borderWidth: 1
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

export default connect(mapStateToProps)(RecordDetails);
