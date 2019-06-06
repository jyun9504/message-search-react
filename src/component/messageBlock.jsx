import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';



class MessageBlock extends React.Component {
    render() {
        let message = this.props.messageData.map((item)=>{
            return <Message key={item.id} name={item.name} message={item.message} />
        })
        return (
          <div>
            {message}
          </div>
        )
    }
}


export default MessageBlock
