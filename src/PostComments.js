import React, { Component } from 'react';
import styled from 'styled-components'
class PostComments extends Component {
  state={
    comments:[
      {
        id:'1',
        body:'good'
      },
      {
        id:'2',
        body:'very good'
      }
    ],
    text:''
  }
  handleCommit = event => {
     this.setState({text:event.target.value})
     console.log(this.state.text)
  }
 
  //react表单要写成受控组件　　１．将表单变化的东西写成state ２．使用onChange事件修改state 修改成event.target.value
  
  render() {
    const commentsList = this.state.comments.map(
      comments => 
      <li key={comments.id}> {comments.body} </li>)
    
    return (
      <Warpper>
        <input type="text" value={this.state.text} onChange={this.handleCommit} />
        <button>评论</button>
        <ul>
          {commentsList}
        </ul>
      </Warpper>
    );
  }
}

export default PostComments;

const Warpper = styled.div`
width:600px;
 height:300px;
 background-color:pink;
 margin:0 auto;
 border:1px orange solid;
`
// &:hover{
//   color:orange
// }滑入改变样式