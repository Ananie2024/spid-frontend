import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceService";

export default function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    async function loadServices() {

        const response =
            await getServices();

        setServices(response.data);
    }

    return (
        <div className="container py-5">

            <h1 className="mb-5">
                Services
            </h1>

            <div className="row">

                {services.map(service => (

                    <div
                        className="col-md-6 mb-4"
                        key={service.id}
                    >

                        <div className="card h-100">

                            <div className="card-body">

                                <h3>
                                    {service.name}
                                </h3>

                                <p>
                                    {service.description}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}