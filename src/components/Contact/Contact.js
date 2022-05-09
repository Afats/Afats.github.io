import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact, about } from '../../portfolio'
import './Contact.css'



const Contact = () => {
  const { social } = about
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Send me an email
        </span>
      </a>
      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
              >
                  <GitHubIcon className="small_ghub"/>
              </a>
            )}

            <span className='space2'/>

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
              >
                <LinkedInIcon className="small_linkedin"/>
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Contact
