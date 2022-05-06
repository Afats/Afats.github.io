import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import './RevealEffect.css'
import './RevealEffect2.css'
import './RevealEffect2_1.css'
import './RevealEffect3.css'


const About = () => {

  const { name, role, uni, description, description1, description2, resume, social } = about
  return (
    <div className='about center'>
      {name && (
        <span className="rev"><h1>
          Hi, I am <span className='about__name' ><span className="sol-cascade-gradient">{name}.</span></span>
        </h1></span>
      )}<span className="rev">
      {role && <h2 className='about__role'><span className="sol-blue">{role}</span> @ <span className="uni-gradient">{uni}</span></h2>}</span>
      <span className="rev3"><p className='about__desc'>{description}</p></span>
      <span className="rev2"><p className='about__desc'>{description1}</p></span>
      <span className="rev2_1"><p className='about__desc'>{description2}</p></span>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
      </div>
      <span className='space_top'/>
      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon className='large_ghub'/>
              </a>
            )}

            
            <span className='space'/>
            

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon className='large_linkedin'/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
