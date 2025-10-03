// ProfileCard.tsx
import React, { useState } from "react";

interface ProfileCardProps {
  fullName: string;
  role: string;
  description: string;
  imageUrl?: string;
  skills?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  fullName,
  role,
  description,
  imageUrl = "https://www.nexventures.net/icon.png",
  skills = [
    "React", "TypeScript", "Tailwind", "Node.js", "Express",
    "MongoDB", "HTML", "CSS", "JavaScript", "Redux",
    "GraphQL", "Docker", "Git", "CI/CD", "Vite",
    "Next.js", "Framer Motion", "Jest", "Postman", "VSCode",
  ],
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Limit skills to ~3 rows (15 skills)
  const maxSkills = 15;
  const displayedSkills = skills.slice(0, maxSkills);

  return (
    <div
      className="w-full md:w-[300px] cursor-pointer perspective relative"
      onClick={() => setIsFlipped((prev) => !prev)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-[300px] duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-[300px] backface-hidden bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl">
          <div className="h-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
          <div className="p-3 flex flex-col items-center text-center space-y-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md relative">
              <img
                src={imageUrl}
                alt={fullName}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
              />
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-30 blur-xl animate-gradient-slow"></span>
            </div>

            <h2 className="text-xl font-bold text-gray-800">{fullName}</h2>
            <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-semibold rounded-full shadow-sm">
              {role}
            </span>
            <p className="text-gray-700 text-sm line-clamp-3">
              {description}
            </p>

            <button className="px-5 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:from-pink-500 hover:to-purple-500 text-sm">
              Contact Me
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-[300px] backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg overflow-hidden p-3 flex flex-col items-center">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800 mb-0.5">Skills</h3>

          {/* Skills */}
          <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
            {displayedSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-semibold rounded-full shadow-sm hover:scale-105 transform transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Tap Hint */}
      {!isFlipped && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 md:hidden">
          <span className="block w-3 h-3 border-b-2 border-r-2 border-gray-400 transform rotate-45 animate-bounce"></span>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
