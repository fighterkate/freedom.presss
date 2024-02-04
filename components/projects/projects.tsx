export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="max-w-[538px] py-6">
      <h2 className="section-title uppercase">projects</h2>
      <ul className="pt-[30px]">
        {projects.map((project) => (
          <li className="border-stroke mb-8 rounded-md border p-3 hover:bg-gray-2" key={project.name}>
            <a href={project.detailUrl}>
              <article className="flex flex-row gap-3">
                <div className="-mt-[30px] w-[100px] shrink-0">
                  <img src={project.imgUrl} alt={project.name} className="block w-[100px] shrink-0" />
                </div>
                <div>
                  <h4 className="text-dark ff-din text-2xl font-medium leading-tight">{project.name}</h4>
                  <p className="mt-2">{project.description}</p>
                </div>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface IProject {
  description: string,
  detailUrl: string,
  imgUrl: string,
  name: string
}

export interface ProjectsProps {
  projects: IProject[]
}
