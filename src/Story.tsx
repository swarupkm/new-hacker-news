type StoryProps = {
  title: string;
  score: number;
  by: string;
  time: number;
  kids: number[];
  descendants: number;
  url: string;
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

  return (<>
    <div>
      <div>{idx}</div>
      <div>{story.title}</div>
      <div>{hostName(story.url)}</div>
    </div>
    <div>
      {story.score} points by {story.by} {timeElapsed(story.time)} ago | {story.descendants} comments
    </div>
  </>);
}