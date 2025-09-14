import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5610" className="wd-dashboard-course-link">
            <Image src="/images/blue.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS5610 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Web Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS5678 Node JS </h5>
              <p className="wd-dashboard-course-title">
                Backend Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="wd-dashboard-course">
          <Link href="/Courses/9101" className="wd-dashboard-course-link">
            <Image src="/images/mongo.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS9101 Mongo DB </h5>
              <p className="wd-dashboard-course-title">
                Database Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1121" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS1121 Python </h5>
              <p className="wd-dashboard-course-title">
                AI Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3141" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS3141 Java </h5>
              <p className="wd-dashboard-course-title">
                Software Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5161" className="wd-dashboard-course-link">
            <Image src="/images/csharp.jpg" width={200} height={150} alt="This is alt text"/>
            <div>
              <h5> CS5161 C# </h5>
              <p className="wd-dashboard-course-title">
                Game Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
