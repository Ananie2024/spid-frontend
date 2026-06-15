import ProjectCard from "./ProjectCard";

export default function ProjectGallery({
    projects
}) {

    return (
        <div className="row">

            {projects.map(project => (

                <div
                    key={project.id}
                    className="col-lg-4 mb-4"
                >

                    <ProjectCard
                        project={project}
                    />

                </div>

            ))}

        </div>
    );
}