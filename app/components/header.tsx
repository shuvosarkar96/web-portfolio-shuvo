import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <section className="header">
      <div className="branding">
        <span className="icon">
          <FontAwesomeIcon width={15} icon={faCopyright} />
        </span>
        <span className="brand-text">Code by Shuvo</span>
      </div>
      <nav className='nav-links'>
        <a href="" className="nav-item">Work</a>
        <a href="" className="nav-item">About</a>
        <a href="" className="nav-item">Contact</a>
      </nav>
    </section>
  );
}