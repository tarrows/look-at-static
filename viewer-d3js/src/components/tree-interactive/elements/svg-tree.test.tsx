import * as React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

import SvgTree, { SvgTreeProps } from './svg-tree'
import TreeNode from './tree-node'
import TreeEdge from './tree-edge'

it('should render Nodes and Edges', () => {
  const tree: SvgTreeProps = {
    nodes: {0: {x: 100, y: 200}, 1: {x: 300, y: 50}},
    edges: {0: 1}
  }

  const wrapper = shallow(<SvgTree {...tree} />)
  expect(wrapper.find(TreeNode)).toBeDefined()
  expect(wrapper.find(TreeEdge)).toBeDefined()
})
