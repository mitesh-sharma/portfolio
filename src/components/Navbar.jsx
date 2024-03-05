const Navbar = () => {
  const name="<Mitesh-Sharma/>"

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-indigo-700'><a href='/'>{name}</a></h1>
      <ul className='hidden md:flex'>
        <li className='px-4 hover:text-indigo-700'><a href='/#about'>About</a></li>
        <li className='px-4 hover:text-indigo-700'><a href='/#Projects'>Projects</a></li>
        <li className='px-4 hover:text-indigo-700'><a href='/#Contact'>Contact</a></li>
        <li className='px-4 hover:text-indigo-700'><a href='https://drive.google.com/file/d/1TOaJ9GoF0YkT4JKfVMC34A_y6nmdawW9/view?usp=sharing'>Resume</a></li>
      </ul>
    </div>
  );
};

export default Navbar;