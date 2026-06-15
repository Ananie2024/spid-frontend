export default function ProjectCard({
    project
}) {

    return (
        <div className="card shadow-sm h-100">

            <div className="card-body">

                <h5>
                    {project.title}
                </h5>

                <p>
                    {project.description}
                </p>

            </div>

        </div>
    );
}