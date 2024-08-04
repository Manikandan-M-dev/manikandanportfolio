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
// import { Shake } from 'reshake';
// import Header from "../Pages/Header";

const About = () => {
  // const [hovered, setHovered] = useState(null);

  const frontendItems = [
    { logo: htmllogo, name: 'HTML' },
    { logo: csslogo, name: "CSS" },
    { logo: jslogo, name: 'JAVASCRIPT' },
    { logo: bootstraplogo, name: 'BOOTSTRAP' },
    { logo: reactlogo, name: 'REACT.JS' }
  ]
  const otherItems = [
    { logo: vscodelogo, name: 'VS CODE' },
    { logo: gitlogo, name: 'GIT' },
    { logo: excellogo, name: 'MS-EXCELL' },
    { logo: wordlogo, name: 'MS-WORD' },
    { logo: coreldrawlogo, name: 'CORELDRAW' }
  ]
  return (
    <section className="about">
      <h2><span>About Me</span></h2>
      <div className='aboutmain'>
        <div className='aboutcontent'>
          <p>Hello! I’m <b>Manikandan</b>, a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript and React.js. As a recent graduate with a degree in M.Sc Mathematics, I am excited to embark on my professional journey in web development.</p>
        </div>
      </div>
      <p className='skillhead'>Here are some of my skills on which I have learnt</p>
      <div className="skillsmain">
        <div className="frontend" data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <p>Frontend</p>
          <div className="frontenditems">
            {frontendItems.map((item, index) => (
              <div className="logo-item" key={index}>
                <img src={item.logo} alt={`${item.name}logo`} className='logoimg' /><span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="frontend" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <p>Others</p>
          <div className="frontenditems">
            {otherItems.map((otheritem, index) => (
              <div className="logo-item">
                <img src={otheritem.logo} alt={`${otheritem.name}logo`} className='logoimg' /><span>{otheritem.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Header/> */}
    </section>
  );
};
export default About;
