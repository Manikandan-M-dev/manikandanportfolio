import "../Assets/home.css";
import myphoto from "../Images/Photographport1.png";
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="Homemain">
                    <div className="myimg" data-aos="zoom-in">
                            <img src={myphoto} alt="photograph" className="myphoto" />
                    </div>
                    <div className="homedescription">
                        <h1>
                            <Typewriter
                                words={['Manikandan']}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p><strong>Frontend Developer</strong>, dedicated to transforming ideas into visually appealing and user-friendly websites. With a keen eye for design and a love for clean code, I create responsive, accessible, and dynamic web applications.</p>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Home;