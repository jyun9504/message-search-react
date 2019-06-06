import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';



class MessageBlock extends React.Component {
    render() {
      console.log(this.props.searchName)
        let message = this.props.messageData.map((item)=>{
            if(item.name.indexOf(this.props.searchName) != -1){
              return <Message key={item.id} name={item.name} message={item.message} />
            }
        })
        return (
          <div>
            {message}
          </div>
        )
    }
}


export default MessageBlock
