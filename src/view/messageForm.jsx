import React from 'react';
import ReactDOM from 'react-dom';
import MessageBlock from '../component/messageBlock';
import SearchBlock from '../component/searchBlock';

class MessageForm extends React.Component {
    render() {
        return (
          <div>
            <SearchBlock />
            <MessageBlock messageData={this.props.messageData} />
          </div>
        )
    }
}


export default MessageForm
