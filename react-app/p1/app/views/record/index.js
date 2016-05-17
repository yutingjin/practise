/* @flow*/
import React from 'react'
import { View, Text, TouchableOpacity, Component } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
//import Loading from '../../components/loading';
import RecordSection from './section';
import ListView from '../../components/list_view';
import Page from '../../components/page';
import Card from '../../components/card';
import { errorCodes, orderStatuses, paymentStatuses } from '../../actions/action_code';
import styles from './styles';
import mockData from './mockData'

function mapStateToProps(state) {
    return {
        loading: state.loading,
        session: state.session,
        error: state.error,
        orders: state.orders
    }
}

var Records = React.createClass({

    componentDidMount() {
    },

    componentDidUpdate(prevProps) {
    },

    loadMore(){
      console.log("load more")
    },

    detail(orderId) {
        Actions.orderDetail({orderId: orderId});
    },

    renderRow(rowData) {
        let item = rowData;
        return (
            <Card key={'card_id'}>
                <RecordSection order={item} onPress={()=>{console.log('press section')}}/>
            </Card>
        );
    },

    render() {
        //let orders = this.props.orders;
        return (
            <Page>
                <ListView
                    renderRow={this.renderRow}
                    renderScrollComponent={props => <InfiniteScrollView {...props} />}
                    dataSource={mockData || []}
                    onLoadMoreAsync={this.loadMore}
                    isRefreshable={true}
                    onRefresh={this.loadMore(0)}
                    renderFooter={() => {
                            // if (!!orderList && this.props.loading) {
                            //     return <Loading style={{padding: 14}} />
                            // }
                            return null;
                        }}
                    distanceToLoadMore={-10}
                />
            </Page>
        )
    }
});

export default connect(mapStateToProps)(Records);
