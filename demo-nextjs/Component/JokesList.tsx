import { getJokes } from "@/database";

const JokeList = async() => {
    const jokes = await getJokes();

    return (
        <div>
            {
                jokes.map(j => (
                    <div key={j.id}>
                        <p>{j.setup}</p>
                        <p>{j.punchline}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default JokeList;