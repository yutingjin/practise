/* @flow */
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Message from '../../components/message';
import variables from '../../components/global/variables';
import localization from '../../components/localization/localization';
import PageDivider from '../../components/page_divider';
import Button from '../../components/button'
import Dialog from '../../components/dialog';
import Page from '../../components/page';
// import { order, reportLoss } from '../../actions/order';
import { errorCodes, orderStatuses, paymentStatuses, orderSteps } from '../../actions/action_code';
import actionTypes from '../../actions/action_types';
import styles from './styles';

function mapStateToProps(state) {
    return {
        order: state.order,
        session: state.session,
        loading: state.loading,
        error: state.error
    }
}

var RecordDetails = React.createClass({

    getInitialState:function(){
        return {
            loading: false,
            error: {}
        };
    },

    componentDidMount:function() {
        // load details
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

    render:function() {
        const order = this.props.order;
        let title = <Text style={styles.finished}>{localization.OK}</Text>;
        let icon = 'ios-checkmark';
        let iconColor = variables.$green;
        return (
            <Page>
                <View style={styles.detailContainer}>
                    <View style={[styles.detailContent]}>
                        <Message icon={icon} iconColor={iconColor}>{title}</Message>
                        <PageDivider title={localization.DETAIL} />
                        <Text>Order details</Text>
                    </View>
                    <View style={styles.detailFooter}>
                        <Button style={{marginTop: 15}} type="bordered" onPress={this.editRecord.bind(this)}>
                            {localization.REPORT_LOSS_TITLE}
                        </Button>
                    </View>
                </View>
            </Page>
        )
    },
})

export default connect(mapStateToProps)(RecordDetails);
