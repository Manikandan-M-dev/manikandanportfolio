import React from 'react';
import '../Assets/about.css';
import htmllogo from "../Images/html5.png";
import csslogo from "../Images/CSS3_logo.svg.png";
import jslogo from "../Images/javascript-vector.png";
import bootstraplogo from "../Images/bootstrapframe.jfif";
import reactlogo from "../Images/reactlogo.png";
import vscodelogo from "../Images/Vscodelogo.png";
import gitlogo from "../Images/gitlogo.png";
import excellogo from "../Images/excellogop.png";
import wordlogo from "../Images/wordlogop.png";
import coreldrawlogo from "../Images/coreldraw.png";

const About = () => (
  <section className="about">
    <h2><span>About Me</span></h2>
    <div className='aboutmain'>
      <div className='aboutcontent'>
        <p>Hello! I’m Manikandan, a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript and React.js. As a recent graduate with a degree in M.Sc Mathematics, I am excited to embark on my professional journey in web development.</p>
      </div>
    </div>
    <p className='skillhead'>Here are some of my skills on which I have learnt</p>
    <div className="skillsmain">
      <div className="frontend"data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <p>Frontend</p>
        <div className="frontenditems">
          <div className="logo-item">
            <img src={htmllogo} alt="html5logo" className='logoimg' /><span> HTML</span>
          </div>
          <div className="logo-item">
            <img src={csslogo} alt="html5logo" className='logoimg' /><span>CSS</span>
          </div>
          <div className="logo-item">
            <img src={jslogo} alt="html5logo" className='logoimg' /><span>JAVASCRIPT</span>
          </div>
          <div className="logo-item">
            <img src={bootstraplogo} alt="html5logo" className='logoimg' /><span>BOOTSTRAP</span>
          </div>
          <div className="logo-item">
            <img src={reactlogo} alt="html5logo" className='logoimg' /><span>REACT.JS</span>
          </div>
        </div>
      </div>
      <div className="frontend"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <p>Others</p>
        <div className="frontenditems">
          <div className="logo-item">
            <img src={vscodelogo} alt="html5logo" className='logoimg' /><span>VS CODE</span>
          </div>
          <div className="logo-item">
            <img src={gitlogo} alt="html5logo" className='logoimg' /><span>GIT</span>
          </div>
          <div className="logo-item">
            <img src={excellogo} alt="html5logo" className='logoimg' /><span>EXCELL</span>
          </div>
          <div className="logo-item">
            <img src={wordlogo} alt="html5logo" className='logoimg' /><span>WORD</span>
          </div>
          <div className="logo-item">
            <img src={coreldrawlogo} alt="html5logo" className='logoimg' /><span>CORELDRAW</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
