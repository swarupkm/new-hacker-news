import { useState } from 'react';
import StoryIdsFetcher from '../components/StoryIdsFetcher';
import PaginatedStories from '../components/PaginatedStories';
import { fetchShowStories } from '../services/api';

function Show() {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  return (
    <>
      <div className="mb-4 text-sm text-gray-600">
        Please read the Show HN{' '}
        <a
          href="https://news.ycombinator.com/showhn.html"
          className="text-gray-600 hover:underline"
        >
          rules
        </a>{' '}
        and{' '}
        <a
          href="https://news.ycombinator.com/item?id=22336638"
          className="text-gray-600 hover:underline"
        >
          tips
        </a>{' '}
        before posting. You can browse the newest Show HNs{' '}
        <a
          href="https://news.ycombinator.com/shownew"
          className="text-gray-600 hover:underline"
        >
          here
        </a>.
      </div>
      <StoryIdsFetcher 
        fetchStoryIds={fetchShowStories} 
        onStoriesLoaded={setStoryIds} 
      />
      {storyIds.length > 0 && <PaginatedStories storyIds={storyIds} />}
    </>
  );
}

export default Show;