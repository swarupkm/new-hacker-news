import { useEffect, useState } from 'react';
import { fetchTopStories, fetchStories } from './services/api';
import { Story } from './Story';

function Home() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const storyIds = await fetchTopStories(30);
        const fetchedStories = await fetchStories(storyIds);
        setStories(fetchedStories);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [])
  return (<>
    {loading ? <div> Loading ... </div> :
      stories.map((story, index) => (<Story key={index} story={story} idx={index + 1} />))}
  </>)
}
export default Home;