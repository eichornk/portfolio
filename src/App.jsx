import './App.css'

export default function App() {
  return (
    <>
      <div class="container border mt-5">
        <div class="row justify-content-center">
            <div class="border col-md-3">                                   {/* Will want to fix the spacing here eventually*/}
                <h1>Hello! My name is Kaylee Eichorn</h1>
            </div>
            <div class="border col-md-3 text-end">                           {/* And here too */}
                <p> Image here </p>
            </div>
        </div>
    </div>

      <div class="container border text-center">
        <h3> About me </h3>
        <p> Stuff about me here </p>
      </div>

      <div class="container border text-center">
        <h3> Projects </h3>

        <div class="card">
          <p> Project 1 </p>
        </div>

        <div class="card">
          <p> Project 1 </p>
        </div>

        <div class="card">
          <p> Project 1 </p>
        </div>

        <div class="card">
          <p> Project 1 </p>
        </div>
      </div>

      <div class="container border text-center">
        <h3> Certifications </h3>
        <ul>
          <li> Certification 1 </li>
          <li> Certification 2 </li>
          <li> Certification 3 </li>
          <li> Certification 4 </li>
          <li> Certification 5 </li>
        </ul>
      </div>

      <div class="container border text-center">
        <h3> Contact </h3>
        <button>Resume</button>
        <button>Github</button>
        <button>LinkedIn</button>
        <button>Other</button>
      </div>
    </>
  );
}


