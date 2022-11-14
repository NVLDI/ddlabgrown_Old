import "./WepageTopbar.css"
import { Link } from 'react-router-dom'

export default function WepageTopbar() {
  return (
    <div className="Fronttopbar">
    <div className="FronttopbarWrapper">
      <div className="FronttopLeft"><sapn className="Frontlogo">DD Lab Grown Diamond</sapn>
      </div>
      <div className="FronttopRight">
      <Link to="/adminlogin" className='link'>
          <div className="FronttopbarIconsContainer">
            Admin Login
          </div>
      </Link>
      <Link to="/distributorlogin" className='link'>
          <div className="FronttopbarIconsContainer">
              Distributor Login
          </div>
      </Link>
      </div>
    </div>
  </div>
  )
}
