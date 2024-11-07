import './CSS/Team.css';

const GitLogo = "https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg";
const LinkedinLogo = "https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png";

function Team({ name, role, image, github, linkedin, borderColor }) {
  return (
    <div className="team-card">
      <div className="image-style">
      <div className="circle" style={{ backgroundColor: borderColor }}></div>
        <img src={image} alt={name} />
      </div>
      <div className="icons">
        <a href={github} className="icon" target="_blank" rel="noopener noreferrer">
          <img src={GitLogo} alt="GitHub" className="icon-image" />
        </a>
        <a href={linkedin} className="icon" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinLogo} alt="LinkedIn" className="icon-image" />
        </a>
      </div>
      <div className="team-info">
        <p className="name">{name}</p>
        <p className="role">{role}</p>
      </div>
    </div>
  );
}

export default Team;
