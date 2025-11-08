import SkillsCloud from "./SkillsCloud";

function AboutHeadline() {
    return (
      <div className={"flex justify-between items-center min-h-screen px-[10%] gap-8"}>
          <div className={"w-1/2 space-y-6"}>
            <div>
                <h1 className={"text-8xl uppercase tracking-wider font-bold mb-2"}>About</h1>
                <h2 className={"text-2xl font-light text-gray-300 mb-4"}>msjkee.stukalov@gmail.com</h2>
                <p className={"text-lg font-medium"}>My name is Mikhail Stukalov, a 21-year-old Computer Science student at Griffith College Dublin.
                    I am currently seeking an internship position as a Software Engineer, where I can apply my technical knowledge, develop practical experience, and contribute to meaningful projects.

                    I am a motivated student with a strong interest in software development, problem-solving, and modern technologies.
                    My goal is to grow professionally in the IT industry, gaining hands-on experience in a real development environment while continuously improving my skills.

                    Beyond programming, I value communication and collaboration. I believe that effective teamwork, shared ideas, and clear understanding are essential parts of building successful software solutions.
                </p>
            </div>
          </div>

          <div className={"w-1/2"}>
              <SkillsCloud />
          </div>
      </div>
    );
}

export default AboutHeadline;