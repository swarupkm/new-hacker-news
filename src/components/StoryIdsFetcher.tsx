import { useEffect, useState } from 'react';

type StoryIdsFetcherProps = {
  fetchStoryIds: () => Promise<number[]>;
  onStoriesLoaded: (ids: number[]) => void;
};

function StoryIdsFetcher({ fetchStoryIds, onStoriesLoaded }: StoryIdsFetcherProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllStoryIds() {
      try {
        const storyIds = await fetchStoryIds();
        onStoriesLoaded(storyIds);
      } catch (error) {
        console.error('Failed to fetch story IDs:', error);
      } finally {
        setLoading(false);
      }
    }
    loadAllStoryIds();
  }, [fetchStoryIds, onStoriesLoaded]);

  if (loading) {
    return <div>Loading story IDs...</div>;
  }

  return null;
}

export default StoryIdsFetcher;