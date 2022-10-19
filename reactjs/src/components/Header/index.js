import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="team-container">
      <h1 className="team-title">Team Projects</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Deepak
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/mahesh">
            Mahesh
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/akhil">
            Akhil
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/sandeep">
            Sandeep
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/ram">
            Ram
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/srinu">
            Srinu
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
