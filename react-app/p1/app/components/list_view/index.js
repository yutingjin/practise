import React, { Component, View, Text, StyleSheet, ListView, RefreshControl } from 'react-native';

class List extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows(this.props.dataSource);

        this.state = {
            ds: ds,
            isRefreshing: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.dataSource != nextProps.dataSource) {
            let ds = this.state.ds.cloneWithRows(nextProps.dataSource);
            this.setState({
                ds: ds,
                isRefreshing: false
            })
        }
    }

    onRefresh() {
        this.setState({
            isRefreshing: true
        }, () => {
            this.props.onRefresh && this.props.onRefresh();
        })
    }

    scrollToTop() {
        this.refs._listView.scrollTo({
            y: 0,
            x: 0,
            animated: false
        });
    }

    render() {
        const {dataSource, isRefreshable, ...extraProps} = this.props;
        if (isRefreshable) {
            extraProps.refreshControl= (
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.onRefresh.bind(this)}
                    tintColor="#ccc"
                />
            )
        }
        return (
            <ListView
                ref="_listView"
                {...extraProps}
                dataSource={this.state.ds}
            />
        )
    }
}

export default List;
