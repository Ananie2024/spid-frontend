export default function ServiceCard({
    service
}) {

    return (
        <div className="card h-100 shadow-sm">

            <div className="card-body">

                <h5>
                    {service.name}
                </h5>

                <p>
                    {service.description}
                </p>

            </div>

        </div>
    );
}