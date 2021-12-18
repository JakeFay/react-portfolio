import React from 'react'; 
//import Modal from '../Modal';

const ProjectList = () => {

    const projects = [
        {
            name: 'Grocery aisle',
            liveUrl: '', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            img: 'https://github.com/JakeFay/jakes-portfolio/blob/main/assets/images/profile-pic.jpg?raw=true',
            repo: '',
        },
        {
            name: 'Grocery booth',

            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }

    ];



    return (
        <div>
            <div className="flex-row">
                {projects.map((project, i) => (
                    <div>
                        <h1>{project.name}</h1>
                    </div>
                    // <img
                    // src={require(`../../assets/small/${category}/${i}.jpg`).default}
                    // alt={image.name}
                    // className="img-thumbnail mx-1"
                    // key={image.name}
                    // />

                ))}
            </div>
        </div>
    )
}

export default ProjectList;