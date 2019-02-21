export interface SampleCsvDef {
  allSampleCsv: {
    edges: [{
      node: {
        id: number
        name: string
        country: string
        city: string
        price: number
        date: string
      }
    }]
  }
}

export interface SampleCsvRecord {
  id: number
  name: string
  country: string
  city: string
  price: number
  date: string
}

export const gqlToRecord = (gql: SampleCsvDef): SampleCsvRecord[] => {
  return gql.allSampleCsv.edges.map(n => {
    const { id, name, country, city, price, date } = n.node
    return { id, name, country, city, price, date }
  })
}

/*
export const sampleCsvQuery: TemplateStringsArray = `
query SampleQuery {
  allSampleCsv {
    edges {
      node {
        id
        name
        country
        city
        price
        date
      }
    }
  }
}
`
*/
