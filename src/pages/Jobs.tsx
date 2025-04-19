import { useState } from 'react';
import StoryIdsFetcher from '../components/StoryIdsFetcher';
import PaginatedStories from '../components/PaginatedStories';
import { fetchJobsStories } from '../services/api';

function Jobs() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  return (
    <>
      <div>
        These are jobs at YC startups. See more at <a href='https://www.ycombinator.com/jobs'>ycombinator.com/jobs.</a>
      </div>
      <StoryIdsFetcher 
        fetchStoryIds={fetchJobsStories} 
        onStoriesLoaded={setStoryIds} 
      />
      {storyIds.length > 0 && <PaginatedStories storyIds={storyIds} />}
    </>
  );
}

export default Jobs;