import Team from "./Team";
import nishant from "./assets/image/nishant.jpg";
import basu from "./assets/image/basu.jpg";
import anil from "./assets/image/anil.jpg";
import prakhyat from "./assets/image/prakhyat.jpg";
import sagar from "./assets/image/sagar.jpg";
import manish from "./assets/image/manish.jpg";

const teamData = [
  {
    name: "Nishant Phuyal",
    role: "CEO/ Co-founder",
    image: nishant,
    github: "#",
    linkedin: "#",
    borderColor: "#47F4FF",
  },
  {
    name: "Basu Nepal",
    role: "Marketing Head",
    image: basu,
    github: "#",
    linkedin: "#",
    borderColor: "#47FF86",
  },
  {
    name: "Sagar Khadga",
    role: "Fullstack Developer",
    image: sagar,
    github: "#",
    linkedin: "#",
    borderColor: "#1F86E4",
  },
  {
    name: "Anil Shrestha",
    role: "Frontend Developer",
    image: anil,
    github: "#",
    linkedin: "#",
    borderColor: "#DAFF47",
  },
  {
    name: "Manish Basnet",
    role: "Graphic Designer",
    image: manish,
    github: "#",
    linkedin: "#",
    borderColor: "#FF4789",
  },
  {
    name: "Prakhyat Pokhrel",
    role: "Mobile Developer",
    image: prakhyat,
    github: "#",
    linkedin: "#",
    borderColor: "#9747FF",
  },
];

function OurTeam() {
  return (
    <>
      <p className="team-text">Meet Our Team</p>
      <p className="team-subtext">
        Our dynamic team of IT experts drives innovation and excellence,
        delivering cutting-edge solutions to meet evolving
        technological challenges.
      </p>
      <div className="team-container">
        {teamData.map((member, index) => (
          <Team
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            github={member.github}
            linkedin={member.linkedin}
            borderColor={member.borderColor}
          />
        ))}
      </div>
    </>
  );
}

export default OurTeam;
