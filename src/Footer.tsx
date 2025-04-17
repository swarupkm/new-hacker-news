function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <div className="mb-3">
          Join us for <a href='https://events.ycombinator.com/ai-sus' className="text-orange-500 hover:underline">AI Startup School</a> this June 16-17 in San Francisco!
        </div>
        <div className="text-sm text-gray-600">
          <span className="space-x-2">
            <a href="https://news.ycombinator.com/newsguidelines.html" className="hover:underline">Guidelines</a> |
            <a href="https://news.ycombinator.com/newsfaq.html" className="hover:underline">FAQ</a> |
            <a href="https://news.ycombinator.com/lists" className="hover:underline">Lists</a> |
            <a href="https://github.com/HackerNews/API" className="hover:underline">API</a> |
            <a href="https://news.ycombinator.com/security.html" className="hover:underline">Security</a> |
            <a href="https://www.ycombinator.com/legal/" className="hover:underline">Legal</a> |
            <a href="https://www.ycombinator.com/apply/" className="hover:underline">Apply to YC</a> |
            <a href="mailto:hn@ycombinator.com" className="hover:underline">Contact</a>
          </span>
        </div>
        <div>
          <form method="get" action="//hn.algolia.com/">
            Search: <input type="text" name="q" autoCorrect="off" spellCheck="false"
              autoCapitalize="off" autoComplete="off" className='border'/></form>
        </div>
      </div>
    </footer>
  )
}

export default Footer;