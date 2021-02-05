import React from 'react'

import { fhSkills, shSkills, Projects } from './Data'

const Resume = () => {
  return (
    <>
      <div className='bg-image'>
        <div className='overlay pt-3'>
          <div className='row justify-content-center m-0'>
            <div className='col-md-2 bg-focus focus-radius'>
              <img
                src='/images/selff.jpeg'
                alt='me'
                className='img-fluid rounded-circle'
              />
              <h2 className='title text-center mt-3'>Ansh Shrivastava</h2>
              <p className='text-center'>
                <em>Frontend Developer</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row m-0'>
        <div className='w-100'></div>
        <div className='col-md-5'>
          <h5 className='text-center subtitle mt-2 py-1'>PROJECTS</h5>
          <div className='text-right'>
            {Projects.map((project) => (
              <div
                className={project.id > 1 ? 'line-height mt-3' : 'line-height'}
                key={project.id}
              >
                <strong className='inner-title field text-upper'>
                  <a href={project.link} target='blank' rel='noreferrer'>
                    {project.title}{' '}
                    <i className='fas fa-external-link-square-alt'></i>
                  </a>
                </strong>
                <p className='mb-0 inner-subtitle text-upper'>
                  {project.stack}
                </p>
                <p className='my-1'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-2 bg-focus text-center'>
          <p className='desc'>
            I am a fresher with great problem-solving skills and experience with
            projects on ReactJS & Python Frameworks. I like working on frontends
            and I design them with utmost interest.
          </p>
          <hr className='bg-light' />
          <h5 className='mt-3'>
            <strong>ADDRESS:</strong>
            <p className='mb-0 field text-upper'>
              Malviya Nagar Bhopal, MP 462003
            </p>
          </h5>
          <h5 className='mt-3'>
            <strong>PHONE:</strong>
            <p className='mb-0 field'>9752317277</p>
          </h5>
          <h5 className='mt-3'>
            <strong>EMAIL:</strong>
            <small className='mb-0 field'> shri.ansh4563@gmail.com</small>
          </h5>
          <hr className='bg-light' />
          <div className='d-flex justify-content-around pb-5'>
            <h2 className='grow'>
              <a
                href='https://github.com/ANSH4195/'
                target='blank'
                rel='noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
            </h2>
            <h2 className='grow'>
              <a
                href='https://www.linkedin.com/in/ansh-shrivastava-6a2975199/'
                target='blank'
                rel='noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </h2>
          </div>
        </div>
        <div className='col-md-5'>
          <h5 className='text-center subtitle mt-2 py-1'>EDUCATION</h5>
          <div className='text-left'>
            <div className='line-height'>
              <strong className='inner-title field text-upper'>
                Lakshmi Narain College of Tech., Bhopal
              </strong>
              <p className='mb-0 inner-subtitle text-upper'>B.Tech CSE</p>
              <p className='my-1'>August 2018 - June 2022</p>
            </div>
          </div>
          <h5 className='text-center subtitle mt-3 py-1'>SKILLS</h5>
          <div className='row'>
            <div className='col-md-6'>
              {fhSkills.map((skill) => (
                <div key={skill.name}>
                  <i
                    className={
                      skill.score >= 1
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 2
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 3
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 4
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 5
                        ? 'fas fa-circle mr-3'
                        : 'fa fa-circle-o mr-3'
                    }
                  ></i>
                  {skill.name}
                </div>
              ))}
            </div>
            <div className='col-md-6'>
              {shSkills.map((skill) => (
                <div key={skill.name}>
                  <i
                    className={
                      skill.score >= 1
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 2
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 3
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 4
                        ? 'fas fa-circle mr-1'
                        : 'fa fa-circle-o mr-1'
                    }
                  ></i>
                  <i
                    className={
                      skill.score >= 5
                        ? 'fas fa-circle mr-3'
                        : 'fa fa-circle-o mr-3'
                    }
                  ></i>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          <h5 className='text-center subtitle mt-2 py-1'>HOBBIES</h5>
          <div className='row'>
            <div className='col-md-6'>
              Playing Badminton, Playing PC Games, Reading about new PC
              Hardware, Watching Standup Comedy
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
