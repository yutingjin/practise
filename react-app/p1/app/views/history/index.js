/* @flow*/
import React from 'react'
import { View, Text, TouchableOpacity, Component } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
//import Loading from '../../components/loading';
import OrderSection from '../../components/order_list_section';
import ListView from '../../components/list_view';
import Page from '../../components/page';
import Card from '../../components/card';
import { errorCodes, orderStatuses, paymentStatuses } from '../../actions/action_code';
import styles from './styles';
import orderList from './orderList'

function mapStateToProps(state) {
    return {
        loading: state.loading,
        session: state.session,
        error: state.error,
        orders: state.orders
    }
}

class History extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // if (this.props.session) {
        //     this.props.dispatch(orders(this.props.session, 0));
        // }
    }

    componentDidUpdate(prevProps) {
        // if (!prevProps.session && this.props.session !== prevProps.session) {
        //     this.props.dispatch(orders(this.props.session, 0));
        // }
    }

    loadMore(){
      // TODO
      console.log("load more")
    }

    detail(orderId) {
        Actions.orderDetail({orderId: orderId});
    }

    renderRow(rowData) {
        let item = rowData;
        return (
            <Card key={'card_id'}>
                <OrderSection order={item} onPress={()=>{console.log('press section')}}/>
            </Card>
        );
    }

    render() {
        //let orders = this.props.orders;
        return (
            <Page>
                <ListView
                    renderRow={this.renderRow.bind(this)}
                    renderScrollComponent={props => <InfiniteScrollView {...props} />}
                    dataSource={orderList || []}
                    onLoadMoreAsync={this.loadMore.bind(this)}
                    isRefreshable={true}
                    onRefresh={this.loadMore.bind(this, 0)}
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
}

export default connect(mapStateToProps)(History);
