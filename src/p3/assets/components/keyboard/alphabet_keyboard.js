import React from 'react';
import Key from './key';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let firstLineKeyArr = 'QWERTYUIOP'.split('').map((value) => {
            return <Key value={value} key={value} onKeyPress={this.props.onKeyPress}>{value}</Key>
        });
        let secondLineKeyArr = 'ASDFGHJKL'.split('').map((value) => {
            return <Key value={value} key={value} onKeyPress={this.props.onKeyPress}>{value}</Key>
        });
        let thirdLineKeyArr =  'ZXCVBNM'.split('').map((value) => {
            return <Key value={value} key={value} onKeyPress={this.props.onKeyPress}>{value}</Key>
        });
        const helpKey = (
            <Key value="help" key="help" className="kb-key--switch" reverse={true} onKeyPress={this.props.onSwitch}>123</Key>
        );
        thirdLineKeyArr.unshift(helpKey);
        thirdLineKeyArr.push(<Key value="del" key="del" reverse={true} className="kb-key--del" onKeyPress={this.props.onKeyPress}><i className="iconfont icon-del"/></Key>);
        return (
            <div className="abc-kb">
                <div className="kb">{firstLineKeyArr}</div>
                <div className="kb">{secondLineKeyArr}</div>
                <div className="kb">{thirdLineKeyArr}</div>
            </div>
        )
    }
}

export default Keyboard;