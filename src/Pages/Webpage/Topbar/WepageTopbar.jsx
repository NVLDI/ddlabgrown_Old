import "./WepageTopbar.css"
import { Link } from 'react-router-dom'

export default function WepageTopbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft"><sapn className="logo">DD Lab Grown Diamond</sapn>
      </div>
      <div className="topRight">
      <Link to="/adminlogin" className='link'>
          <div className="topbarIconsContainer">
            Admin Login
          </div>
      </Link>
      <Link to="/distributorlogin" className='link'>
          <div className="topbarIconsContainer">
              D.Login
          </div>
      </Link>
      </div>
    </div>
  </div>
  )
}
