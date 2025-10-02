import React from "react";

interface ProfileCardProps {
  fullName: string;
  role: string;
  description: string;
  imageUrl?: string; // optional, defaults to placeholder
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  fullName,
  role,
  description,
  imageUrl = "https://www.nexventures.net/icon.png",
}) => {
  return (
    <div className="w-full max-w-[300px] mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src={imageUrl}
        alt={fullName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{fullName}</h2>
        <p className="text-gray-500">{role}</p>
        <p className="mt-2 text-gray-700 text-sm">{description}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
