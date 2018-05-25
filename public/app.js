import React, { Component } from 'react'
import { render } from 'react-dom'

// import your component and use in here
import Wrapper from '../src/component'

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper filter='1977'>
          <img
            src='http://orscxqn8h.bkt.clouddn.com/18-3-3/943334.jpg'
            alt='test'
            width={500}
            height={500}
          />
        </Wrapper>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
