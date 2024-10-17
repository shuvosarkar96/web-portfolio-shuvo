import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section className="footer">
      <div className="version-time-container">
        <div className="version-container">
          <div className="title">Version</div>
          <div className="version">
            <span>2024</span>
            <span>
              <FontAwesomeIcon width={14} icon={faCopyright} />
            </span>
            <span>Edition</span>
          </div>
        </div>
        <div className="time-container">
          <div className="title">Local Time</div>
          <div className="time">10:00 AM GMT+6</div>
        </div>
      </div>
      <div className="social-network-container">
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
