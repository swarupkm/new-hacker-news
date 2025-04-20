import { useEffect, useState } from 'react'
import { fetchComments } from './services/api'

function timeElapsed(unixTimestamp: number) {
  const now = Math.floor(Date.now() / 1000); // current time in seconds
  const elapsedSeconds = now - unixTimestamp;

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} seconds`;
  } else if (elapsedSeconds < 3600) {
    const minutes = Math.floor(elapsedSeconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else {
    const hours = Math.floor(elapsedSeconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }
}

function Comment({ comment }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="mb-4">
      <div className="text-[13.3px] text-[#828282]">
        {comment.by} {timeElapsed(comment.time)} ago
      </div>
      <div 
        className="text-[13.3px] mb-2"
        dangerouslySetInnerHTML={{ __html: comment.text }} 
      />
      {comment.kids && comment.kids.length > 0 && (
        <div className="ml-4">
          <button 
            onClick={() => setShowReplies(!showReplies)}
            className="text-[13.3px] text-[#828282] hover:underline"
          >
            {showReplies ? 'Hide replies' : `${comment.kids.length} replies`}
          </button>
          {showReplies && <Comments kids={comment.kids} />}
        </div>
      )}
    </div>
  );
}

export function Comments({ kids }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadComments() {
      if (!kids || kids.length === 0) {
        setComments([]);
        setLoading(false);
        return;
      }
      
      try {        
        const allComments = await fetchComments(kids);
        setComments(allComments)
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    }
    loadComments()
    return () => {
      setLoading(true);
    };
  }, [kids])
  
  if (loading) {
    return <div>Loading stories...</div>;
  }

  return (
    <div className="pl-4 border-l border-[#828282]">
      {comments.length > 0 && comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}