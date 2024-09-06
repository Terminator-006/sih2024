
import { useEffect, useState } from 'react';
import { Brain, HeartPulseIcon, DumbbellIcon } from 'lucide-react';
import endoImage from '../Assets/endrophin.jpg';

const EndorphinEndorsers = () => {
  const [endoImagee, setEndoImage] = useState(''); // State to hold the image URL
  const accessKey = 'bNkvpdzjnjuTE0sj6eMWszBiT63XUu31tnTpQA0VSJI';
  const query = 'motivation quotes';
  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

  // Fetch new image when component loads
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const randomImage = data.results[Math.floor(Math.random() * data.results.length)];
        setEndoImage(randomImage.urls.regular); // Set new image URL
      })
      .catch((error) => {
        console.error('Error fetching motivational photos:', error);
      });
  }, []); 

  return (
    <div className="w-screen h-screen p-6 bg-gradient-to-r from-black via-gray-900 to-black">
      <header className="flex justify-between items-center mb-12 border-b border-red-500">
        <div className="h-16 w-16 font-bold text-red-500">
          <img src={endoImage} alt="Endorphin Logo" className="w-full h-full object-cover" /> {/* Image used */}
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-white hover:text-red-500 hover:shadow-lg transition duration-300">HOME</a></li>
            <li><a href="#about" className="text-white hover:text-red-500 hover:shadow-lg transition duration-300">ABOUT</a></li>
            <li><a href="#features" className="text-white hover:text-red-500 hover:shadow-lg transition duration-300">FEATURES</a></li>
            <li><a href="#pricing" className="text-white hover:text-red-500 hover:shadow-lg transition duration-300">PRICING</a></li>
            <li><a href="#contact" className="text-white hover:text-red-500 hover:shadow-lg transition duration-300">CONTACT</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href='/signup' className="px-4 py-2 border border-red-500 text-white uppercase font-bold rounded transition duration-300 hover:bg-red-500 hover:shadow-lg">Sign up</a>
          <a href='/login' className="px-4 py-2 text-white uppercase font-bold rounded transition duration-300 hover:bg-red-500 hover:shadow-lg">Sign in</a>
        </div>
      </header>
      <main className="flex justify-between items-center h-screen">
        <div className="w-1/2 h-full">
          <h1 className="text-4xl font-bold mb-5 leading-tight font-victor">
            <span className="block text-white">ENDORPHIN</span>
            <span className="block text-red-500">ENFORCERS</span>
          </h1>
          <p className="text-white mb-8 text-lg leading-relaxed">
            Experience the future of fitness with our AI-driven platform.
            Personalized workouts, real-time analysis, and predictive health insights 
            to optimize your performance and achieve your goals faster.
          </p>
          <button className="px-6 py-3 bg-red-500 text-white rounded font-bold uppercase transition duration-300 hover:bg-red-700 hover:shadow-xl">Explore AI Features</button>
        </div>
        <div className="w-1/2 flex justify-center relative h-full">
          <img src={endoImagee} alt="AI Fitness Illustration" className="w-3/5 h-96 rounded-lg shadow-2xl" />
          <Brain className="w-10 h-10 absolute text-red-500 top-4 left-4" />
          <HeartPulseIcon className="w-10 h-10 absolute text-red-500 top-1/2 right-4" />
          <DumbbellIcon className="w-10 h-10 absolute text-red-500 bottom-4 left-4" />
        </div>
      </main>
    </div>
  );
};

export default EndorphinEndorsers;
