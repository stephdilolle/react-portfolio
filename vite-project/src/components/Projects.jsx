import React from 'react';
import ProjectCard from './ProjectCards';
import '../style.css';

const projects = [
    {
        title: 'Blog',
        link: 'https://stephdilolle.github.io/blog/',
        image: 'images/blog.PNG',
        description: 'A two-page blog that allows the user to enter a blog post that will then be saved to local storage and available to view on the next page. Both pages also include a toggle between light and dark modes.',
        technologies: 'jQuery UI, Bootstrap'
    },
    {
        title: 'Interactive Brewery Map',
        link: 'https://zachfrosty4986.github.io/interactive-brewery-map/',
        image: 'images/brewsters.PNG',
        description: 'An interactive map showing local brewery information in the users desired area.',
        technologies: 'OpenStreetMap API, Leaflet, Open Brewery DB API, Materialize CSS'
    },
    {
        title: 'ReadMe Generator',
        link: 'https://drive.google.com/file/d/1erOxS2jTfdmExgOqyqVxHKsRITY8FYkT/view',
        image: 'images/readme.PNG',
        description: 'A shortcut to creating a high quality README file in VS Code',
        technologies: 'Node.js'
    },
    {
        title: 'Logo Generator',
        link: 'https://drive.google.com/file/d/17SP3s97XsnGcax81e01gOHHt_quXBT1S/view" target="_blank',
        image: 'images/logo_example.PNG',
        description: 'A simple way to generate a basic logo in VS Code',
        technologies: 'Node.js, Jest'
    },
    {
        title: 'SQL Employee Tracker',
        link: 'https://www.loom.com/share/b4ffa969effb4c688c858260d58739ce?sid=37d4ee4a-d786-4383-ba18-5c9bf5c3b2d8',
        image: 'images/employees.PNG',
        description: 'Created an employee database that lists all departments, roles, and employees at a company.',
        technologies: 'Node.js, PostgreSQL'
    },
    {
        title: 'eCommerce Back-end',
        link: 'https://www.loom.com/share/861a812e4e9445e28d36c2456c9f7e81?sid=76d33547-c84d-4125-a365-435882368d62',
        image: 'images/ecommerce.PNG',
        description: 'A back-end for an eCommerce operation involving route-testing',
        technologies: 'Node.js, PostgreSQL, Insomnia'
    },
    {
        title: 'Community Connect',
        link: 'https://community-connect-img3.onrender.com/',
        image: 'images/cconnect.png',
        description: 'A full-service platform designed to foster collaboration and sharing among non-profit organizations.',
        technologies: 'Node.js, Express.js, Handlebars, Bcrypt, dotenv, PostgreSQL, Sequelize'
    },
    {
        title: 'Note Taker',
        link: 'https://note-taker-6l8q.onrender.com/',
        image: 'images/notetaker.PNG',
        description: 'An application for a user to be able to write and save notes.',
        technologies: 'Node.js, Express.js'
    },
    {
        title: 'Gist: Regular Expressions',
        link: 'https://gist.github.com/stephdilolle/c25cead102a7945f05f95e1fe3fe3759',
        image: 'images/regex.PNG',
        description: 'An explanation and tutorial on how to use regular expressions (Regex)',
        technologies: 'Gist'
    },
    {
        title: 'The Book Nook',
        link: 'https://the-book-nook-8cgy.onrender.com/',
        image: 'images/booknook.png',
        description: 'An online book store where users can browse and search for books',
        technologies: 'Google Books API, React, Radix UI, Vite, MongoDB, JWT, Apollo, GraphQL, Express.js, Node.js, bcrypt, dotenv'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="card-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
