import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br />I'm
            <img src={LogoTitle} alt="developer" />
            jay
            <br />
            <h2>Frontend Web Developer / React.js Developer</h2>
            <Link to='/contect' className='flat-button'>CONTACT ME</Link>
            </h1>
        </div>
    </div>
  )
}

export default Home