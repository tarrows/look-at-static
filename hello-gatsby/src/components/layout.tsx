import * as React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { StoryState, actionType } from '../services/hackernews/hackernews-actions'
import { StoryActions } from '../services/hackernews/hackernews-actions'

interface OrganismProps {
  button: RequestButtonProps
  list: ArticleListProps
}

const Organism: React.FC<OrganismProps> = ({ button, list }) => (
  <div>
    <RequestButton request={button.request}></RequestButton>
    <ArticleList articles={list.articles}></ArticleList>
  </div>
)

interface RequestButtonProps {
  request: (e: React.MouseEvent) => void
}

const RequestButton: React.FC<RequestButtonProps> = ({ request }) => (
  <div>
    <button onClick={request}>Read</button>
  </div>
)

interface Article {
  id: number
  title: string
  by: string
}

interface ArticleListProps {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = (x) => {
  const items = x.articles.map(article => <li key={article.id}>{article.title}</li>)
  return (
    <ul>
      {items}
    </ul>
  )
}

const request = (event: React.MouseEvent) => {
  console.log('request', event)
}

const mapStateToProps = (state: StoryState): ArticleListProps => {
  return {
    articles: state.stories.map(story => {
      return {
        id: story.id, title: story.title, by: story.by
      }
    })
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoryActions>) => {
  return { request: () => dispatch({ type: actionType.FETCH_STORY_IDS_REQUEST, payload: {} })}
}

const ConnectedOrganism = connect(mapStateToProps, mapDispatchToProps)(Organism)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>DEFAULT LAYOUT</h1>
        <ConnectedOrganism button={{ request }} list={{ articles: [] }} />
      </div>
    )
  }
}

export default DefaultLayout
