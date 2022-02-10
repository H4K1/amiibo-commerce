const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white px-6 py-4">

      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <img className="max-w-sm mr-3" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Mario_emblem_inverted.svg" alt="" />
        <span className="font-semibold text-2xl tracking-tight">Mario Store</span>
      </div>

      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <div className="items-center">
          <button
            href="#"
            className="text-xl inline-block text-sm p-3 leading-none border rounded font-bold text-red-500 border-red-500  hover:text-white hover:bg-red-500 mt-4 mt-0 rounded-full"
          >
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
