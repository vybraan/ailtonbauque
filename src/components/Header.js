const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-5 flex justify-between w-full">
	  <div className="">
	  	<span className="font-bold text-blue-200">Ailton Bauque</span>
	  </div>
	  <ul className="hidden">
	  	<li>Home</li>
	  	<li>Projects</li>
	  	<li>Resume</li>
	  	<li>Contact</li>
	  </ul>
	  <button className="bg-blue-200 px-4 px-3 rounded"></button>
    </header>
  );
};


export default Header
