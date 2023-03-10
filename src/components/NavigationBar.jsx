import * as React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export const NavigationBar = () => {
  return (
    <>
      <link rel="stylesheet" href="/static/css/NavigationBar.css"></link>
      <div className="container">
        <div className="navigation-bar row">
            <div className="nav-item col s2">
              <a title="Go to homepage">Home</a>
            </div>
            <div className="nav-item col s2">
              <a title="Who I am, my hobbies and interests">About Me</a>
            </div>
            <div className="nav-item col s2">
              <a title="Portfolio for ICS4UP course">ICS4UP</a>
            </div>
            <div className="nav-item col s2">
              <a title="Current projects and links">Projects</a>
            </div>
            <div className="nav-item col s2">
              <a title="Contact information and socials">Contact</a>
            </div>
            <div className="nav-item col s2">
              <a title="Check out my personal side">Switch!</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;