const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchTopStories = async (pageNumber: number, pageSize = 30) => {
  try {
    const response = await fetch(`${BASE_URL}/topstories.json`);
    const storyIds = await response.json();
    const start = (pageNumber - 1) * pageSize
    const end = start + pageSize
    return storyIds.slice(start, end);
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};

export const fetchItem = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/item/${id}.json`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching item ${id}:`, error);
    throw error;
  }
};

export const fetchStories = async (storyIds: string[]) => {
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
