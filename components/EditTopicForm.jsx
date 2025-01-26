"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm(param) {

    const [newTitle, setNewTitle] = useState(param.title);
    const [newDescription, setNewDescription] = useState(param.description);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch("https://mongodbapp.vercel.app/api/topic", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id: param.id,
                    title: newTitle,
                    description: newDescription
                })
            });

            if(!response.ok){
                throw new Error(response.statusText);
            }

            alert("Topic updated successfully");
            console.log("Topic updated");

            router.replace("/");
            router.refresh();
        }catch(error){
            console.log(error);
        }
    }


    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            className="border border-slate-500 px-8 py-2" 
            type="text"
            placeholder="Topic Title"
        />

        <textarea
            onChange={(event) => setNewDescription(event.target.value)}
            value={newDescription}
            className="border border-slate-500 px-8 py-2" 
            type="text"
            placeholder="Topic Description"
        />

        <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit" type="submit">
            Update Topic
        </button>
    </form>
    );
}