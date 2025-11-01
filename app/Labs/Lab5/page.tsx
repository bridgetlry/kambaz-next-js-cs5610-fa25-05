"use client";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithAsynchronousArrays from "./WorkingWithAsynchronousArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
function Lab5() {
 return (
  <div>
   <h1>Lab 5</h1>
   <a href={`${HTTP_SERVER}/Lab5/welcome`}>
    Welcome
   </a>
   <EnvironmentVariables />
   <hr />
   <PathParameters />
   <hr />
   <QueryParameters />
   <hr />
   <WorkingWithObjects />
   <hr />
   <WorkingWithArrays />
   <hr />
   <HttpClient />
   <hr />
   <WorkingWithObjectsAsynchronously />
   <hr />
   <WorkingWithAsynchronousArrays />
  </div>
 );
}
export default Lab5;
