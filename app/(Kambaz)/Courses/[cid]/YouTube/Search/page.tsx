"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import * as ytClient from "../client";
import { IoChevronBack } from "react-icons/io5";
export default function YouTubeSearch() {
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState<any[]>([]);
    const searchParams = useSearchParams();
    const search = searchParams.get("search");
    const moduleId = searchParams.get("mid");
    const lessonId = searchParams.get("lid");
    const router = useRouter();
    const { cid } = useParams();
    const searchVideos = async (keyword: string) => {
        const videos = await ytClient.search(keyword || query);
        setVideos(videos);
    };

    useEffect(() => {
        if (search) {
            setQuery(search);
            searchVideos(search);
        }
    }, [search]);


    return (
        <div>
            <h2>YouTube Video Search</h2>
            <button
                className="btn btn-primary mb-2 w-25 float-end"
                onClick={async () => { router.push(`/Courses/${cid}/YouTube/Search?search=${query}`); }} >
                Search
            </button>
            <div className="w-75 pe-2">
                <input value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="form-control mb-2" /></div>
            {videos && videos.length > 0 && (
                <div className="row">
                    {videos.map((video) => (
                        <div key={video.id.videoId} className="col-4">
                            <div className="card mb-4">
                                <img
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                    className="card-img-top" />

                                <div className="card-body">
                                    <h5 className="card-title"><IoChevronBack onClick={() => router.back()} /> {video.snippet.title}</h5>
                                    <p className="card-text">{video.snippet.description}</p>
                                    <a href={
                                        `https://www.youtube.com/watch?v=${video.id.videoId}`}
                                        target="_blank" className="btn btn-primary" >
                                        Watch Video </a>
                                    <Link className="btn btn-secondary ms-2" href={`/Courses/${cid}/YouTube/Details/${video.id.videoId}?mid=${moduleId}&lid=${lessonId}`}
                                    >
                                        View Details </Link>
                                </div></div></div>))}</div>)}</div>);
}

