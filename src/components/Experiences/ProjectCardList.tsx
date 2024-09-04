import CardList from "../CardList";
import StyledCard_Link from "../StyledCard/StyledCard_Link";

import { projects, IProject } from "@/constants/project";

const ProjectCardList = () => (
  <CardList title="Project" columns={2}>
    {projects
      .sort((a, b) => b.id - a.id)
      .map((project: IProject) => (
        <StyledCard_Link key={project.id} {...project} />
      ))}
  </CardList>
);

export default ProjectCardList;
