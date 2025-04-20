import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchItem } from '../services/api';
import { Story } from '../Story';
import { Comments } from '../Comments';

function Item() {
  const [story, setStory] = useState({});
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    async function loadItem() {
      const story = await fetchItem(id);
      setStory(story);
    }
    loadItem()
  }, [id])

  return (<>
    <Story story={story} />
    <Comments kids={story.kids} />
  </>)
}

export default Item;