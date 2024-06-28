import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css';

// Import images
import hangmanImg from './passets/hangman.png';
import netflix from './passets/netflix.png';
import snakeGame from './passets/snakeGame.png';
import tictactoe from './passets/tictactoe.png';


const data = [
    {
        title: 'HangMan',
        img: hangmanImg,
        description: 'Python HangMan Game',
        button: 'See on Github',
        url: "https://github.com/FelipeFJBrito/Python_Projects/tree/main/Hangman"
    },
    {
        title: 'Netflix',
        img: netflix, // Use imported image variable
        description: 'UI Netflix clone',
        button: 'See on Github',
        url: "https://github.com/FelipeFJBrito/netflix-website"
    },
    {
        title: 'Tic Tac Toe',
        img: tictactoe, // Use imported image variable
        description: 'Python Tic Tac Toe Game',
        button: 'See on Github',
        url: "https://github.com/FelipeFJBrito/Python_Projects/tree/main/TIC_TAC_TOE"
    },
    {
        title: 'Snake Game',
        img: snakeGame, // Use imported image variable or adjust path if needed
        description: 'Python Snake Game',
        button: 'See on Github',
        url: "https://github.com/FelipeFJBrito/Python_Projects/tree/main/Snake_Game"
    },
];

const openWindow = (url) => {
    window.open(url, '_blank');
}

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="projects-wrapper">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-subtitle-container">
                <h2 className="projects-subtitle"></h2>
            </div>
            <div className="projects-container">
                <div className="cards">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className="card">
                                <img className="project-img" src={item.img} alt={item.title} />
                                <div className="card-body">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button className="project-primary-btn" onClick={() => openWindow(item.url)}>
                                        {item.button}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Projects;
