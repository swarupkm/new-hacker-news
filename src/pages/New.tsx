import StoryList from '../components/StoryList';
import { fetchNewStories } from '../services/api';

function New() {
  return <StoryList fetchStoryIds={fetchNewStories} />;
}

export default New;