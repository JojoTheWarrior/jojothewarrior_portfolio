import * as React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export const NavigationBar = () => {
  return (
    <>
      <link rel="stylesheet" href="/static/css/NavigationBar.css"></link>
      {/* Dropdown structure */}
      <ul id="dropdown1" class="dropdown-content">
        <li><a title="Go to homepage">Home</a></li>
        <li><a title="Who I am, my hobbies and interests">About Me</a></li>
        <li><a title="Portfolio for ICS4UP course">ICS4UP</a></li>
        <li><a title="Current projects and links">Projects</a></li>
        <li><a title="Contact information and socials">Contact</a></li>
        <li><a title="Check out my personal side">Switch!</a></li>
      </ul>
      {/* Navigation bar wrapper TODO: change color scheme to smth prettier */}
      <nav className="teal">
        <div className="nav-wrapper">
          <a title="Go to homepage">
            <img className="nav-icon" src="/static/img/profile_picture.png"></img>
          </a>
          <ul id="nav-mobile" className="left">
            <li className="nav-item"><a title="Go to homepage">Home</a></li>
            <li className="nav-item"><a title="Who I am, my hobbies and interests">About Me</a></li>
            <li className="nav-item"><a title="Portfolio for ICS4UP course">ICS4UP</a></li>
            <li className="nav-item"><a title="Current projects and links">Projects</a></li>
            <li className="nav-item"><a title="Contact information and socials">Contact</a></li>
            <li className="nav-item"><a title="Check out my personal side">Switch!</a></li>

            {/* Normally hidden; only shows up when the size of the page gets small enough */}
            <li><a class="dropdown-trigger" title="Navigation bar dropdown menu" data-target="dropdown1">Dropdown</a></li>
          </ul>
        </div>
      </nav>
      <script src="/static/js/NavigationBar.js"></script>
    </>
  );
}

export default NavigationBar;