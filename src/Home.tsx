import { useEffect, useState } from 'react';
import { fetchTopStories, fetchStories } from './services/api';
import { Story } from './Story';

const PAGE_SIZE = 30

function Home() {
  const [allStoryIds, setAllStoryIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function loadAllSotyIds() {
      const storyIds = await fetchTopStories();
      setAllStoryIds(storyIds); 
    }
    loadAllSotyIds()
  }, [])

  useEffect(() => {
    async function load() {
      try {
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const storyIds = allStoryIds.slice(start, end);
        const fetchedStories = await fetchStories(storyIds);
        setStories(fetchedStories);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => {
      setLoading(true)
    }
  }, [allStoryIds, pageNumber])

  function goToPrevious() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  function goToNext() {
    if (stories.length < PAGE_SIZE) return
    setPageNumber(pageNumber + 1);
  }

  return (<>
    <div>  
    {loading ? <div> Loading ... </div> :
      stories.map((story, index) => (<Story key={index} story={story} idx={(pageNumber-1)*30 + index + 1} />))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '10px' }}>
      <button style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f0f0f0' }} onClick={goToPrevious}>
      Prev
      </button>
      <span style={{ fontWeight: 'bold' }}>Current: {pageNumber}</span>
      <button style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f0f0f0' }} onClick={goToNext}>
      Next
      </button>
    </div>
  </>)
}
export default Home;