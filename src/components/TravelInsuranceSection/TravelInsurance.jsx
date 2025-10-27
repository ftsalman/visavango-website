import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { List } from "../ui/List";
import Button from "../ui/button/Button";
import {
  IconArrowRight,
  IconHelp,
  IconPlus,
  IconSearch,
  IconPhone,
  IconMessage,
  IconMail,
} from "@tabler/icons-react";
import { CardContainer } from "../ui/CardContainer";
import { InputGroup } from "../ui/InputGroup";
import { IconTextBox } from "../ui/IconTextBox";
import { Card } from "../ui/Card";
import { TbHeadset } from "react-icons/tb";

const INSURANCE_TYPE = [
  {
    id: "1",
    icon: "🩺",
    label: "Medical emergencies",
    bgColor: "#E4FDE1",
  },
  {
    id: "2",
    icon: "✈️",
    label: "Flight delays or cancellations",
    bgColor: "#F69697",
  },
  {
    id: "3",
    icon: "🧳",
    label: "Lost baggage & passport",
    bgColor: "#FCDDEC",
  },
  {
    id: "4",
    icon: "🌍",
    label: "Theft or personal loss of belongings",
    bgColor: "#D9ECFF",
  },
];

const POPULAR_COUNTRIES = [
  {
    id: "1",
    name: "Schengen",
    img: "https://i.pinimg.com/736x/15/a7/54/15a754cee746effb5e512fef2da64100.jpg",
  },
  {
    id: "2",
    name: "Spain",
    img: "https://i.pinimg.com/736x/37/91/2f/37912f235cc7189c2cd58e4d4503757d.jpg",
  },
  {
    id: "3",
    name: "Egypt",
    img: "https://i.pinimg.com/736x/59/ab/38/59ab38925f903978dc8fe5acac97446f.jpg",
  },
  {
    id: "4",
    name: "United Arab Emirates",
    img: "https://i.pinimg.com/736x/bf/4f/46/bf4f46488641b4b64b642a9cce5d4fd0.jpg",
  },
  {
    id: "5",
    name: "Netherlands",
    img: "https://i.pinimg.com/1200x/1b/4e/6d/1b4e6d52fa52100a2a0670e59f632bcb.jpg",
  },
];

