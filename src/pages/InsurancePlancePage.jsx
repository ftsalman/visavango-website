import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconCheck,
  IconStar,
  IconShield,
  IconClock,
  IconWorld,
  IconPlaneTilt,
  IconMedicalCross,
  IconLuggage,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Button from "../components/ui/button/Button";
import { Card } from "../components/ui/Card";

const INSURANCE_PLANS = [
  {
    id: "1",
    name: "Basic Plan",
    price: "$49",
    period: "per trip",
    coverage: "Essential coverage for peace of mind",
    features: [
      "Medical expenses up to $100,000",
      "Trip cancellation up to $5,000",
      "Lost baggage up to $1,000",
      "24/7 emergency assistance",
      "Personal accident coverage",
      "Emergency dental treatment",
      "Travel document loss",
    ],
    popular: false,
    color: "blue",
    icon: <IconShield size={24} className="text-blue-600" />,
    bestFor: "Short trips, budget travelers",
  },
  {
    id: "2",
    name: "Standard Plan",
    price: "$79",
    period: "per trip",
    coverage: "Comprehensive protection for most travelers",
    features: [
      "Medical expenses up to $250,000",
      "Trip cancellation up to $10,000",
      "Lost baggage up to $2,000",
      "Trip interruption coverage",
      "Emergency evacuation",
      "24/7 emergency assistance",
      "Travel delay coverage",
      "Missed connection coverage",
      "Personal liability",
    ],
    popular: true,
    color: "purple",
    icon: <IconStar size={24} className="text-purple-600" />,
    bestFor: "Family vacations, business trips",
  },
  {
    id: "3",
    name: "Premium Plan",
    price: "$129",
    period: "per trip",
    coverage: "Maximum protection for worry-free travel",
    features: [
      "Medical expenses up to $500,000",
      "Trip cancellation up to $20,000",
      "Lost baggage up to $3,000",
      "Trip interruption coverage",
      "Emergency evacuation",
      "Rental car coverage",
      "Adventure sports coverage",
      "24/7 premium assistance",
      "Cancel for any reason",
      "Pre-existing conditions coverage",
      "Business equipment coverage",
    ],
    popular: false,
    color: "yellow",
    icon: <IconWorld size={24} className="text-yellow-600" />,
    bestFor: "Luxury travel, long trips",
  },
];

const COVERAGE_HIGHLIGHTS = [
  {
    icon: <IconMedicalCross size={24} className="text-yellow-600" />,
    title: "Medical Coverage",
    description: "Emergency medical expenses and hospitalization",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <IconPlaneTilt size={24} className="text-yellow-600" />,
    title: "Trip Protection",
    description: "Cancellation, interruption, and delay coverage",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <IconLuggage size={24} className="text-yellow-600" />,
    title: "Baggage Protection",
    description: "Lost, stolen, or delayed baggage coverage",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <IconClock size={24} className="text-yellow-600" />,
    title: "24/7 Support",
    description: "Round-the-clock emergency assistance",
    bgColor: "bg-yellow-100",
  },
];

