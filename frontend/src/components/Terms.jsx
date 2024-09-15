import React from 'react'
import { motion } from 'framer-motion';

const termsContent = {
    title: "Terms and Services",
    introduction: "Welcome to our Terms and Services page. Please read these terms carefully before using our website or services.",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: "By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services."
      },
      {
        heading: "2. Changes to Terms",
        content: "We may modify these terms at any time. Any changes will be posted on this page and will take effect immediately upon publication."
      },
      {
        heading: "3. Use of Our Services",
        content: "You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for any content you post on our platform."
      },
      {
        heading: "4. User Accounts",
        content: "To use certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information."
      },
      {
        heading: "5. Intellectual Property",
        content: "All content and materials on our website are owned by us or our licensors and are protected by intellectual property laws."
      },
      {
        heading: "6. Limitation of Liability",
        content: "We are not liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of our services."
      },
      {
        heading: "7. Governing Law",
        content: "These terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in the courts located in [Your Location]."
      },
      {
        heading: "8. Contact Us",
        content: "If you have any questions about these terms, please contact us at [email@example.com]."
      }
    ]
  };

export default function Terms() {
  return (
    <div>
       <div className="relative h-[82px] w-full bg-gradient-to-r from-amber-700 to-red-950"></div>

      <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            {termsContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 mb-6"
          >
            {termsContent.introduction}
          </motion.p>

          {termsContent.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-gray-50 shadow-md rounded-lg p-6 mb-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
              <p className="text-gray-600">{section.content}</p>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  )
}
