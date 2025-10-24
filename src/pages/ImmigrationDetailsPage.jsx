import React from "react";
import { motion } from "framer-motion";
import { CardContainer } from "../components/ui/CardContainer";
import { useNavigate, useParams } from "react-router-dom";
import { IMMIGRATION_SERVICES } from "../data/data";
import { List } from "../components/ui/List";
import Button from "../components/ui/button/Button";

const Agents = [
  {
    id: "1",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bd221b2004191e6f7295_agent-05.avif",
    name: "Emily Johnson",
    role: "Study Abroad Consultant",
  },
  {
    id: "2",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bc1b57ee7224924a81e1_agent-01.avif",
    name: "Sarah Mitchell",
    role: "Immigration Specialist",
  },
];

export const ImmigrationDetailsPage = () => {
  const { id } = useParams();
  const  navigate  = useNavigate();
  const IMMIGRATION = IMMIGRATION_SERVICES.find((c) => c.id === id);

  if (!IMMIGRATION) {
    return <div className="p-10 text-center text-xl">Service not found</div>;
  }
  

  return (
    <div className="px-4 sm:px-10 py-5 w-full mx-auto space-y-10">
      {/* === Header Section === */}
      <CardContainer className="relative p-0 flex items-center w-full h-64 sm:h-[500px] rounded-3xl overflow-hidden shadow-lg">
        <motion.img
          src={IMMIGRATION.img}
          alt={IMMIGRATION.header}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-6xl font-bold text-white text-center"
          >
            {IMMIGRATION.header}
          </motion.h2>
        </div>
      </CardContainer>

      {/* === Main Section === */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* === Left Column === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10"
        >
          {/* === Overview === */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1700]">
              Overview
            </h2>
            {IMMIGRATION.overview.map((text, i) => (
              <p key={i} className="text-[#2B1700] text-lg sm:text-xl leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* === How We Help / Why Choose === */}
          <List
            data={IMMIGRATION.details}
            uniqueKey="head"
            className="flex flex-col gap-10"
            render={(item) => (
              <>
                {/* Section Title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-5"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2B1700]">
                    {item.head}
                  </h2>
                  <ul className="list-disc list-inside text-[#2B1700] space-y-2">
                    {item.points.map((point, index) => (
                      <li key={index} className="text-base sm:text-lg font-medium">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Images Grid */}
                {item.imgs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {item.imgs.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt={`${item?.head}-image-${i}`}
                        className="w-full rounded-xl shadow-md hover:scale-105 transition-transform duration-300 object-cover"
                        whileHover={{ scale: 1.05 }}
                      />
                    ))}
                  </div>
                )}

                {/* Why Choose Section */}
                {item.whyChoose && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-5 mt-8"
                  >
                    <h2 className="text-3xl font-extrabold text-[#2B1700]">
                      {item.whyChoose.head}
                    </h2>
                    <ul className="list-disc list-inside text-[#2B1700] space-y-2">
                      {item.whyChoose.points.map((point, index) => (
                        <li key={index} className="text-base sm:text-lg font-medium">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </>
            )}
          />
        </motion.div>

        {/* === Right Column (Sticky Sidebar) === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3"
        >
          <div className="bg-[#2B1700] text-white p-6 rounded-2xl shadow-lg sticky top-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">
              Our Agents Will Assist You
            </h2>

            <List
              data={Agents}
              uniqueKey="id"
              className="flex flex-col gap-6"
              render={(item) => (
                <div className="flex items-center gap-4">
                  <img
                    src={item?.img}
                    alt={item?.name}
                    className="w-20 h-20 rounded-full border border-gray-300 hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{item?.name}</h3>
                    <p className="text-sm font-medium">{item?.role}</p>
                  </div>
                </div>
              )}
            />

            {/* === Book a Call Button === */}
            <div className="flex justify-center mt-6">
              <Button
              onClick={()=>navigate('/contact')}
                variant="secondary"
                size="md"
                className="bg-white text-[#2B1700] w-fulldat font-semibold px-6 py-3 rounded-xl hover:bg-[#F1E7D0] transition-all duration-300"
              >
                Book a Call
              </Button>
            </div>

            <hr className="my-6 border-gray-400/30" />

            {/* === Office Time === */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">Office Time</h3>
              <p className="text-sm">
                Mon–Sat: 9 AM – 6 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
