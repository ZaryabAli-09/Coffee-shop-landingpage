import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#home" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer
      //   style={{
      //     backgroundImage: `url(${FooterBg.src})`,
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover",
      //   }}
      className="text-white relative z-10"
    >
      {/* Overlay */}
      <div className="bg-primary min-h-[400px]">
        <div className="px-10 md:px-20 mx-auto grid md:grid-cols-3 gap-8 py-12 ">
          {/* Company Info */}
          <div className="flex flex-col justify-between">
            <a
              href="#"
              className="font-cursive text-3xl sm:text-4xl font-bold tracking-wide hover:text-primary transition"
            >
              Caffio
            </a>
            <p className="mt-4 text-gray-200">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
            <a
              href="https://www.youtube.com/channel/UCxbOBOkG_ZTUWFcG8obiA9g"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-black/50 font-bold py-2 px-4 rounded-full text-sm hover:bg-[#5a3a25] transition"
            >
              Visit our YouTube Channel
            </a>
          </div>

          {/* Links Section */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Important Links */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Important Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="hover:text-primary transition transform hover:translate-x-1"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="hover:text-primary transition transform hover:translate-x-1"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Socials */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Address</h2>
              <p>New city phase 2 A block, city center wah cantt.</p>
              <p className="mt-2">+91 1234567890</p>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-primary transition"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-primary transition"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full hover:bg-primary transition"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
