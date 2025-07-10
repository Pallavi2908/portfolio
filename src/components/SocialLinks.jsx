import { socials } from "../data/socials";
import SocialBtn from "../components/SocialBtn";

function SocialLinks() {
  return (
    <div className="flex max-w-screen justify-center gap-6 pt-12">
      {socials.map(({ label, icon, link }) => (
        <a key={label} href={link} target="_blank" rel="noopener noreferrer">
          <SocialBtn label={label} icon={icon} />
        </a>
      ))}
    </div>
  );
}
export default SocialLinks;
