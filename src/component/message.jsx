import React from 'react';
import ReactDOM from 'react-dom';



class Message extends React.Component {
    render(){
        let divStyle={marginBottom:20}
        let messageStyle={marginLeft:20}
        return(
            <div style={divStyle}>
                <div>{this.props.name}說：</div>
                <div style={messageStyle}>{this.props.message}</div>
            </div>
        )
    }
}


export default Message
