import Layout from "@/Layout";
import { ProjectItem } from "../../components/ProjectItem";
import style from "../../styles/title.module.scss";

function projects() {
  return (
    <Layout>
      <div className="w-full">
        <div className="max-x-[1240px]  flex flex-col justify-center items-center mx-auto py-14 md:px-16 ">
          <p className={style.Title}>Projects</p>
          <h2 className="py-4 text-xl">what I’ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="E-commerce App"
              src={"/assets/projects/royalClothing.png"}
              projectUrl="/projects/royalclothing"
              tool="React Js"
            />

            <ProjectItem
              title="Netflix App"
              src={"/assets/projects/netflix.jpg"}
              projectUrl="/projects/netflix"
              tool="Next Js"
            />

            <ProjectItem
              title="Chat App"
              src={"/assets/projects/wikkyChat.png"}
              projectUrl="/projects/wikkychat"
              tool="React Js"
            />

            <ProjectItem
              title="Expense Tracker"
              src={"/assets/projects/expenseTracker.png"}
              projectUrl="/projects/expensetracker"
              tool="React Js"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default projects;
