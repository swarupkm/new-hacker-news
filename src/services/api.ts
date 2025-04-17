const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchTopStories = async (limit = 30) => {
  try {
    const response = await fetch(`${BASE_URL}/topstories.json`);
    const storyIds = await response.json();
    return storyIds.slice(0, limit);
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};

export const fetchItem = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/item/${id}.json`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching item ${id}:`, error);
    throw error;
  }
};

export const fetchStories = async (storyIds) => {
  try {
    const stories = await Promise.all(
      storyIds.map(id => fetchItem(id))
    );
    return stories;
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error;
  }
};
