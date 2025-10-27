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
  IconBrandWhatsapp,
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

// Use COUNTRIES_DATA for popular countries
const POPULAR_COUNTRIES = [
  {
    id: "1",
    name: "Canada",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fb6688fe8cea59e4ef083_malaysia-image.avif",
    flag: "https://flagcdn.com/w80/ca.png",
  },
  {
    id: "2",
    name: "Germany",
    img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fb70961576beed5d8076f_spain-image.avif",
    flag: "https://flagcdn.com/w80/de.png",
  },
  {
    id: "3",
    name: "Switzerland",
    img: "https://i.pinimg.com/1200x/a2/f0/02/a2f00245db27e12856c1aeafa025970f.jpg",
    flag: "https://flagcdn.com/w80/ch.png",
  },
  {
    id: "4",
    name: "Thailand",
    img: "https://i.pinimg.com/736x/5a/89/2c/5a892c1bc878ff33140e9b2b75327494.jpg",
    flag: "https://flagcdn.com/w80/th.png",
  },
  {
    id: "5",
    name: "Dubai (UAE)",
    img: "https://i.pinimg.com/736x/f6/94/5d/f6945d66cbc6b08800ad3e638dac99bc.jpg",
    flag: "https://flagcdn.com/w80/ae.png",
  },
  {
    id: "6",
    name: "Bulgaria",
    img: "https://i.pinimg.com/1200x/59/e0/8f/59e08fa98338b66b30080924bfb78a89.jpg",
    flag: "https://flagcdn.com/w80/bg.png",
  },
  {
    id: "7",
    name: "Egypt",
    img: "https://i.pinimg.com/1200x/ec/9b/74/ec9b7448b0383c5589bc8c25bc2bf265.jpg",
    flag: "https://flagcdn.com/w80/eg.png",
  },
  {
    id: "8",
    name: "Greece",
    img: "https://i.pinimg.com/1200x/b3/93/81/b3938122aaad4a58428d6fb1b6b6647d.jpg",
    flag: "https://flagcdn.com/w80/gr.png",
  },
  {
    id: "9",
    name: "Hungary",
    img: "https://i.pinimg.com/1200x/80/2c/95/802c953a0ab48480496cad8bc6edb3d7.jpg",
    flag: "https://flagcdn.com/w80/hu.png",
  },
  {
    id: "10",
    name: "Netherlands",
    img: "https://i.pinimg.com/1200x/c4/3c/34/c43c345e3516ef257031da7e56c3d711.jpg",
    flag: "https://flagcdn.com/w80/nl.png",
  },
];

const CONTACT_OPTIONS = [
  {
    id: "1",
    icon: <IconPhone size={20} />,
    label: "Call Us",
    value: "+ 0544455526",
    description: "24/7 Customer Support",
    color: "text-green-600",
    bgColor: "bg-green-100",
    action: "tel:+0544455526",
    type: "phone",
  },
  {
    id: "2",
    icon: <IconBrandWhatsapp size={20} />,
    label: "WhatsApp",
    value: "+ 0544455526",
    description: "Instant messaging",
    color: "text-green-600",
    bgColor: "bg-green-100",
    action:
      "https://wa.me/0544455526?text=Hello%2C%20I%20need%20help%20with%20travel%20insurance",
    type: "whatsapp",
  },
  {
    id: "3",
    icon: <IconMessage size={20} />,
    label: "Live Chat",
    value: "Start Chat",
    description: "Instant assistance",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    action: "#",
    type: "chat",
  },
  {
    id: "4",
    icon: <IconMail size={20} />,
    label: "Email Us",
    value: "sales@visavango.com",
    description: "Response within 2 hours",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    action: "mailto:sales@visavango.com",
    type: "email",
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
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // Filter countries based on search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.trim()) {
      const filtered = POPULAR_COUNTRIES.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchSuggestions(filtered);
      setIsSearchExpanded(true);
    } else {
      setSearchSuggestions([]);
      setIsSearchExpanded(false);
    }
  };

  // Handle country selection from search
  const handleCountrySelect = (selectedCountry) => {
    if (!selectedCountries.includes(selectedCountry)) {
      setSelectedCountries((prev) => [...prev, selectedCountry]);
    }
    setCountry(selectedCountry);
    setSearchValue("");
    setSearchSuggestions([]);
    setIsSearchExpanded(false);
  };

  // Handle popular country selection
  const handlePopularCountrySelect = (countryName) => {
    handleCountrySelect(countryName);
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
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    const timeout = setTimeout(() => {
      setCallModal(true);
    }, 300);

    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    const timeout = setTimeout(() => {
      setCallModal(false);
    }, 500);

    setHoverTimeout(timeout);
  };

  // Handle contact option click
  const handleContactClick = (option) => {
    switch (option.type) {
      case "phone":
        window.location.href = option.action;
        break;
      case "whatsapp":
        window.open(option.action, "_blank");
        break;
      case "email":
        window.location.href = option.action;
        break;
      case "chat":
        console.log("Opening live chat...");
        break;
      default:
        break;
    }
    setCallModal(false);
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
                {CONTACT_OPTIONS.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    onClick={() => handleContactClick(item)}
                  >
                    <div
                      className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center`}
                    >
                      <span className={item.color}>{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <span className={`font-bold ${item.color} text-sm`}>
                        {item.value}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
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

              {/* Search Input with Suggestions */}
              <div className="relative">
                <InputGroup className="rounded-full">
                  <IconTextBox
                    prefix={<IconSearch />}
                    placeholder="Search Country (e.g., Canada, Germany, Thailand)"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPressInSearchBar}
                  />
                </InputGroup>

                {/* Search Suggestions */}
                {isSearchExpanded && searchSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-lg z-40 max-h-60 overflow-y-auto"
                  >
                    {searchSuggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        onClick={() => handleCountrySelect(suggestion.name)}
                      >
                        <img
                          src={suggestion.flag}
                          alt={suggestion.name}
                          className="w-6 h-4 rounded object-cover"
                        />
                        <span className="text-gray-700">{suggestion.name}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Selected Countries Display */}
              {selectedCountries.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCountries.map((countryName, index) => (
                    <div
                      key={index}
                      className="bg-yellow-100 text-[#2B1700] px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      <span className="text-sm">{countryName}</span>
                      <button
                        onClick={() => removeSelectedCountry(countryName)}
                        className="text-[#2B1700] hover:text-yellow-600 cursor-pointer text-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xl text-[#2B1700] font-bold ">
                Popular choices{" "}
                <span className="text-xs text-gray-500 font-normal">
                  (you can add more than one country)
                </span>
              </p>

              {/* 🌍 Horizontal Scroll Carousel */}
              <div className="overflow-x-auto  p-1 scrollbar-hide">
                <div className="flex gap-6 snap-x snap-mandatory px-1 pb-2">
                  {POPULAR_COUNTRIES.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex-shrink-0 snap-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Button
                          onClick={() => handlePopularCountrySelect(item.name)}
                          variant="secondary"
                          className="flex flex-col p-0 w-15 h-15 rounded-full overflow-hidden transition-transform duration-200 relative"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        </Button>
                        <p className="text-xs font-semibold text-center max-w-[80px]">
                          {item.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
