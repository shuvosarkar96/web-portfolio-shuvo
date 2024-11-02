import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section className="footer">

      <div className="version-time">
        <div className="">
          <h5 className="heading">Version</h5>
          <p className="">2024 © Edition</p>
        </div>
        <div className="">
          <h5 className="heading">Local Time</h5>
          <p className="">10:00 AM GMT+6</p>
        </div>
      </div>

      <div className="">
        <div className="heading">Socials</div>
        <div className="">
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Instagram</a>
          <a>Facebook</a>
        </div>
      </div>

    </section>
  );
}
