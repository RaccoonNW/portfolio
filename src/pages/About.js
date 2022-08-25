import headshot from '/Users/gabrielshalitmontagne/Desktop/PersonalPage/personal-site/src/project_images/headshot.jpg'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <text>Word word word</text>
            <div className='headshot'>
                <img src={headshot} alt="Headshot" />
            </div>
        </div>
    )
}