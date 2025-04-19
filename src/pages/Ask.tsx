import { useState } from 'react';
import StoryIdsFetcher from '../components/StoryIdsFetcher';
import PaginatedStories from '../components/PaginatedStories';
import { fetchAskStories } from '../services/api';

function Ask() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  return (
    <>
      <StoryIdsFetcher 
        fetchStoryIds={fetchAskStories} 
        onStoriesLoaded={setStoryIds} 
      />
      {storyIds.length > 0 && <PaginatedStories storyIds={storyIds} />}
    </>
  );
}

export default Ask;