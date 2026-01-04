import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="py-16 px-6 text-center">
      <h2 className="font-bold text-3xl text-green-600 mb-10">
        Visit or Contact Us
      </h2>

      <div className="flex flex-col items-center gap-4 text-green-700">
        <div className="flex items-center gap-3">
          <MapPin size={24} />
          <p>9,Ijero Lane ebute metta (west) Lagos</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={24} />
          <p>+234 9015391381</p>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={24} />
          <a href="mailto:dehjitobi0@gmail.com">dehjitobi0@gmail.com</a>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="https://wa.me/2347047017978?text=%F0%9F%92%A1%20Hi%2C%20I%27m%20_________.%0A%0AI%20just%20checked%20out%20LIGHT%20and%20I%20felt%20the%20vibe%20instantly.%20This%20is%20more%20than%20clothing%2C%20and%20I%27m%20ready%20to%20wear%20that%20energy.%20I%20want%20to%20order%20a%20cloth%20that%20matches%20my%20light."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Chat Now
        </a>
      </div>
      <div>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.303973622112!2d3.3588232743106343!3d6.490537823997451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7b2f4f6b8b5%3A0x8e8b4e4e4e4e4e4e!2sIjero%20Lane%2C%20Ebute%20Metta%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1616161616161!5
e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
          width="70%"
          height="450"
          style={{
            border: 0,
            marginTop: "20px",
            paddingTop: "20px",
            marginInline: "auto",
            borderRadius: "8px",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
