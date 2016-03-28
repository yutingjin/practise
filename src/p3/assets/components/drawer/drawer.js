import './drawer.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
//import localization from '../localization/localization';

class Drawer extends React.Component {

    constructor(props) {
        super(props);
        this.onClickOutside = this.onClickOutside.bind(this);
    }

    onClickOutside(e) {
        let localEle = ReactDOM.findDOMNode(this);
        let source = e.target;
        while(source.parentNode) {
            if (source === localEle) {
                return
            }
            source = source.parentNode;
        }
        this.props.onMenuClick()
    }

    componentDidMount() {
        document.addEventListener("touchstart", this.onClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("touchstart", this.onClickOutside);
    }

    render() {
        let className = 'drawer';
        if (this.props.open){
            className += ' drawer--open';
        }
        const userName = this.props.currentUser ? this.props.currentUser.mobile : "loading";
        return (
            <div className={className}>
                <ul className="drawer-list">
                    <li className="drawer-item">
                        <i className="drawer-item--icon iconfont icon-history"/>
                        <Link className="drawer-item--title" to="/menu1" onClick={this.props.onMenuClick}>menu1</Link>
                    </li>
                    <li className="drawer-item">
                        <i className="drawer-item--icon iconfont icon-help"/>
                        <a className="drawer-item--title" href="/faq">Help</a>
                    </li>
                    <li className="drawer-item">
                        <i className="drawer-item--icon iconfont icon-about"/>
                        <a className="drawer-item--title" href="/about">About Us</a>
                    </li>
                    {
                        this.props.session &&
                        <li className="drawer-item drawer-item--logout">
                            <i className="drawer-item--icon iconfont icon-logout"/>
                            <Link className="drawer-item--title drawer-item--title--logout" to="/" onClick={this.props.onLogout}>{localization.LOGOUT}</Link>
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

Drawer.defaultProps = {
    onMenuClick: function() {}
};

export default Drawer;