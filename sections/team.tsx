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
    name: "Sunuh Maurice Elikem",
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
      className="flex flex-col gap-8 md:gap-12 bg-white py-8 md:py-16 px-5 md:px-10 lg:px-16"
    >
      <div className="flex flex-col items-start md:items-center gap-3 max-w-4xl mx-auto w-full">
        <p className="font-normal text-[14px] lg:text-[16px] text-left md:text-center text-[#18AB1D]">
          ● Our Team
        </p>
        <h2 className="font-semibold text-[32px] md:text-[48px] leading-tight text-left md:text-center text-black">
          Meet the team behind Agritel
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto w-full">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col text-left h-fit gap-1.5 md:gap-2.5"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full max-h-[220px] object-cover rounded-[20px]"
            />
            <h3 className="font-semibold text-[11px] md:text-[15px] text-black text-left">
              {member.name}
            </h3>
            <p className="font-normal text-left text-[10px] md:text-[13px] text-[#8F8787]">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
