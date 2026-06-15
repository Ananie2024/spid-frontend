import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceService";

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    async function loadServices() {
        try {
            const response = await getServices();
            setServices(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-8 text-center">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map(service => (
                    <div key={service.id} className="card h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[var(--primary)]">
                                🏗️
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-0">
                                {service.name}
                            </h3>
                        </div>
                        <p className="text-[var(--text-light)] leading-relaxed text-lg">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            {services.length === 0 && (
                <p className="text-center text-[var(--text-light)] py-12">No services offered currently.</p>
            )}
        </div>
    );
}