import React from 'react'

export default function HomePage() {
    return (
        <div className='homePage bodyHeight'>
            <div className='d-flex align-items-center flex-column'>
                <h1>Hello Summoner!</h1>
            </div>
            <div className="homePage--content">
                <p>Are you a fan of League of Legends? Then you'll love this! Here you'll be able to see ALL champions in the universe of League of Legends, you'll also be able to click on a champion, see it's stats, name and description and, if you want, be able to add it to your collection.</p>
            </div>
            <div className='homePage--objectives'>
                The objectives for this challenge is:
                <p> - [✓] Plan the project, functionalities, and target audience [4 / 20] </p>
                <p> - [✓] Use Hooks instead of Classes [4 / 20]</p>
                <p> - [✓] Use an API to show data, using useEffects, on the App [3 / 20]</p>
                <p> - [✓] Implement React-Redux for the global state [6 / 20]</p>
                <p> - [✓] Use React-Router to navigate between components [3 / 20]</p>
            </div>
        </div>
    )
}
