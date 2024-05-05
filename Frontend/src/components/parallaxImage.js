import { Parallax } from 'react-parallax';
import Thailand from '../components/images/travel1.jpg'
import "../Css/parallaxImage.css"

const parallaxImage =() => (
    <Parallax 
    className='thailand-img' 
    bgImage={Thailand} 
    strength={800}
    >
        <div className="travel_companion">
            <div>
                <span>WANDERLUST EXPEDITIONS: YOUR ULTIMATE TRAVEL COMPANION</span>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            </div>
        </div>
    </Parallax>
)

export default parallaxImage