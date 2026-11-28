"use client"; // Error components must be Client Components

import { useEffect } from "react";

interface ErrorProps {
    error: unknown;
    retry: () => void;
}

const ErrorPage = ({ error, retry }: ErrorProps) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => retry()}>Try again</button>
        </div>
    );
}

export default ErrorPage;