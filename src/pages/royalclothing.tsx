import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Overview from "@/Layout/overview";
import { CustomButton } from "@/components/Button/Button";

const royalclothing = () => {
  return (
    <Overview>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            fill
            style={{ objectFit: "cover" }}
            src="/assets/projects/royalClothing.png"
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
            <h2 className="py-2 text-white">Royal clothing</h2>
            <h3 className="text-white">React JS / Scss / Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="py-4">
              I built this application in React JS and is hosted on Netlify.
              This app features user authentication with firebase as well as the
              firestore cloud storage database. This application allows user
              navigate between different categories and products. A shopping
              cart management with implementation of a means of payment with
              Stripe API. Redux and Redux-Saga is also being implemented for
              app-wide state management.
            </p>
            <a href="https://github.com/BalogunVictor/royal-clothing" target="_blank" rel="noreferrer" className="px-6">
              <CustomButton>Code</CustomButton>
            </a>
            <a
              href="https://live-royal-clothing.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <CustomButton>Demo</CustomButton>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Scss
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Redux
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Redux-Saga
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Stripe APi
                </p>
              </div>
            </div>
          </div>
          <Link href="/projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </Overview>
  );
};

export default royalclothing;
