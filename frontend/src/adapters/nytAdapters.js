import { handleFetch } from './handleFetch';
// import { API_KEY } from '../../secrets';

// const baseUrl = 'https://api.nytimes.com/svc';

export const getTopStories = async () => {
  // const url = `${baseUrl}/topstories/v2/arts.json?api-key=${API_KEY}`;
  const url = '/api/top-arts-stories'; // This is the route we set up on the server
  const [data, error] = await handleFetch(url);

  // some stories don't have a title, let's filter those out
  return [data, error]
}