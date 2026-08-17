import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Edoukou Emmanuel",
    role: "Founder",
    imageUrl: "/assets/Agritel-Landing/emmanuel.png",
  },
  {
    id: 2,
    name: "JSunuh Maurice Elikem",
    role: "CEO",
    imageUrl: "/assets/Agritel-Landing/maurice.png",
  },
  {
    id: 3,
    name: "Calvin Seyram Serwornu",
    role: "Hardware Engineer",
    imageUrl: "/assets/Agritel-Landing/calvin.png",
  },
  {
    id: 4,
    name: "Angel Elinam Wozborn",
    role: "Full Stack Developer",
    imageUrl: "/assets/Agritel-Landing/elinam.png",
  },
  {
    id: 5,
    name: "Nana Acquah Insaidoo",
    role: "Product Design Engineer(Hardware)",
    imageUrl: "/assets/Agritel-Landing/nana.png",
  },
  {
    id: 6,
    name: "Nartey Aaron Narwortey",
    role: "Full Stack Developer",
    imageUrl: "/assets/Agritel-Landing/aaron.png",
  },
  {
    id: 7,
    name: "Samuel Kwadwo Afrifa",
    role: "Agribusiness & Farmer Coordinator",
    imageUrl: "/assets/Agritel-Landing/samuel.png",
  },
];
const Team = () => {
  return (
    <div
      id="team"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white py-5 px-5 "
    >
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="flex flex-col w-fit h-fit gap-2.5 items-center justify-center"
        >
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-cover rounded-[20px]"
          />
          <h3 className="font-semibold text-[11px] text-black text-left">
            {member.name}
          </h3>
          <p className="font-normal text-[10px] text-[#8F8787]">
            {member.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Team;
