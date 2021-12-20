import React from 'react';
//import Modal from '../Modal';

const ProjectList = () => {

    const projects = [
        {
            name: 'Run Buddy',
            liveUrl: 'https://jakefay.github.io/run-buddy/',
            description: 'A',
            img: 'https://github.com/JakeFay/run-buddy/blob/main/assets/images/run-buddy-screenshot.png?raw=true',
            repo: 'https://github.com/JakeFay/run-buddy'
        },
        {
            name: 'Work Day Scheduler',
            liveUrl: 'https://jakefay.github.io/Jakes-Work-Day-Scheduler/',
            description: 'B',
            img: 'https://github.com/JakeFay/Jakes-Work-Day-Scheduler/raw/main/assets/WDS-screenshot.jpg',
            repo: 'https://github.com/JakeFay/Jakes-Work-Day-Scheduler'
        },
        {
            name: 'NeXtflix',
            liveUrl: 'https://vielayb.github.io/Group-Project/',
            description: 'C',
            img: 'https://user-images.githubusercontent.com/84299745/132996391-622d406f-e32f-4b14-b3cc-ecb958d40173.png',
            repo: 'https://github.com/vielayb/Group-Project'
        },
        {
            name: 'Weather Dashboard',
            liveUrl: 'https://jakefay.github.io/06-weather-dashboard/',
            description: 'D',
            img: 'https://github.com/JakeFay/06-weather-dashboard/blob/main/assets/images/screen-shot.png?raw=true',
            repo: 'https://github.com/JakeFay/06-weather-dashboard'
        },
        {
            name: 'Taskinator',
            liveUrl: 'https://jakefay.github.io/taskinator/',
            description: 'E',
            img: 'https://github.com/JakeFay/taskinator/blob/main/assets/images/Screen%20Shot%202021-12-19%20at%209.48.28%20PM.png?raw=true',
            repo: 'https://github.com/JakeFay/taskinator'
        },
        {
            name: 'Coming Soon!',
            liveUrl: '',
            description: 'F',
            img: '',
            repo: ''
        }
    ];



    return (
        <div>
            <div className="row row-cols-3">
                {projects.map((project, i) => (
                    <div key={i}>
                        <h1 >{project.name}</h1>
                        <h3 >{project.description}</h3>
                        <img src={project.img} alt={project.name} className="img-thumbnail mx-1"></img>
                        <a href={project.liveUrl}>Deployed link</a>
                        <a href={project.repo}>Repository link</a>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default ProjectList;