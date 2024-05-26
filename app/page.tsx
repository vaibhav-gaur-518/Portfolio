import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container ms-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Engineer</span>
            <h1 className="h1 mb-2">
              Hello I'm <br /> <span className="text-accent">Vaibhav Gaur</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              With 2 years of immersive experience as a Software
              Engineer and a Bachelor's degree in Computer Science and
              Engineering. With a developer's mindset, I architect systems with
              both functionality and security in mind. I delve into the realms
              of 3D design and UI/UX, blending technical prowess with artistic
              flair.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Vaibhav Gaur.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-primary hover:transition-all duration-500"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
