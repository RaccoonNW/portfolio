import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

export default function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ', 'G', 'a', 'b', 'r', 'i', 'e', 'l']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}

                />
                <br />
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}

                />
                </h1>
                <h2> JavaScript / Ruby </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}