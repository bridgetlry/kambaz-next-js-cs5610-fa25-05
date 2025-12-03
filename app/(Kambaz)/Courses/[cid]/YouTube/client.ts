import axios from "axios";
const YOUTUBE_API = process.env.NEXT_PUBLIC_YOUTUBE_API;
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER;

const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const search = async (query: string) => {
  const response = await axios.get(
    `${YOUTUBE_API}/search?part=snippet&q=${query}&key=${YOUTUBE_API_KEY}`
  );
  return response.data.items;
};

export const getYouTubeVideoDetails =
  async (vid: string) => {
  const response = await axios.get(   `${YOUTUBE_API}/videos?part=snippet,contentDetails&id=${vid}&key=${YOUTUBE_API_KEY}`
 );
  return response.data.items[0];
};

export const saveYouTubeVideoToLesson = async (
 courseId: string, moduleId: string,
 lessonId: string, videoId: string
) => {
 const response = await axios.post(  `${COURSES_API}/${courseId}/modules/${moduleId}/lessons/${lessonId}/youtube/${videoId}`);
 return response.data;
};


