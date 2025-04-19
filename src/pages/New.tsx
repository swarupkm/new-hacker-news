import { useState } from 'react';
import StoryIdsFetcher from '../components/StoryIdsFetcher';
import PaginatedStories from '../components/PaginatedStories';
import { fetchNewStories } from '../services/api';

function New() {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  return (
    <>
      <StoryIdsFetcher 
        fetchStoryIds={fetchNewStories} 
        onStoriesLoaded={setStoryIds} 
      />
      {storyIds.length > 0 && <PaginatedStories storyIds={storyIds} />}
    </>
  );
}

export default New;