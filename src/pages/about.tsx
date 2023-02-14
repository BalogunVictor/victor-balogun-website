import { Skills } from "@/components/Skillls/Skills";
import Layout from "@/Layout";
import { skills } from "Data";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/about.module.scss";

function about() {
  return (
    <Layout>
      <div className={style.about}>
        <h1 className={style.Title}>About Me.</h1>

        <div className={style.aboutWrapper}>
          <div className={style.aboutMe}>
            <div className={style.aboutImage}>
              <Image
                height={500}
                width={600}
                src="/assets/victor.png"
                alt="victorImage"
              />
            </div>

            <div className={style.aboutText}>
              <h2 className="py-4 text-4xl">who am i.</h2>
              <p>
                My name is Victor Balogun,I specialize in building mobile
                responsive front-end UI applications that connect with API’s and
                other backend technologies. I’m very passionate about learning
                new technologies and understand there is more than one way to
                accomplish a task. I love using my skill set to simplify work
                for enterprises.Though I am most proficient in building
                front-end applications using HTML, SCSS, Javascript, React and
                Typescript, I am a quick learner and can pick up new tech stacks
                as needed. I believe that being a great developer is not using
                one specific language, but choosing the best tool for the job.
              </p>
              <p>
                I started front-end development in 2020,I have built multiple
                projects like e-commerce, chat and social applcations and also
                cloned popular brands website like Netflix and Youtube e.t.c. In
                my spare time I run a Fashion Brand where I create aesthetic
                designs.
              </p>
              <p>
                check out some of my{" "}
                <Link rel="stylesheet" href="/projects">
                  projects
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <h1 className={style.Title}>My Skills.</h1>
        <div className={style.mySkills}>
          <Skills Skill={skills} />
        </div>
      </div>
    </Layout>
  );
}

export default about;
