import Header from './components/Header';
import banner from './banner.svg';
import Footer from './components/Footer';

const Home = () =>{
	return(
		<>
		<Header/>
		<div className="bg-gray-800 text-white p-2 text-center">
			<div>
				<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ailton</span> Bauque.</h1>
				<p>a very beatiful text to supper what I am, my motivation a very beatiful text to supper what I am, my motivation a very beatiful text to supper what I am, my motivation</p>
				<button className="bg-purple-600 text-blue-100 rounded-md font-bold px-3 py-2 mt-3">Get in touch</button>
			</div>
		<img className='img-fluid mt-3' alt="Ailton's " src={banner}/>
		
		</div>
		<Footer />
		</>
	);
}

export default Home;
