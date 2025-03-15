import { useRouteError, Link } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-red-500">Oops!!!</h1>
            <h2 className="text-2xl font-semibold mt-2">Something went wrong</h2>

            {/* Show error details if available */}
            {err && (
                <h3 className="mt-4 text-lg text-gray-600">
                    {err.status}: {err.statusText}
                </h3>
            )}

            <Link
                to="/"
                className="mt-6 inline-block px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorComponent;
