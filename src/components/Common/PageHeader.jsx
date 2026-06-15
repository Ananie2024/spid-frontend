export default function PageHeader({
    title,
    subtitle
}) {
    return (
        <div className="bg-light py-5 mb-5">

            <div className="container">

                <h1 className="fw-bold">
                    {title}
                </h1>

                {subtitle && (
                    <p className="lead">
                        {subtitle}
                    </p>
                )}

            </div>

        </div>
    );
}