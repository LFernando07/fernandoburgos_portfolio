import React from "react";
import { SectionWrapper } from "../../hooks";
import { TAditional } from "../../types";
import { additional } from "../../constants";

const AdditionalInfo: React.FC<TAditional> = () => {
  return (
    <>
      <h2 className="sm:text-[36px] text-[24px] text-center mb-8 text-secondary tracking-widers">{additional.name}</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Idiomas */}
        <div className="flex flex-col rounded-2xl bg-[#1d1836] p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
          <h3 className="text-xl font-bold text-white">🌍 Idiomas</h3>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
            {additional.languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>

        {/* Certificaciones */}
        <div className="flex flex-col rounded-2xl bg-[#1d1836] p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
          <h3 className="text-xl font-bold text-white">📜 Certificaciones</h3>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
            {additional.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col rounded-2xl bg-[#1d1836] p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
          <h3 className="text-xl font-bold text-white">🤝 Habilidades Blandas</h3>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-300 space-y-2">
            {additional.softSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Disponibilidad */}
        <div className="flex flex-col rounded-2xl bg-[#1d1836] p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
          <h3 className="text-xl font-bold text-white">🕒 Disponibilidad</h3>
          <p className="mt-4 text-sm text-gray-300">{additional.availability}</p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(AdditionalInfo, "additional");
