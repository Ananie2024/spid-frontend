import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceService";

export default function ServicesPreview() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            const response = await getServices();
            setServices(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="container py-5">

            <h2 className="text-center mb-5">
                Our Services
            </h2>

            <div className="row">

                {services.slice(0, 3).map(service => (

                    <div
                        key={service.id}
                        className="col-md-4 mb-4"
                    >

                        <div className="card h-100 shadow">

                            <div className="card-body">

                                <h5>{service.name}</h5>

                                <p>
                                    {service.description}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}