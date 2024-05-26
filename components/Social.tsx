import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socials = [
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/vaibhav-gaur-110772195" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/VaibhavGaur-ShadowMaster/" },
];

const Social = () => {
  return (
    <div className="flex gap-6">
      {Socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