export const InsurancePlansPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const travelData = location.state || {};
  const WHATSAPP_NUMBER = "971544455526";

  const WHATSAPP_MESSAGE = `Hello! I'm interested in the travel insurance plan for my trip.${
    travelData.countries
      ? `\n\nTrip Details:\n📍 Destination: ${travelData.countries.join(
          ","
        )}\n📅 Dates: ${travelData.startDate || "Not set"} to ${
          travelData.endDate || "Not set"
        }\n👥 Travellers: ${travelData.travellers || 1}`
      : ""
  }\n\nCan you help me proceed with the purchase?`;

  const openWhatsAppSupport = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handlePlanSelect = (plan) => {
    // Prepare data for payment page
    const insuranceData = {
      plan: plan,
      travelData: travelData,
      totalPrice: calculateTotalPrice(plan, travelData),
      coverageDetails: getCoverageDetails(plan),
    };

    console.log("Selected plan:", plan);
    console.log("Insurance data:", insuranceData);

    // Navigate to payment page with all data
    navigate("/payment", { state: insuranceData });

    // Alternatively, show confirmation modal
    // showConfirmationModal(insuranceData);
  };

  // Calculate total price based on plan and travel details
  const calculateTotalPrice = (plan, travelData) => {
    const basePrice = parseInt(plan.price.replace("$", ""));
    const travellers = travelData.travellers || 1;
    const duration = calculateTripDuration(
      travelData.startDate,
      travelData.endDate
    );
    const durationMultiplier = duration > 7 ? 1.2 : 1;

    return (basePrice * travellers * durationMultiplier).toFixed(2);
  };

  // Calculate trip duration in days
  const calculateTripDuration = (startDate, endDate) => {
    if (!startDate || !endDate) return 7; // Default 7 days

    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return duration > 0 ? duration : 7;
  };

  // Get coverage details for the selected plan
  const getCoverageDetails = (plan) => {
    const coverageMap = {
      "Basic Plan": {
        medical: "$100,000",
        cancellation: "$5,000",
        baggage: "$1,000",
        deductible: "$250",
      },
      "Standard Plan": {
        medical: "$250,000",
        cancellation: "$10,000",
        baggage: "$2,000",
        deductible: "$100",
      },
      "Premium Plan": {
        medical: "$500,000",
        cancellation: "$20,000",
        baggage: "$3,000",
        deductible: "$0",
      },
    };

    return coverageMap[plan.name] || coverageMap["Standard Plan"];
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE6B3]/20 via-white to-white py-8">
      <div className="container mx-auto px-6 sm:px-10 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          {/* <Link to="/travel-insurance">
            <Button
              variant="secondary"
              className="border-none shadow-none text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              <IconArrowLeft size={20} />
              Back to Search
            </Button>
          </Link> */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Choose Your Insurance Plan
          </h1>
          <div className="w-20"></div> {/* Spacer for balance */}
        </motion.div>

        {/* Travel Summary */}
        {travelData.countries && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Your Trip Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <IconWorld size={20} className="text-yellow-600" />
                <div className=" flex  items-center gap-3">
                  <span className="font-semibold">Destination: </span>
                  <span className="text-gray-700 text-sm font-extrabold">
                    {travelData.countries.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={20} className="text-yellow-600" />
                <div className="flex  items-center gap-3">
                  <span className="font-semibold">Dates: </span>
                  <span className="text-gray-700  text-sm font-extrabold">
                    {formatDate(travelData.startDate)} to{" "}
                    {formatDate(travelData.endDate)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconPlaneTilt size={20} className="text-yellow-600" />
                <div className="flex  items-center gap-3">
                  <span className="font-semibold">Travellers: </span>
                  <span className="text-gray-700 text-sm font-extrabold">
                    {travelData.travellers || 1}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconShield size={20} className="text-yellow-600" />
                <div className="flex  items-center gap-3">
                  <span className="font-semibold">Status: </span>
                  <span className="text-green-600 text-sm font-extrabold ">
                    Ready to insure
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Coverage Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Comprehensive Coverage Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COVERAGE_HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-yellow-300"
              >
                <div
                  className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {INSURANCE_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`relative ${plan.popular ? "scale-105 z-10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <IconStar size={16} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`h-full border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-yellow-400 shadow-xl bg-white"
                    : "border-gray-200 hover:border-yellow-300 hover:shadow-lg bg-white"
                }`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 ${
                        plan.popular ? "bg-yellow-100" : "bg-gray-100"
                      } rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {plan.coverage}
                    </p>
                    <div
                      className={`${
                        plan.popular
                          ? "bg-yellow-50 border border-yellow-200"
                          : "bg-gray-100"
                      } rounded-lg px-3 py-2`}
                    >
                      <p className="text-xs font-medium text-gray-700">
                        Best for:{" "}
                        <span
                          className={
                            plan.popular ? "text-yellow-600" : "text-indigo-600"
                          }
                        >
                          {plan.bestFor}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <IconCheck
                            size={20}
                            className="text-green-500 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-4 font-semibold rounded-xl transition-all duration-200 ${
                      plan.popular
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-[#2B1700] hover:bg-[#3a2400] text-white hover:shadow-lg"
                    }`}
                  >
                    Select {plan.name}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info & FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Travel Insurance?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive coverage with 24/7 support, easy claims
              process, and competitive pricing. Your peace of mind is our
              priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconCheck className="text-yellow-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Instant Coverage
              </h3>
              <p className="text-sm text-gray-600">
                Get covered immediately after purchase
              </p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconShield className="text-yellow-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-600">
                Your information is protected with encryption
              </p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconClock className="text-yellow-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Money Back Guarantee
              </h3>
              <p className="text-sm text-gray-600">
                30-day money back guarantee on all plans
              </p>
            </div>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need help choosing the right plan? Our experts are here to help!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={openWhatsAppSupport}
              variant="secondary"
              className="border border-green-500 text-green-600 hover:bg-green-50 flex items-center gap-2 transition-colors duration-200"
            >
              <IconBrandWhatsapp size={20} />
              WhatsApp Support
            </Button>
            <Link to="/">
              <Button
                variant="secondary"
                className="bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-2 transition-colors duration-200"
              >
                <IconArrowLeft size={20} />
                Modify Search
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
