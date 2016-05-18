/* @flow */
import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import fecha from 'fecha';
import Icon from 'react-native-vector-icons/Ionicons';
import variables from '../../components/global/variables';
import localization from '../../components/localization/localization';
import PageDivider from '../../components/page_divider';
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

const mockData = {
        id:1,
        orderNo: "1881881",
        name:"德龙",
        gender:"男",
        age:30,
        phoneNumber:"13912345678",
        time:1463450449000,
    }

var Record = React.createClass({

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

    render:function(){
        console.log("Window width: ", windowWidth)
        const record = mockData

        return <View style={styles.detailContainer}>
          <View style={[styles.detailContent]}>

            <View style={[styles.textWrapper, {paddingTop:10}]}>
              <Text style={{justifyContent:"space-between", flex:1}}>订单编号: {record.orderNo}</Text>
              <Text>就诊时间: {fecha.format(record.time, localization.TIME_FORMAT)}</Text>
            </View>

            <PageDivider title={'患者信息'} />
            <View style={styles.textWrapper}>
                <View style={{flexDirection:"row", flex:1}}>
                  <Text style={{flex:1}}>姓名: {record.name}</Text>
                  <Text style={{flex:1}}>性别: {record.gender}</Text>
                  <Text style={{flex:1}}>年龄: {record.age}</Text>
                </View>

                <Text>手机: {record.phoneNumber}</Text>
            </View>


            <PageDivider title={'主治医师'} />
            <View style={styles.textWrapper}>
                <Text style={styles.text}>华佗</Text>
            </View>

            <PageDivider title={'诊断'} />
            <View style={styles.textWrapper}>
                <Text style={styles.text}>毛囊炎，真菌感染</Text>
            </View>

            <PageDivider title={'病情信息'} />
            <View style={styles.textWrapper}>
                <Text style={styles.text}>持续脱发2年，加重2周</Text>
            </View>

            <PageDivider title={'用药情况'} />
            <View style={styles.textWrapper}>
                <Text style={styles.text}>抗生素治疗两个疗程</Text>
            </View>

            <PageDivider title={'局部照片'} />
            <View style={[styles.textWrapper]}>
                <Image source={require('../../images/job3.jpg')} style={styles.image}/>
            </View>

          </View>
        </View>
    },
})

export default connect(mapStateToProps)(Record);

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
          borderRadius:20,
          justifyContent: 'space-between',
          paddingTop: variables.navBarHeight
      },

      detailContent: {
          // flex: 1,
          //width: windowWidth - 20,
          backgroundColor: '#fff',
          borderRadius:20,
          marginLeft: 20,
          marginRight: 20
      },

      detailFooter: {
          paddingLeft: 14,
          paddingRight: 14,
          paddingBottom: 14
      },

      textWrapper: {
          backgroundColor:'#fff',
          paddingLeft:20,
          paddingBottom:10
      },

      text: {
          // paddingLeft: 20
      },

      image: {
        width: 100,
        height: 100
      }
})
