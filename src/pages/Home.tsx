import { useState } from 'react';
import StoryIdsFetcher from '../components/StoryIdsFetcher';
import PaginatedStories from '../components/PaginatedStories';
import { fetchTopStories } from '../services/api';

function Home() {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  return (
    <>
      <StoryIdsFetcher 
        fetchStoryIds={fetchTopStories} 
        onStoriesLoaded={setStoryIds} 
      />
      {storyIds.length > 0 && <PaginatedStories storyIds={storyIds} />}
    </>
  );
}

export default Home;