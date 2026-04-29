import Image from "next/image";
import * as motion from "motion/react-client";

const AboutPage = () => {
  return (
    <div className="h-fit w-full px-4 sm:px-8 lg:px-20 py-10">
      {/* Section Title */}
      <motion.div
        className="flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grow border-t border-black"></div>
        <span
          className="px-4 text-sm sm:text-base text-[#1d3557] tracking-wide whitespace-nowrap"
          id="verticals"
        >
          ABOUT US
        </span>
        <div className="grow border-t border-black"></div>
      </motion.div>

      {/* Main Content Block */}
      <div className="flex flex-col gap-10">
        {/* Logo */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/footer/dj_logo.jpg"
            alt="dj logo"
            width={180}
            height={180}
            className="rounded-md object-contain"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 space-y-4 max-w-4xl mx-auto px-2 sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            <p
              className="font-semibold text-center text-[#1d3557] text-base sm:text-lg lg:text-xl"
              key="title"
            >
              Welcome to DJ Realtors - Your Trusted Real Estate Partner
            </p>,
            <p className="text-center sm:text-left" key="intro">
              At DJ Realtors, we offer end-to-end real estate solutions across
              residential, commercial, industrial, and agricultural segments.
              Whether you&apos;re buying, investing, or developing, we provide
              expert guidance and tailored strategies to help you succeed.
            </p>,
            <p
              className="font-semibold text-[#1d3557] text-center sm:text-left"
              key="why"
            >
              Why Choose Us?
            </p>,
            <ul className="list-disc pl-5 space-y-2 text-left" key="list">
              <li>
                <b>Expertise You Can Trust - </b> Transparent, reliable, and
                backed by deep industry knowledge.
              </li>
              <li>
                <b>Client-First Approach - </b> Personalized services for retail
                and institutional clients alike.
              </li>
              <li>
                <b>Innovative Marketing - </b> Modern strategies to maximize
                property value.
              </li>
              <li>
                <b>All-in-One Solutions - </b> From consultation to closing, we
                handle it all.
              </li>
            </ul>,
            <p className="italic text-center sm:text-left" key="footer">
              Let&apos;s build your vision, together. Contact us today.
            </p>,
          ].map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            className="bg-[#2C7096] text-white rounded-lg p-6 shadow-md"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-3 text-base sm:text-lg lg:text-xl">
              OUR VISION
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-light">
              We aspire to be an innovative and reliable organisation, providing
              one step solution in real estate services
            </p>
          </motion.div>

          <motion.div
            className="bg-[#A4CD39] text-white rounded-lg p-6 shadow-md"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-3 text-base sm:text-lg lg:text-xl">
              OUR MISSION
            </h3>
            <p className="text-sm sm:text-base lg:text-lg font-light">
              To attain 100% customer satisfaction by providing excellent
              services beyond expectation in real estate selling, buying and
              leasing.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
