import React from 'react';

/**
 * @description renders component to the DOM
 *
 * @function footer
 *
 * @returns {JSX} JSX component for the footer
 */
const footer = () => (
  <div className="center">
    <footer>
      <div><h3 className="center" >Event Manager</h3></div>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <div className="float-left">
            <a className="navbar-brand" href="/"><img
              src="https://res.cloudinary.com/skybound/image/upload/v1522444986/eventmanager/static/event.png"
              width="30"
              height="30"
              alt=""
            />
            </a>
          </div>
          <div className="float-left">
            <ul >
              <p className="footerTitle">Social Media</p>
              <li className="footerColor">facebook</li>
              <li className="footerColor">twitter</li>
              <li className="footerColor">instargram</li>
            </ul>
          </div>
          <div className="float-left">
            <ul >
              <p className="footerTitle">Event manager</p>
              <li className="footerColor">Questions</li>
              <li className="footerColor">Jobs</li>
              <li className="footerColor">Help</li>
            </ul>
          </div>
          <div className="float-left">
            <ul >
              <p className="footerTitle">About</p>
              <li className="footerColor">desgin by Taiwo Sunday</li>
              <li className="footerColor">+2348038512455</li>
              <li
                className="footerColor"
              >https://github.com/Spectrumsun
              </li>
              <li
                className="footerColor"
              >taiwo.sunday@outlook.com
              </li>
            </ul>
          </div>
          <div className="float-left">
            <ul >
              <p className="footerTitle">Site</p>
              <li className="footerColor">Home</li>
              <li className="footerColor">Centers</li>
              <li className="footerColor">Events</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="center">Event Managment &copy; 2017</p>
    </footer>
  </div>

);

export default footer;
