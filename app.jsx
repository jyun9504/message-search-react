import React from 'react';
import ReactDOM from 'react-dom';
import MessageForm from './src/view/messageForm'

let data = [{id:'1',name:'王境澤',message:'真香！'},
            {id:'2',name:'泡泡龍',message:'香啊，皂啊，吃了洗泡泡啊！'},
            {id:'3',name:'嘎拉嘎拉',message:'嘎拉嘎拉嘎拉～'},
            {id:'4',name:'館長',message:'頭家哇盃美幾底嘎拉嘎拉！'},
            {id:'5',name:'荷馬·辛普森',message:'在快樂一點點，我要露三點～'},];

class App extends React.Component {
    render() {
        return <MessageForm messageData={data} />
    }
}


ReactDOM.render(<App />,document.getElementById('root'))
