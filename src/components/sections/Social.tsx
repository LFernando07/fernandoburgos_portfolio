import { socials } from "../../constants";
import { config } from "../../constants/config";

const Social = () => {

  return (
    <div className="flex flex-wrap flex-row-reverse justify-center p-16 gap-16 rounded-lg">
      <div className="text-center text-md text-gray-500 pl-16 mt-4">
        <p>&copy; {config.html.fullName} Todos los derechos reservados.</p>
      </div>

      <div className="flex flex-wrap bg-primary justify-center items-center gap-20">
        {socials.map((social, idx) => {
          return (
            <div
              key={idx}
              className="relative group flex flex-col items-center"
            >
              <a
                href={social.ref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </a>

              {/* Tooltip */}
              <p style={{ background: `${social.bgText}` }} className={`absolute top-[-4rem] px-6 py-3 rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                {social.name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Social
