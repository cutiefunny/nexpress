import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
    try{
        const response = await fetch("https://mongodbapp.vercel.app/api/topics",{cache: "no-store"});

        if(!response.ok){
            throw new Error(response.statusText);
        }

        let test = await fetch("http://localhost:3001/topic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "test title",
                description: "test Description"
            })
        });

        return await response.json();
    }catch(error){
        console.log(error);
    }
};

export default async function TopicList() 
{
    const topics = await getTopics();

    return (
        <>
        {topics.map((topic, index) => (
            <div key={index} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="front-bold text-2xl">{topic.title}</h2>
                    <p>{topic.description}</p>
                </div>
                <div className="flex gap-2">
                    <Link href={"/topic?" + topic._id}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))}
        </>
    );
}