import * as React from 'react'

import * as d3 from 'd3'

import data, { TreeNode } from './sample-data'

import './tree-diagram.css'

interface TreeDiagramProps {
  svgWidth: number
  svgHeight: number
}

interface TreeDiagramState {}

class TreeDiagram extends React.Component<TreeDiagramProps, TreeDiagramState> {
  private svgRef = React.createRef<SVGSVGElement>()// React.RefObject<SVGSVGElement>

  constructor(props: TreeDiagramProps) {
    super(props)
  }

  componentDidMount() {
    const 
      height = this.props.svgHeight,
      width = this.props.svgWidth - 160

    let svg = d3.select(this.svgRef.current)

    const rootData = d3.hierarchy(data) // not inferred via d3.hierarchy<TreeNode>(data) 
    
    const tree = d3.tree<TreeNode>().size([height, width])

    const root = tree(rootData) // assign x, y coordinates to each node

    const g = svg.append('g').attr('transform', 'translate(80,0)')

    const link = g.selectAll('.link').data(root.descendants().slice(1)).enter()
      .append('path').attr('class', 'link')
      .attr('d', (d) => {
        const x = d.x, y = d.y,
        px = d.parent ? d.parent.x : 0,
        py = d.parent ? d.parent.y : 0

        return `M${y},${x}C${py + 100},${x} ${py + 100},${px} ${py},${px}`
      })

    const node = g.selectAll('.node').data(root.descendants()).enter()
      .append('g').attr('class', 'node')
      .attr('transform', (d) => `translate(${d.y},${d.x})`)

    node.append('circle').attr('r', 8).attr('fill', '#999')
    node.append('text').attr('dy', 3).attr('x', (d) => d.children ? -12 : 12)
      .style('text-anchor', (d) => d.children ? 'end' : 'start')
      .attr('font-size', '200%')
      .text(d => d.data.name) // 'd.data.name' need to be inferred by setting as d3.tree<TreeNode>()
  }

  updateMousePos = () => {}

  updateTouchPos = () => {}

  render() {
    return (
      <div onMouseDown={_ => (console.log("on mouse down"))} style={{overflow: 'hidden'}}>
        <div style={{position: 'absolute'}} className="container">
          <h1>Tree</h1>
        </div>
        <svg width={this.props.svgWidth} height={this.props.svgHeight} ref={this.svgRef} style={{background: 'rgba(124, 224, 249, .3)'}}>
        </svg>
        <div style={{position: 'absolute', bottom: 0}} className="container">
          <strong>{2} particles</strong>
        </div>
      </div>
    )
  }
}

export default TreeDiagram
