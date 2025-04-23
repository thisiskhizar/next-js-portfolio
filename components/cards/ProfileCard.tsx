import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col space-y-4 p-5">
      <img
        src="./600x400-2.png"
        alt="Muhammad Khizar"
        className="w-full min-h-50 rounded-2xl object-cover shadow-md transition-all duration-200 group-hover/bento:brightness-75"
      />

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <h2 className="font-sans text-2xl lg:text-3xl font-bold pointer-events-none bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/50">
          Muhammad Khizar
        </h2>
        <p className="text-base text-white-100 mt-2">
          I&apos;m a Full Stack Developer with 2+ years of experience building
          scalable web applications using React, Django, and Next.js.
        </p>
        <p className="text-base text-white-100 mt-1">
          I’ve delivered 50+ custom projects globally, blending clean
          architecture, modern tech, and client collaboration to solve
          real-world business challenges.
        </p>
      </div>

      <div className="flex space-x-3 mt-2">
        <SocialIcon icon={<FaFacebookF />} />
        <SocialIcon icon={<FaGithub />} />
        <SocialIcon icon={<FaYoutube />} />
      </div>
    </div>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
    {icon}
  </div>
);
