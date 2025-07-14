import {
  FaTwitter,
  FaDiscord,
  FaGoogleDrive,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-charcoal text-light py-4 px-6 z-50">
      <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hedgehog Technical Institute
        </p>

        {/* Right - Social & contact links */}
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:HedgehogTechnical@gmail.com"
            className="hover:text-cgs transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://discord.gg/PctwSxXDkx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cgs transition"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="https://twitter.com/HedgeTechInst"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cgs transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://bsky.app/profile/hedgetechinstitute.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cgs transition"
            aria-label="BlueSky"
          >
            <SiBluesky />
          </a>
          <a
            href="https://youtube.com/@HedgeTechInst"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cgs transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1YxaFsjwN43nWqru4qO8jmfjjGPAcXcn6?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cgs transition"
            aria-label="Expo Assets Drive"
          >
            <FaGoogleDrive />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
