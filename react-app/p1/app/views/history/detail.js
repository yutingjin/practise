/* @flow weak */
import React, {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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

class Order extends React.Component {

    state : {
        loading: false,
        error: {}
    };

    // getInitialState() {
    //     return {
    //       loading: false,
    //       error: {}
    //     };
    // }

    componentDidMount() {
        // this.props.dispatch(order(this.props.session, this.props.orderId))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: false,
            error: nextProps.error
        })
    }

    cancelOrder(){
        let actions = [
          {name: localization.CANCEL, type: 'default', action: (()=>{console.log('press cancel')}).bind(this)},
          {name: localization.CONFIRM, type: 'primary', action: (()=>{console.log('press ok')}).bind(this)}
        ];
        return (
            <Dialog
                title={'Cancel order'}
                message={'blablabla'}
                actions={actions}
            />
        )
    }

    render() {
        const order = this.props.order;
        return (
            <Page>
                {
                    (() => {
                        let title = <Text style={styles.finished}>{localization.OK}</Text>;
                        let icon = 'ios-checkmark';
                        let iconColor = variables.$green;
                        return (
                            <View style={styles.detailContainer}>
                                <View style={[styles.detailContent]}>
                                    <Message icon={icon} iconColor={iconColor}>{title}</Message>
                                    <PageDivider title={localization.DETAIL} />
                                    <Text>Order details</Text>
                                </View>
                                <View style={styles.detailFooter}>
                                    <Button style={{marginTop: 15}} type="bordered" onPress={this.cancelOrder.bind(this, true)}>
                                        {localization.REPORT_LOSS_TITLE}
                                    </Button>
                                </View>
                            </View>
                        )
                    })()
                }
            </Page>
        )
    }
}

export default connect(mapStateToProps)(Order);
