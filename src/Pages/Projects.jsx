import React from 'react';
import '../Assets/projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import letsfamepage from "../Images/Letsfamepage.png";
import builtwithscience from "../Images/Builtwithscience.png";
import huelpage from "../Images/Huelpage.png";
import veganpage from "../Images/veganpage.png";

const Projects = () => {
  return(
  <section className="projects" id="projects">
    <h2><span>Practiced Projects</span></h2>
    <div className="project-list">
      <div className="project-item" data-aos="flip-left" data-aos-duration="2000">
        <div>
          <img src={letsfamepage} alt="letsfamelandingpage" className='projectThumbnail' />
        </div>
        <p>--React Website</p>
        <div className='projctTitle'>LetsFAME</div>
        <div className='overlay'>
          <p className='projectdescription'>
            This project involves developing the landing page and contact us page for the LetsFame website.
            The Website project, developed using <b>HTML, CSS, JavaScript,and React,Utilizing React Router,axios,useContext, useState hook, React-Bootstrap,Swiper.js,React-Bootstrap-icon</b> the website enables seamless page navigation and interactive elements. The landing page features a responsive carousel.In this contactpage i used <strong>Mock API</strong> to post a user comments.</p>
          <a href="https://github.com/Manikandan-M-dev/letsfamewebsite" target="_blank" rel="noopener noreferrer"><i className="fab fa-github githublogobtn"></i>View</a>
        </div>
      </div>
      <div className="project-item" data-aos="flip-right" data-aos-duration="2100">
        <div>
          <img src={builtwithscience} alt="builtwithsciencelandingpage" className='projectThumbnail' />
        </div>
        <p>--Website</p>
        <div className='projctTitle'>Built With Science</div>
        <div className='overlay'>
          <p className='projectdescription'>
            This project involves developing the landing page and signup,loginpage for the builtwithscience website.The website project is developed using <b>HTML and CSS,Javascript</b> incorporating responsive design principles with media queries to ensure optimal viewing across various devices and screen sizes.Used <strong>Mock API</strong> to post user signup data's and used get method to validate user login.when user enter a valid mail and password they redirect to homepage.</p>
          <a href="https://github.com/Manikandan-M-dev/builtwithsciencewebsite" target="_blank" rel="noopener noreferrer"><i className="fab fa-github githublogobtn"></i>View</a>
        </div>
      </div>

      <div className="project-item" data-aos="flip-up" data-aos-duration="2200">
        <div>
          <img src={huelpage} alt="huellandingpage" className='projectThumbnail' />
        </div>
        <p>--Website</p>
        <div className='projctTitle'>HUEL</div>
        <div className='overlay'>
          <p className='projectdescription'>
            This project involves developing the landing page for the HUEL website. The website project is developed using <b>HTML and CSS</b>, incorporating responsive design principles with media queries to ensure optimal viewing across various devices and screen sizes.The design focuses on enhancing user engagement, accessibility, and performance, delivering a modern, user-centric interface that meets the highest standards of static web development.</p>
          <a href="https://github.com/Manikandan-M-dev/huelwebiste" target="_blank" rel="noopener noreferrer"><i className="fab fa-github githublogobtn"></i>View</a>
        </div>
      </div>
      <div className="project-item vegan-item" data-aos="flip-right" data-aos-duration="2200">
        <div>
          <img src={veganpage} alt="huellandingpage" className='projectThumbnail' />
        </div>
        <p>--Website</p>
        <div className='projctTitle'>Vegan Store</div>
        <div className='overlay'>     
        <p className='projectdescription'>
          This project involves developing the landing page for the Vegan website. The website project is developed using <b>HTML and CSS</b>, incorporating responsive design principles with media queries to ensure optimal viewing across various devices and screen sizes.The design focuses on enhancing user engagement, accessibility, and performance, delivering a modern, user-centric interface that meets the highest standards of static web development.</p>
        <a href="https://github.com/Manikandan-M-dev/veganwebsite" target="_blank" rel="noopener noreferrer"><i className="fab fa-github githublogobtn"></i>View</a>
        </div>
      </div>
      {/* Add more projects here */}
    </div>
  </section>
);
}
export default Projects;
