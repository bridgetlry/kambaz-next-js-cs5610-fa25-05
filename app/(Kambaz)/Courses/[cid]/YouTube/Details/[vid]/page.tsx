"use client";
import { IoChevronBack } from "react-icons/io5";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import * as ytClient from "../../client";
import { useEffect, useState } from "react";
export default function YouTubeVideoDetails() {
    const router = useRouter();
    const { cid, vid } = useParams();
    const [video, setVideo] = useState<any>(null);
    const fetchVideoDetails = async () => {
        const videoDetails = await ytClient
            .getYouTubeVideoDetails(vid as string);
        setVideo(videoDetails);
    };
    const searchParams = useSearchParams();
    const moduleId = searchParams.get("mid");
    const lessonId = searchParams.get("lid");
    const saveYouTubeVideoToLesson = async () => {
        await ytClient.saveYouTubeVideoToLesson(
            cid as string, moduleId as string, lessonId as string, vid as string);
        router.push(`/Courses/${cid}/Modules`);
    };

    useEffect(() => {
        fetchVideoDetails();
    }, [vid]);

    if (!video) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container">
            <h2>
                <button className="btn btn-success float-end" onClick={saveYouTubeVideoToLesson}>Save to Lesson</button>
                <IoChevronBack onClick={() => router.back()} />
                {video.snippet.title} </h2>
            {video && (
                <div className="card mb-4">
                    <div className="card-body">
                        <iframe width="100%" height="315" frameBorder="0"
                            src={`https://www.youtube.com/embed/${vid}`}
                            title={video.snippet.title}
                            allowFullScreen></iframe>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">
                            {video.snippet.title}</h5>
                        <p className="card-text">
                            {video.snippet.description}</p>
                        <a target="_blank" className="btn btn-primary"
                            href={
                                `https://www.youtube.com/watch?v=${vid}`}
                            rel="noopener noreferrer">
                            Watch on YouTube </a>
                    </div></div>)}</div>);
}
