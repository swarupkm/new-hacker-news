import { useEffect, useState } from 'react';
import { fetchStories } from '../services/api';
import { Story } from '../Story';

const PAGE_SIZE = 30;

type PaginatedStoriesProps = {
  storyIds: number[];
};

function PaginatedStories({ storyIds }: PaginatedStoriesProps) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function loadStories() {
      try {
        const start = (pageNumber - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        const pageStoryIds = storyIds.slice(start, end);
        const fetchedStories = await fetchStories(pageStoryIds);
        setStories(fetchedStories);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    }
    loadStories();
    return () => {
      setLoading(true);
    };
  }, [storyIds, pageNumber]);

  if (loading) {
    return <div>Loading stories...</div>;
  }

  return (
    <>
      <div>
        {stories.map((story, index) => (
          <>
            <Story 
              key={story.id} 
              story={story} 
              idx={(pageNumber-1)*PAGE_SIZE + index + 1} 
            />
            <div className='h-[5px]'/>
          </>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 gap-2.5">
        <button 
          className="px-5 py-2.5 cursor-pointer rounded border border-gray-300 bg-gray-50 hover:bg-gray-100"
          onClick={() => setPageNumber(p => Math.max(1, p - 1))}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <span className="font-bold">Current: {pageNumber}</span>
        <button 
          className="px-5 py-2.5 cursor-pointer rounded border border-gray-300 bg-gray-50 hover:bg-gray-100"
          onClick={() => setPageNumber(p => p + 1)}
          disabled={stories.length < PAGE_SIZE}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PaginatedStories;