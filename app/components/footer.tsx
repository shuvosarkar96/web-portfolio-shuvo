import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section className="footer">

      <div className="version-time">
        <div className="version footer-container">
          <h5 className="title">Version</h5>
          <p className="version subtitle">2024 © Edition</p>
        </div>
        <div className="time footer-container">
          <h5 className="title">Local Time</h5>
          <p className="time subtitle">10:00 AM GMT+6</p>
        </div>
      </div>

      <div className="social-network">
        <div className="title">Socials</div>
        <div className="social-networks">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>

    </section>
  );
}
