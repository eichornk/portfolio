import './App.css'
import styled from '@emotion/styled'
import majorExp from './assets/explorationProject.png'
import greekDB from './assets/greekDatabase.png'
const Button = styled.button`
  background-color: white;
  &:hover {
        background-color: green;
    }
`



export default function App() {
  return (
    <>
      <div className="container border mt-5">
        <div className="row justify-content-center">
            <div className="border col-md-3 text-center">                                   {/* Will want to fix the spacing here eventually*/}
                <h1>Hello! My name is Kaylee Eichorn</h1>
            </div>
            <div className="border col-md-3 text-end">                                      {/* And here too */}
                <p> Image here </p>
            </div>
        </div>
      </div>

    {/* About me section */}
      <div className="container border text-center mt-5">
        <h3> About me </h3>
        <p> Welcome to my Portfolio! My name is Kaylee and I'm currently looking for jobs in Web Development and UX Research. 
          I graduated from Oregon State University in June 2024 with a Bachelor of Science in Computer Science focusing on Human-Computer 
          Interactions. I chose this focus because I’m fascinated by how people perceive various applications and am eager to explore ways 
          to make them more accessible and user-friendly for everyone. This led to me adding minors in User Experience Research and Psychology.
        </p>
      </div>

    {/* Project Section */}
      <div className="container border mt-5">
        <h3 className="text-center"> Projects </h3>

        <div className="card mt-2">
          <div className="row no-gutters">
            {/* Project image here */}
            <div className="col-md-4">
              <img src={majorExp} className="card-img" alt="Front Page of Website"/>
            </div>
            {/* Project details here */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> COE Major Exploration </h5>
                <p className="card-text">My Senior Capstone project was based on helping incoming students to the College of Engineering find a major that aligned with their 
                  interests and career goals. We created a website that allowed students to explore the different majors offered by the College of Engineering, 
                  learn about the different career paths available to them, and find resources to help them succeed in their chosen major.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-2">
          <div className="row no-gutters">
            {/* Project image here */}
            <div className="col-md-4">
              <img src={greekDB} className="card-img" alt="Go Greek Database Front Page"/> {/* Can probably make this website look better */}
            </div>
            {/* Project details here */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> Go Greek Database </h5>
                <p className="card-text">A Database my partner and I worked on for our Final Project in Introduction to Databases. This database is intended to be used by the 
                  Greek Life Office at Oregon State University to help them keep track of the different Greek Organizations on campus, the members of each organization, and philanthropy
                  events that each organization is hosting. We wanted to create this database to make it easier to access all this information in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-2">
          <div className="row no-gutters">
            {/* Project image here */}
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..."/>
            </div>
            {/* Project details here */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> Redesign </h5>
                <p className="card-text">Project Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-2">
          <div className="row no-gutters">
            {/* Project image here */}
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..."/>
            </div>
            {/* Project details here */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> Other Project </h5>
                <p className="card-text">Project Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Certification Section */}
      <div className="container border text-center mt-5">
        <h3> Certifications </h3>
        <p> MTA: HTML5 Application Development Fundamentals </p>
        <p> MTA: Windows Operating System Fundamentals </p>
        <p> MTA: Introduction to Programming Using HTML and CSS </p>
        <p> CompTIA IT Fundamentals+ </p>
      </div>

    {/* Contact Section */}
      <div className="container border text-center mt-5">
        <h3> Contact </h3>
        <Button><a href="https://docs.google.com/document/d/1zDluULlcMdWv3Z8oIeb1qhblGCDVGuVqkeEU8Wq5jcM/edit?usp=sharing" ClassName="text-decoration-none">Resume</a></Button>
        <Button><a href="https://github.com/eichornk" ClassName="text-decoration-none">Github</a></Button>
        <Button><a href="https://www.linkedin.com/in/kaylee-eichorn" ClassName="text-decoration-none">LinkedIn</a></Button>
        <Button>Other</Button>
      </div>
    </>
  );
}


