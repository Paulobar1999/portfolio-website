
import React from 'react'

function ProjectItem({image, title,subtitle,discription,link}) {
  return (
      
    <div className="projectItem">
        <a href={""+link} target="_blank" rel="noreferrer" >
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
                <div className='projectAbout'>
                    <h1>{title}</h1>
                    <span className='discription'>{discription}</span>
                    <div className='subtitle'>{subtitle}</div>
            </div>
        </a>
    </div>
    )
}

export default ProjectItem