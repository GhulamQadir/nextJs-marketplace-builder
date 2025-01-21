function Footer() {
  return (
    <div className="bg-[#EEEFFB] py-8 flex flex-wrap justify-center gap-x-16 gap-y-8 font-josefin">
      <div>
        <p className="lg:text-[34px] text-[25px] font-bold text-[#0D0E43]">
          Hekto
        </p>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-60 border-[#E7E6EF] border-2 h-8 m-0 pl-1 text-sm"
          />
          <button className="bg-[#FB2E86] h-[30px] px-2 text-white">
            Sign Up{" "}
          </button>
        </div>
        <div className="text-gray-400 text-sm mt-4">
          <p>Contact Info:</p>
          <p>!7 Princess Road, Greater London, XY.</p>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold">Categories</p>
        <ul className="text-gray-400 mt-4">
          <li className="mb-2">
            <p>Laptops & Computers</p>
          </li>
          <li className="mb-2">
            <p>Cameras & Photography</p>
          </li>
          <li className="mb-2">
            <p>Smart Phones & Tablets</p>
          </li>
          <li className="mb-2">
            <p>Video Games & Consoles</p>
          </li>
          <li className="mb-2">
            <p>Waterproof Headphones</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-semibold">Customer Care</p>
        <ul className="text-gray-400 mt-4">
          <li className="mb-2">
            <p>My Account</p>
          </li>
          <li className="mb-2">
            <p>Discount</p>
          </li>
          <li className="mb-2">
            <p>Returns</p>
          </li>
          <li className="mb-2">
            <p>Orders History</p>
          </li>
          <li className="mb-2">
            <p>Order Tracking</p>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-semibold">Pages</p>
        <ul className="text-gray-400 mt-4">
          <li className="mb-2">
            <p>Blog</p>
          </li>
          <li className="mb-2">
            <p>Browse the Shop</p>
          </li>
          <li className="mb-2">
            <p>Category</p>
          </li>
          <li className="mb-2">
            <p>Pre-Built Pages</p>
          </li>
          <li className="mb-2">
            <p>Visual Composer Elements</p>
          </li>
          <li className="mb-2">
            <p>Visual Composer Elements</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
