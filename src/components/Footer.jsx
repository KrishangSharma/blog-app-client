// Package Imports
import {
  Mail,
  GitHub,
  LinkedIn,
  Instagram,
  SchoolOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="mt-auto w-100 bg-elevation">
      <footer className="w-full py-5 px-2 bg-elevation flex flex-col gap-10 items-start md:w-full md:flex-row md:justify-evenly md:items-center lg:w-5/6 lg:mx-auto lg:px-0 lg:flex-row lg:justify-between">
        {/* Personal Info */}
        <aside className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Krishang Sharma</h2>
          <p className="text-sm">
            <WorkOutlineOutlined fontSize="small" /> Full Stack Developer
          </p>
          <p className="text-sm">
            <LocationOnOutlined fontSize="small" /> Delhi, India
          </p>
          <p className="text-sm">
            <SchoolOutlined fontSize="small" /> IPU, Delhi
          </p>
        </aside>
        {/* Contact Links */}
        <aside className="flex flex-col gap-10 items-start lg:flex-row">
          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Socials</h3>
            <a
              href="https://github.com/KrishangSharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <GitHub className="text-accent" />{" "}
              <span className="underline">Github/KrishangSharma</span>
            </a>

            <a
              href="https://instagram.com/krishang.sharmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <Instagram className="text-accent" />{" "}
              <span className="underline">Instagram/krishang.sharmaa</span>
            </a>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Contact Me</h3>
            <a href="mailto:krishang.sharma.17704@gmail.com">
              <Mail className="text-accent" />{" "}
              <span className="underline">Mail Me</span>
            </a>
            <a
              href="https://linkedin.com/in/krishangsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <LinkedIn className="text-accent" />{" "}
              <span className="underline">Connect with me</span>
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
