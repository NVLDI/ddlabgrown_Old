import "./WebpageTopbar.css"
import { Link } from 'react-router-dom'

export default function WebpageTopbar() {
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
        <div class="vl"></div>
      <Link to="/adminlogin" className='link'>
          <div className="topbarIconsContainer">
            Admin Login
          </div>
      </Link>
      <div class="vl"></div>
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