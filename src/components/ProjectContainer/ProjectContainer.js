import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <a className='project' href={project.sourceCode}>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    <p className='project__description'>{project.description1}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link cent'
        target="_blank"
      >
        <GitHubIcon />
      </a>
    )}
  </a>
)

export default ProjectContainer
