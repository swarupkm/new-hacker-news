import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-4">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
