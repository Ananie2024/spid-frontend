import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    async function loadProjects() {
        try {
            const response = await getProjects();
            setProjects(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container py-5">
            <h1 className="mb-4">Projects</h1>

            <div className="row">

                {projects.map(project => (
                    <div
                        key={project.id}
                        className="col-md-4 mb-4"
                    >
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">

                                <h5>
                                    {project.title}
                                </h5>

                                <p>
                                    {project.description}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}