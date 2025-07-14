import { FaTwitter, FaDiscord, FaGoogleDrive } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full bg-charcoal text-light py-4 px-6 z-50">
    <div className="max-w-6xl mx-auto flex flex-col  justify-between items-center gap-4">
      {/* Left text */}
      <p className="text-sm">&copy; {new Date().getFullYear()} Hedgehog Technical Institute</p>

      {/* Social links */}
      <div className="flex gap-6 text-xl">
        <a
          href="https://discord.gg/your-server"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cgs transition"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cgs transition"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1YxaFsjwN43nWqru4qO8jmfjjGPAcXcn6"
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
  )
}

export default Footer;