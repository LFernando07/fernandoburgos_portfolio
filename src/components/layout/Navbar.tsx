import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [useToggle, setUseToggle] = useState(false);

  const navRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
      if (scrollTop <= 100) setActive("");
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  // 🔹 Detectar si los <li> caben o no - basado en el ancho de la ventana
  useEffect(() => {
    const checkOverflow = () => {
      const windowWidth = window.innerWidth;

      // En pantallas medianas (768px) o más grandes, mostrar navbar normal
      // En pantallas pequeñas, usar hamburguesa
      const shouldUseToggle = windowWidth < 768;

      setUseToggle(shouldUseToggle);

      // Cerrar el menú cuando vuelve a modo desktop
      if (!shouldUseToggle && toggle) {
        setToggle(false);
      }
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 transition-colors duration-300 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div
        ref={containerRef}
        className="mx-auto flex w-full max-w-7xl items-center justify-between"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            FerDev . _
          </p>
        </Link>

        {/* 🔹 Navbar normal (pantallas md y superiores) */}
        <ul
          ref={navRef}
          className={`${useToggle ? 'hidden' : 'flex'} list-none flex-row gap-10`}
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? "text-white" : "text-gray-300"
                } cursor-pointer text-[18px] font-medium transition-colors duration-200 hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* 🔹 Toggle menu (pantallas pequeñas) */}
        {useToggle && (
          <div className="flex flex-1 items-center justify-end">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] cursor-pointer object-contain transition-transform duration-200 hover:scale-110"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"
                } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl`}
            >
              <ul className="flex flex-1 list-none flex-col items-center justify-center gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins cursor-pointer text-[16px] font-medium transition-colors duration-200 ${active === nav.id ? "text-white" : "text-gray-300"
                      } hover:text-white`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;