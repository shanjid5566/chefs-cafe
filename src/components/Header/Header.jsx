import logo from "../../assets/images/logo.png";
import profileIcon from "../../assets/images/profileIcon5.png"
const Header = () => {
  return (
    <div className="container mx-auto py-12">
      <section className="flex justify-between items-center">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex gap-12 font-lexend font-semibold text-lg">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Recipes</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between gap-4">
            <input type="text" name="" id="" className="w-60 py-2 text-center bg-[#150b2b0d] font-bold rounded-2xl" placeholder='Search'/>
            <img src={profileIcon} alt="" srcset="" />
        </div>
      </section>
    </div>
  );
};

export default Header;
