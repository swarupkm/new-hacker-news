import { useState } from 'react';
import StoryIdsFetcher from '../components/StoryIdsFetcher';
import PaginatedStories from '../components/PaginatedStories';
import { fetchBestStories } from '../services/api';

function Best() {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  return (
    <>
      <StoryIdsFetcher 
        fetchStoryIds={fetchBestStories} 
        onStoriesLoaded={setStoryIds} 
      />
      {storyIds.length > 0 && <PaginatedStories storyIds={storyIds} />}
    </>
  );
}

export default Best;