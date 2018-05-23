import React, { Component } from 'react';
import styled from 'styled-components'

class PostBody extends Component {
  render() {
    return (
      <Warpper>
        PostBody
      </Warpper>
    );
  }
}

export default PostBody;

const Warpper = styled.div`
width:600px;
 height:300px;
 background-color:orange;
 margin:0 auto;
 text-align:center;
 line-height:300px;
 border:1px pink solid;
 margin-bottom:40px;
`