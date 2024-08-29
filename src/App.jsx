import './App.css'

export default function App() {
  return (
    <>
      <div className="container border mt-5">
        <div className="row justify-content-center">
            <div className="border col-md-3 text-center">                                   {/* Will want to fix the spacing here eventually*/}
                <h1>Hello! My name is Kaylee Eichorn</h1>
            </div>
            <div className="border col-md-3 text-end">                           {/* And here too */}
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
          to make them more accessible and user-friendly for everyone. This led to me adding minors in User Experience Research and Psychology.  </p>
      </div>

    {/* Project Section */}
      <div className="container border mt-5">
        <h3 className="text-center"> Projects </h3>

        <div className="card mt-2">
          <div className="row no-gutters">
            {/* Project image here */}
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..."/>
            </div>
            {/* Project details here */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> COE Major Exploration </h5>
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
                <h5 className="card-title"> Go Greek Database </h5>
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
        <p> MTA: HTML5 Application Development Fundamentals</p>
        <p> MTA: Windows Operating System Fundamentals </p>
        <p> MTA: Introduction to Programming Using HTML and CSS </p>
        <p> CompTIA IT Fundamentals+ </p>
      </div>

    {/* Contact Section */}
      <div className="container border text-center mt-5">
        <h3> Contact </h3>
        <button>Resume</button>
        <button>Github</button>
        <button>LinkedIn</button>
        <button>Other</button>
      </div>
    </>
  );
}


