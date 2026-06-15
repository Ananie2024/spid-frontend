import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

export default function FeaturedProjects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {

        try {

            const response = await getProjects();

            setProjects(response.data);

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="bg-light py-5">

            <div className="container">

                <h2 className="text-center mb-5">
                    Recent Projects
                </h2>

                <div className="row">

                    {projects.slice(0, 3).map(project => (

                        <div
                            key={project.id}
                            className="col-lg-4"
                        >

                            <div className="card mb-4 shadow-sm">

                                <div className="card-body">

                                    <h4>{project.title}</h4>

                                    <p>{project.description}</p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}