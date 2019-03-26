import ApiService from '../api'

// HackerNews API Reference:
// https://github.com/HackerNews/API

const JSON_QUERY = '.json?print=pretty';
const PAGE_LIMIT = 20;
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService({ baseURL: BASE_URL });

interface Page<T> {
  begin: number
  end: number
  items: T[]
}

export interface Stories {
  readonly ids: number[]
}

export interface Story {
  readonly id: number
  readonly title: string
  readonly by: string
  readonly url: string
}

const getPageSlice = (limit = PAGE_LIMIT, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }: Page<Story>) => items.slice(begin, end);

const hackernewsApi = {
  getStoriesByPage: (ids: number[], page: number) => {
    console.log("GetStoryByPage called")
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({ begin, end, items: ids.map(i => ({id: i} as Story)) });
    const storyPromises = activeIds.map(story => hackernewsApi.getStory(story.id));
    return Promise.all(storyPromises);
  },
  getStory: (id: number): Promise<Story> => client.get(`/item/${id}${JSON_QUERY}`),
  getTopStoryIds: (): Promise<Stories> => client.get(`/topstories${JSON_QUERY}`),
};

export default hackernewsApi;
