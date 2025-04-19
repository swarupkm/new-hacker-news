type StoryProps = {
  title: string;
  score: number;
  by: string;
  time: number;
  kids: number[];
  descendants: number;
  url: string;
  type: string;
}

function hostName(url: string) {
  return new URL(url).hostname;
}

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

export function Story({ story, idx }: { story: StoryProps, idx: number }) {
  return (
    <div className="py-1">
      <div className="flex items-baseline">
        <span className="text-[#828282] text-[13.3px] pr-1">{idx}.</span>
        <div className="flex flex-col space-y-0.5">
          <div className="flex items-center">
            <a href={story.url} className="text-[13.3px] visited:text-[#828282] hover:underline mr-1">
              {story.title}
            </a>
            {story.url && (
              <span className="text-[13.3px] text-[#828282]">
                ({hostName(story.url)})
              </span>
            )}
          </div>
          {
            story.type === 'job' ?
            <div className="text-[10.6px] text-[#828282]">
              {timeElapsed(story.time)} ago
            </div> :
            <div className="text-[10.6px] text-[#828282]">
              {story.score} points by {story.by} {timeElapsed(story.time)} ago | 
              {story.descendants === 0 ? ' discuss' : 
                ` ${story.descendants} comment${story.descendants !== 1 ? 's' : ''}`}
            </div>
          }
        </div>
      </div>
    </div>
  );
}