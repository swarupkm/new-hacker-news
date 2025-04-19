import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import New from './pages/New';
import Best from './pages/Best';
import Ask from './pages/Ask';
import Show from './pages/Show';
import Jobs from './pages/Jobs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-4">
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/newest" element={ <New/>} />
            <Route path="/best" element={ <Best/>} />
            <Route path="/ask" element={ <Ask/>} />
            <Route path="/show" element={ <Show/>} />
            <Route path="/jobs" element={ <Jobs/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
