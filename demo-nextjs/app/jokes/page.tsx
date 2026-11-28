import JokesList from "@/Component/JokesList";
import { Suspense } from "react";

const JokePage = () => {



    return (
        <div>
            <h1>Jokes</h1>
            <Suspense>
                <JokesList/>
            </Suspense>

        </div>
    )
};

export default JokePage;