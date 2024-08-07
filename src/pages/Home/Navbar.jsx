import React, { useState } from "react"
import Logo from "../../assets/images/Logo.png"
import { Container } from "../../components/Container"
import "./Home.css"
const Navbar = ({ handleClick, navigateToModule, selectedItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const MenuItems = ["Home", "Projects", "Team", "Partners"]
  return (
    <header className="fixed w-full ">
      <Container
        className="flex flex-row justify-between items-center "
        parentClassName="border-b-2 border-black bg-white"
      >
        <img
          src={Logo}
          alt="ek-sath"
          style={{ width: 70, height: 70, margin: "21px 0 21px 0" }}
        />

        <div className="hidden sm:flex ">
          {MenuItems?.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center p-12 sm:px-6 menu-typography border-b-[10px] border-white ${
                selectedItem === index ? "selected" : ""
              } hover:cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="hidden sm:flex items-center justify-center">
          <button
            className="donate-button"
            onClick={() => navigateToModule({ name: "donate" })}
          >
            Donate
          </button>
        </div>

        <div class="sm:hidden">
          <button
            class="navbar-burger flex items-center text-[#3C3C3B] p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <nav className="sm:hidden bg-white">
          <ul className=" justify-center items-center flex flex-col">
            {MenuItems.map((item, index) => (
              <li
                className="py-[24px]"
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
            <div className="pb-[24px] sm:flex items-center justify-center">
              <button
                className="donate-button"
                onClick={() => navigateToModule({ name: "donate" })}
              >
                Donate
              </button>
            </div>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
