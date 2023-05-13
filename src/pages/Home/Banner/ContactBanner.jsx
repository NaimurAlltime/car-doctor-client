import { FaCalendarAlt, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div className="hero bg-slate-950 rounded-xl my-9">
      <div className="hero-content text-neutral-content">
        <div className="md:flex gap-12">
          <div className="flex items-center gap-4 py-9">
            <p>
              <FaCalendarAlt className="text-2xl" />
            </p>
            <div>
              <p>We are open monday-friday</p>
              <h5 className="text-xl">7:00 am - 9:00 pm</h5>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>
              <FaPhoneAlt className="text-2xl" />
            </p>
            <div>
              <p>Have a question?</p>
              <h5 className="text-xl">+2546 251 2658</h5>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>
              <FaSearchLocation className="text-2xl" />
            </p>
            <div>
              <p>Need a repair? our address</p>
              <h5 className="text-xl">Liza Street, New York</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
