import StoryList from '../components/StoryList';
import { fetchTopStories } from '../services/api';

function Home() {
  return <StoryList fetchStoryIds={fetchTopStories} />;
}

export default Home;