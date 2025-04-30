import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import StartPage from "@/components/StartPage";
import WorkAndEducation from "@/components/WorkAndEducation";

export default function Home() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
        <section className="h-screen snap-start">
          <StartPage />
        </section>
        <section className="h-screen snap-start">
          <Skills />
        </section>

        <section className="h-screen snap-start">
          <Projects />
        </section>

        <section className="h-screen snap-start">
          <WorkAndEducation />
        </section>
      </div>
    </>
  );
}

{
}
