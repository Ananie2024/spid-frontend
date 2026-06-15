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
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-8">Our Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div key={project.id} className="card h-full flex flex-col">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--text-heading)]">
                            {project.title}
                        </h3>
                        <p className="text-[var(--text-light)] leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
            {projects.length === 0 && (
                <p className="text-center text-[var(--text-light)] py-12">No projects found.</p>
            )}
        </div>
    );
}