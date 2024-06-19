import React from 'react'
import john from './images/hero.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Design épuré</h2>
                    <span className='line'></span>
                    <p>La construction des cuisines modernes mise sur l'ergonomie, l'optimisation de l'espace, et l'intégration de technologies avancées.
                    Matériaux durables comme le quartz et l'inox, et appareils intelligents facilitent la cuisine. Rangement efficace et design épuré sont essentiels.</p>
                    <p>Cuisine Frioui</p>
                    <button className='button'>Savoir plus</button>
                </div>
            </div>
        </div>
    )
}

export default About
