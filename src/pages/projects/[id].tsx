import { CustomButton } from "@/components/Button/Button";
import Overview from "@/Layout/overview";
import { projects } from "Data"
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

interface softwareType{
  id:number;
  name:string;
}

interface projectsProps  {
  id: string;
  imageUrl: string;
  name: string;
  tools: string;
  about: string;
  codeUrl: string;
  demoUrl: string;
  softwares: softwareType[];
}[]

const overview = (props:{specificData:projectsProps}) => {
 
  return (
    <Overview>
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={props.specificData.imageUrl}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-white">{props.specificData.name}</h2>
          <h3 className="text-white">{props.specificData.tools}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-4">
          {props.specificData.about}
          </p>
          <a href={props.specificData.codeUrl} target="_blank" rel="noreferrer" className="px-6">
            <CustomButton>Code</CustomButton>
          </a>
          <a href={props.specificData.demoUrl} target="_blank" rel="noreferrer">
            <CustomButton>Demo</CustomButton>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {props.specificData.softwares.map((tools:softwareType) =>(

              <p key={tools.id} className="text-gray-600 flex py-2 items-center ">
                <RiRadioButtonFill className='pr-1' /> {tools.name}
              </p>
              ))}
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

}


export const getStaticProps = (context) => {

  const projectsId = context.params?.id;
  const foundItem = projects.find((project:projectsProps) =>  project.id === projectsId)

  return {props: {specificData: foundItem } }
}

export const getStaticPaths = () => {

  const pathsWithParams = projects.map((project:projectsProps) => ({ params: {id: project.id}}
  ))
  return {
    paths:pathsWithParams,
    fallback:true 
  }
}


export default overview