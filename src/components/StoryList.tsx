import { useEffect, useState } from 'react';
import { fetchStories } from '../services/api';
import { Story } from '../Story';

const PAGE_SIZE = 30;

type StoryListProps = {
  fetchStoryIds: () => Promise<number[]>;
};

function StoryList({ fetchStoryIds }: StoryListProps) {
  const [allStoryIds, setAllStoryIds] = useState<number[]>([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function loadAllStoryIds() {
      const storyIds = await fetchStoryIds();
      setAllStoryIds(storyIds); 
    }
    loadAllStoryIds();
  }, [fetchStoryIds]);

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
      setLoading(true);
    }
  }, [allStoryIds, pageNumber]);

  function goToPrevious() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  function goToNext() {
    if (stories.length < PAGE_SIZE) return;
    setPageNumber(pageNumber + 1);
  }

  return (
    <>
      <div>  
        {loading ? <div>Loading...</div> :
          stories.map((story, index) => (
            <Story 
              key={story.id} 
              story={story} 
              idx={(pageNumber-1)*PAGE_SIZE + index + 1} 
            />
          ))}
      </div>
      <div className="flex justify-center items-center mt-5 gap-2.5">
        <button 
          className="px-5 py-2.5 cursor-pointer rounded border border-gray-300 bg-gray-50 hover:bg-gray-100"
          onClick={goToPrevious}
        >
          Prev
        </button>
        <span className="font-bold">Current: {pageNumber}</span>
        <button 
          className="px-5 py-2.5 cursor-pointer rounded border border-gray-300 bg-gray-50 hover:bg-gray-100"
          onClick={goToNext}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default StoryList;