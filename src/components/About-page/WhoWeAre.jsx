import React from "react";
import { motion } from "framer-motion";

export const WhoWeAre = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        {/* ---- Left Image / Illustration ---- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <img
            src="/imgs/6778d61303bfc2abf8a13ab9_vector-01-p-500.png"
            alt="Globe Illustration"
            className="w-full max-w-md mx-auto opacity-90"
          />
        </motion.div>

        {/* ---- Right Content ---- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-gray-700"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who we are
          </h2>

          <p className="leading-relaxed mb-4 text-base lg:text-lg">
            We are a dedicated visa and immigration agency committed to helping
            individuals and families achieve their dreams of living, working,
            and studying abroad. With years of experience and a team of experts,
            we simplify the complexities of immigration processes to ensure a
            smooth and successful journey for our clients.
          </p>

          <p className="leading-relaxed mb-4 font-medium">
            Our team of experienced professionals offers personalized services
            to ensure your travel documentation is handled efficiently and
            accurately.
          </p>

          <p className="leading-relaxed mb-8 text-base lg:text-lg">
            From visa assistance to flight bookings, accommodation arrangements,
            and more, we make your international travel experience stress-free
            and enjoyable.
          </p>

          {/* ---- Mission & Vision ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                Our mission
              </h3>
              <p className="text-[#2B1700]">
                Providing tailored visa and immigration solutions to help people
                achieve their global aspirations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                Our vision
              </h3>
              <p className="text-[#2B1700]">
                To be a trusted partner, guiding individuals and families toward
                a brighter future abroad.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
