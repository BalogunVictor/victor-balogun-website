import Layout from "@/Layout";
import { ProjectsItem } from "Data";
import { ProjectItem } from "../../components/ProjectItem";
import style from "../../styles/title.module.scss";

interface itemProps{
  id:number
  title:string
  src:string
  projectUrl:string
  tool:string
}

function projects() {
  return (
    <Layout>
      <div className="w-full">
        <div className="max-x-[1240px]  flex flex-col justify-center items-center mx-auto py-14 md:px-16 ">
          <p className={style.Title}>Projects</p>
          <h2 className="py-4 text-xl">what I’ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            { ProjectsItem.map((item:itemProps) => (
              <ProjectItem
                key={item.id}
                title={item.title}
                src={item.src}
                projectUrl={item.projectUrl}
                tool={item.tool}
              />
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default projects;
