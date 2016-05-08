/* @flow*/
import React, {
    View,
    Text,
    TouchableOpacity,
    Component
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
//import Loading from '../../components/loading';
import ListView from '../../components/list_view';
import Page from '../../components/page';
import Card from '../../components/card';
import { errorCodes, orderStatuses, paymentStatuses } from '../../actions/action_code';
import styles from './styles';

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
        this.setState({})
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
              <Text>3月3日 预约1诊室 </Text>
            </Card>
        );
    }

    render() {
        //let orders = this.props.orders;
        let orders = {
          items:[{
            id: 123
          },{
            id: 123
          },{
            id: 123
          },{
            id: 123
          },{
            id: 123
          }],
          totalCount: 5
        }

        return (
            <Page>
                <ListView
                    renderRow={this.renderRow.bind(this)}
                    renderScrollComponent={props => <InfiniteScrollView {...props} />}
                    dataSource={orders.items || []}
                    canLoadMore={!this.props.loading && orders.totalCount > (orders.items ||[]).length}
                    isLoadingMore={this.props.loading && orders.totalCount > (orders.items ||[]).length}
                    onLoadMoreAsync={this.loadMore.bind(this)}
                    isRefreshable={true}
                    onRefresh={this.loadMore.bind(this, 0)}
                    renderFooter={() => {
                            // if (!!orders.items && this.props.loading) {
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
