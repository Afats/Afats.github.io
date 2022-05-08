import uniqid from 'uniqid'
import { projects, projects_intro } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import '../About/About.css'

const Projects = () => {
  const { desc, plug_desc } = projects_intro
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'><span className='electric__blue'>Projects</span></h2>
      <p className='projects__intro'>{desc}</p>
      <p className='projects__plug'>{plug_desc}<a className= 'link' href="https://github.com/Afats?tab=repositories">here</a>.</p>
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
