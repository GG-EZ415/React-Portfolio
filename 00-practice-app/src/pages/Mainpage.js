import React, { useState } from 'react';
import { Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = () => {const homeHeader = { fontFamily: 'Shrikhand', color: '#FFA3BB', fontSize: 35 };
const trendingHeader = { fontFamily: 'Shrikhand', color: '#61769D', fontSize: 35 };
return (
  // here starts the left side of the Navbar
  <div>
    <div class="row">
      <div class="col-md-2">
        <nav className="navbar navbar-expand-lg navbar-light d-grid gap-2 mt-3 ml-3">
          <Nav.Link id='homeNavbar' className="navbar-brand" href="/">
            About Me
          </Nav.Link>
          <Nav.Link id='homeNavbar' className="navbar-brand" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link id='homeNavbar' className="navbar-brand" href="/socials">
            Socials
          </Nav.Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      {/* here starts the center content portion. The User's social timeline */}
      <div class="row col-lg-6 mx-auto">
        <div id="status" class="column h-100">
          <Form.Group className="mb-3 g-4">
            <Form.Label style={homeHeader}>About Me</Form.Label>
          </Form.Group>
          <div className="d-grid gap-3">
            {posts.map((post) => {
              return (
                <div style={{ backgroundColor: '#efe8ad' }} class="card h-100">
                  {post.postContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Here starts the Trending section */}
      <div id="trending" class="row col-md-2 ">
        <div style={{ backgroundColor: '#AADD96' }} className="square rounded-6">
          <Form.Label style={trendingHeader}>Trending</Form.Label>
          <div></div>
          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </div>
      </div>
    </div>
  </div>
);
}

export default Homepage;