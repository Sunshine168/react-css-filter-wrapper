import test from 'ava'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CssFilterWrapper from '../build/main'
//
Enzyme.configure({ adapter: new Adapter() })

// example

test('basic test', (t) => {
  const wrapper = shallow(<CssFilterWrapper>
    <img
      src='http://orscxqn8h.bkt.clouddn.com/18-3-3/943334.jpg'
      alt='test'
      width={500}
      height={500}
    />
   </CssFilterWrapper>)
  t.is(wrapper.find('img').length, 1)
})
