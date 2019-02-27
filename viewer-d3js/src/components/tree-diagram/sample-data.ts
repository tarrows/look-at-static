export interface TreeNode {
  name: string
  children?: TreeNode[]
}

const data: TreeNode = {
  'name': 'A',
  'children': [
    { 
      'name': 'B' 
    },
    {
      'name': 'C',
      'children': [{ 'name': 'D' }, { 'name': 'E' }, { 'name': 'F' }]
    },
    {
      'name': 'G'
    },
    {
      'name': 'H',
      'children': [{ 'name': 'I' }, { 'name': 'J' }]
    },
    {
      'name': 'K'
    }
  ]
}

export default data
