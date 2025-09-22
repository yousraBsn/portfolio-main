import { Link as ScrollLink } from 'react-scroll';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Bousnobra youssera</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Welcome to my portfolio</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">A Full Stack developer specializing in crafting both the frontend and backend of web and mobile applications, with additional knowledge in Machine Learning.
            <br /> 
            <br />
          </p>
        </div>
        <ScrollLink
               to="MyPortfolio"  
               spy={true}
               smooth={true}
               duration={500}
               className="btn btn-primary"
>
         Projects
         </ScrollLink>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
