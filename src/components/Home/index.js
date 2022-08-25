import { Link } from 'react-router-dom'
import './index.scss';

export default function Home() {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm
                    Gabriel 
                    <br />
                    web developer
                </h1>
                <h2> JavaScript / Ruby </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}