const CONTACT_OPTIONS = [
  {
    icon: <IconPhone size={20} />,
    label: "Call Us",
    value: "+ 0544455526",
    description: "24/7 Customer Support",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: <IconMessage size={20} />,
    label: "Live Chat",
    value: "Start Chat",
    description: "Instant assistance",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: <IconMail size={20} />,
    label: "Email Us",
    value: "sales@visavango.com",
    description: "Response within 2 hours",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export const TravelInsurance = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [callModal, setCallModal] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Handle country selection from search
  const handleCountrySelect = (selected) => {
    setCountry(selected);
    setIsSearchExpanded(false);
  };

  // Handle popular country selection
  const handlePopularCountrySelect = (countryName) => {
    if (!selectedCountries.includes(countryName)) {
      setSelectedCountries((prev) => [...prev, countryName]);
    }
    setCountry(countryName);
  };

  // Handle Enter key in search bar
  const handleKeyPressInSearchBar = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      handleCountrySelect(searchValue.trim());
    }
  };

  // Handle date changes
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Handle traveller count
  const handleAddTraveller = () => {
    setTravellers((prev) => prev + 1);
  };

  const handleRemoveTraveller = () => {
    if (travellers > 1) {
      setTravellers((prev) => prev - 1);
    }
  };

  // Hover functions for modal
  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    // Set timeout to show modal after 300ms
    const timeout = setTimeout(() => {
      setCallModal(true);
    }, 300);

    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    // Clear the show timeout if mouse leaves quickly
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    // Set timeout to hide modal after 500ms (gives user time to move to modal)
    const timeout = setTimeout(() => {
      setCallModal(false);
    }, 500);

    setHoverTimeout(timeout);
  };

  // Handle explore plans - prepare data for navigation
  const handleExplorePlans = () => {
    const travelData = {
      countries: selectedCountries.length > 0 ? selectedCountries : [country],
      startDate,
      endDate,
      travellers,
      selectedCountries,
    };

    console.log("Travel Data:", travelData);
  };

  // Remove selected country
  const removeSelectedCountry = (countryToRemove) => {
    setSelectedCountries((prev) =>
      prev.filter((country) => country !== countryToRemove)
    );
  };

  return (
    <div className="relative px-6 sm:px-10 lg:px-24 py-16 bg-gradient-to-b from-[#FFE6B3]/40 via-white to-white text-gray-900">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Travel Insurance</h2>

        {/* Call Us Button with Hover */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            variant="secondary"
            className="border-none shadow-none text-indigo-600 text-lg cursor-pointer hover:underline transition-colors duration-200"
          >
            <TbHeadset />
            Call Us
          </Button>

          {/* Call Modal */}

          {callModal && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 right-0 w-80 bg-white shadow-xl rounded-2xl border border-gray-200 z-50 p-6"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TbHeadset className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Need Help?
                </h3>
                <p className="text-sm text-gray-600">
                  We're here to assist you 24/7
                </p>
              </div>

              <div className="space-y-3">
                <List
                  data={CONTACT_OPTIONS}
                  uniqueKey="id"
                  className=" flex flex-col"
                  render={(item, i) => (
                    <>
                      <div key={i} className=" flex  items-center  gap-2">
                        <div
                          className={`w-10 h-10 ${item?.bgColor} rounded-full flex items-center justify-center mr-3`}
                        >
                          <span className={item?.color}>{item?.icon}</span>
                        </div>
                        <div>
                          <p>{item?.label}</p>
                          <span className={`font-bold ${item?.color}`}>
                            {item?.value} 
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                />
               
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Average wait time:{" "}
                  <span className="font-semibold">{"< 2 mins"}</span>
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4">
            Why smart travellers choose insurance?
          </h3>

          <List
            data={INSURANCE_TYPE}
            uniqueKey="id"
            className="flex flex-col space-y-4"
            render={(item) => (
              <div className="flex items-center gap-3">
                <span
                  style={{ backgroundColor: item.bgColor }}
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-lg"
                >
                  {item.icon}
                </span>
                <p className="text-[#2B1700] font-extrabold">{item.label}</p>
              </div>
            )}
          />
        </motion.div>

        {/* Right Form Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <CardContainer className="bg-white shadow-md border border-gray-200 p-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold">
                Where are you travelling to?
              </h2>

              {/* Search Input */}
              <InputGroup className="rounded-full">
                <IconTextBox
                  prefix={<IconSearch />}
                  placeholder="Search Country"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyPress={handleKeyPressInSearchBar}
                />
              </InputGroup>

              {/* Selected Countries Display */}
              {selectedCountries.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCountries.map((countryName, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      <span className="text-sm">{countryName}</span>
                      <button
                        onClick={() => removeSelectedCountry(countryName)}
                        className="text-blue-600 hover:text-blue-800 text-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xl text-[#2B1700] font-bold">
                Popular choices{" "}
                <span className="text-xs text-gray-500 font-normal">
                  (you can add more than one country)
                </span>
              </p>

              <div>
                <List
                  data={POPULAR_COUNTRIES}
                  uniqueKey="id"
                  className="flex items-center flex-wrap gap-4"
                  render={(item) => (
                    <div className="flex flex-col items-center gap-2">
                      <Button
                        onClick={() => handlePopularCountrySelect(item.name)}
                        variant="secondary"
                        className="flex flex-col p-0 w-16 h-16 rounded-full overflow-hidden hover:scale-105 transition-transform duration-200"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </Button>
                      <p className="text-xs font-semibold text-center max-w-[80px]">
                        {item.name}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
          </CardContainer>

          {/* Date picker */}
          <CardContainer className="border-none p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-none border border-gray-200">
              <InputGroup>
                <IconTextBox
                  prefix={"📆"}
                  type="date"
                  placeholder="Start Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </InputGroup>
            </Card>

            <Card className="hover:shadow-none border border-gray-200">
              <InputGroup>
                <IconTextBox
                  prefix={"📆"}
                  type="date"
                  placeholder="End Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </InputGroup>
            </Card>
          </CardContainer>

          {/* Travellers count */}
          <Card className="hover:shadow-none border border-gray-200">
            <div className="flex items-center justify-between p-4">
              <span className="font-extrabold">
                👨‍👩‍👦 {travellers} Traveller(s)
              </span>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleRemoveTraveller}
                  variant="secondary"
                  size="sm"
                  className="border-none shadow-none text-xl text-indigo-600 font-bold w-8 h-8 flex items-center justify-center"
                  disabled={travellers <= 1}
                >
                  −
                </Button>
                <Button
                  onClick={handleAddTraveller}
                  variant="secondary"
                  size="md"
                  className="border-none shadow-none text-indigo-600 font-bold"
                >
                  <IconPlus size={20} />
                  Add travellers
                </Button>
              </div>
            </div>
          </Card>

          <Link
            to="/insurance-plan"
            onClick={handleExplorePlans}
            state={{
              countries:
                selectedCountries.length > 0 ? selectedCountries : [country],
              startDate,
              endDate,
              travellers,
            }}
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-full bg-[#2B1700] hover:bg-[#3a2400] text-white font-extrabold rounded-xl py-4 transition-colors duration-200"
              disabled={!country && selectedCountries.length === 0}
            >
              Explore Plans
              <IconArrowRight />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
