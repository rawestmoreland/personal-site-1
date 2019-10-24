import React from 'react'
import Featured from './featured'
import kegTrackImage from '../../images/kegtrackPortfolio.svg'
import sbbImage from '../../images/sbbShot.png'
import weatherImage from '../../images/weatherShot.png'

const Work = props => {
    return (
        <section id="work" className="work-section">
            <h1>
                Some of My Work
            </h1>
            <Featured title={"Keg Track App"} description={"Keg Track is an app that helps you track the volume of your homebrew kegs. Using the built-in accelerometer of your device, Keg Track times how long your tap handle has been tilted and calculates the beer volume dispensed."} tech={["Flutter", "Firebase"]} image={kegTrackImage} link={"https://apps.apple.com/us/app/keg-track/id1458783381?ls=1"}/>
            <Featured title={"Metar App"} description={"A METAR web app that utilizes the checkWX API to initially acquire the METAR in your current location. You can also search for METARs, TAFs and station data anywhere in the world."} tech={["React.js", "CheckWX API"]} image={weatherImage} link={"https://www.richardawestmoreland.com/avwx"}/>
            <Featured title={"Small Batch Brü Blog"} description={"A homebrewing blog that features recipes, brewing techniques and beer tasting notes. A custom WordPress theme."} tech={["Wordpress", "HTML5/CSS3"]} image={sbbImage} link={"http://www.smallbatchbru.com"}/>
            {/* <ProjectTiles title={"Keg Track App"} description={"A mobile app that helps monitor your homebrew keg volumes. Uses the device's acclerometer to measure whether or not the tap handle is tilted while pouring a pint"} /> */}
        </section>
    )
}

export default Work