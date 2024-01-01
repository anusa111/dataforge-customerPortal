import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const ContactDetail = () => {
  const contact_info = [
    {
      icons: <FaFacebookF size={18} />,
      title: "facebook.com/thewatchsnepal",
    },
    {
      icons: <FaPhoneAlt size={18} />,
      title: "Refer us and Take 5% cash from us.",
    },
    {
      icons: <FaInstagram size={18} />,
      title: "instagram.com/watch.nepal",
    },

    {
      icons: <FaPhoneAlt size={18} />,
      title: "Get 5% off on Next Purchase",
    },
  ];
  return (
    <div className="component-padding contact-detail-container">
      <div>
        <div style={{ fontSize: "20px" }}>Find us at:</div>
      </div>
      <div className="contact-detail-inner">
        <div>
          <div className="flex-layout contact-detail-main">
            <div className="icon">
              <MdOutlineWatchLater size={18} />
            </div>
            <a href="#">watchesnepal.com</a>
          </div>
        </div>
        <div className="contact-detail-section">
          {contact_info.map((data, index) => {
            return (
              <div key={index} className="flex-layout contact-detail-main">
                <div className="icon">
                  <div style={{ transform: "translate(0px,2px)" }}>
                    {data.icons}
                  </div>
                </div>
                <a href="#">{data.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
