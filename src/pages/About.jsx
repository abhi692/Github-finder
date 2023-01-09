import { Fragment } from "react";

function About() {
  return (
    <div className="font-bold text-2xl text-center">
      <Fragment>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>Version: 1.0.0</p>
      <a className="underline decoration-blue-500 text-white" href={"www.google.com"}>DEVELOPED BY ABHISHEK</a>
    </Fragment>
    </div>
  )
}

export default About;
