import uniqid from 'uniqid'
import { projects, shuffled_projects, projects_intro, shuffled_projects_intro } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import '../About/About.css'

const Projects = () => {
  if (shuffled_projects == null) {
      const { desc, plug_desc } = projects_intro
      return (
        <section id='projects' className='section projects'>
          <h2 className='section__title'><span className='electric__blue'>Projects</span></h2>
          <p className='projects__intro'><b>{desc}</b></p>
          <p className='projects__plug'>{plug_desc}<a className= 'link' href="https://github.com/Afats?tab=repositories">here</a>.</p>
          <div className='projects__grid'>
            {projects.map((project) => (
              <ProjectContainer key={uniqid()} project={project} />
            ))}
          </div>
        </section>
      )
  }

  else {
    const { desc, plug_desc } = shuffled_projects_intro

    return (
      <section id='projects' className='section projects'>
        <h2 className='section__title'><span className='electric__blue'>Projects</span></h2>
        <p className='projects__intro'><b>{desc}</b></p>
        <p className='projects__plug'>{plug_desc}<a className= 'link' href="https://github.com/Afats?tab=repositories">here</a>.</p>
        <div className='projects__grid'>
          {shuffled_projects.map((shuffled_project) => (
            <ProjectContainer key={uniqid()} project={shuffled_project} />
          ))}
        </div>
      </section>
    )

  }
}

export default Projects
