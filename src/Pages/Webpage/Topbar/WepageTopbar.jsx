import "./WepageTopbar.css"
import { Link } from 'react-router-dom'

export default function WepageTopbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="logo"><span className="Frontlogo">DD Lab Grown Diamond</span>
      </div>
      <div className="topRight">
      <Link to="/Error" className='link'>
      <div className="topbarIconsContainer">
            Product
          </div>
        </Link>
      <Link to="/adminlogin" className='link'>
          <div className="topbarIconsContainer">
            Admin Login
          </div>
      </Link>
      <Link to="/distributorlogin" className='link'>
          <div className="topbarIconsContainer">
              Distributor Login
          </div>
      </Link>
      </div>
    </div>
  </div>
  )
}
