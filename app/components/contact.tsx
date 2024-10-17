import { ArrowDownLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="contact">
        <div className="contact-text-icon-container">
          <div className="text-icon">
            <Image
            className='contact-profile-image'
            src={"/images/shuvo-sarkar-profile.jpg"}
            alt="Shuvo's Profile Picture"
            width={80}
            height={80}></Image>
            <span className='contact-slogan'>Let&apos;s make it</span>
          </div>
          <span className='contact-slogan'>happen!</span>
        </div>
        <div className="contact-line-button-container">
          <hr className='border-0 border-t border-white' />
          <button>Get in touch</button>
          <ArrowDownLeftIcon className="arrow-left h-10 text-white" />
        </div>
        <div className="contact-info-container">
          <div className="contact-button-wide">
            <a href="mailto:shuvo.sarkar.official@gmail.com" className="email-address">shuvo.sarkar.official@gmail.com</a>
          </div>
          <div className="contact-button-wide">
            <a href="tel:+8801701068330" className="phone-number">+880 1701 068330</a>
          </div>
        </div>
      </section>
  );
}