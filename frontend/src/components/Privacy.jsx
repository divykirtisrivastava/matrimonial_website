import React from 'react'

import { motion } from 'framer-motion';

const privacyPolicyContent = {
  title: "Privacy Policy",
  introduction: "Welcome to our Privacy Policy page. Here we explain how we handle your personal information and ensure your privacy.",
  sections: [
    {
      heading: "1. Information We Collect",
      content: "We collect personal information that you provide to us directly, such as your name, email address, and contact details when you register or use our services."
    },
    {
      heading: "2. How We Use Your Information",
      content: "Your information is used to enhance our services, improve user experience, and communicate with you regarding your account and updates."
    },
    {
      heading: "3. Data Security",
      content: "We implement security measures to protect your data from unauthorized access, alteration, or disclosure."
    },
    {
      heading: "4. Third-Party Services",
      content: "We may use third-party services to assist with our operations. These services are obligated to protect your information and use it only for the purposes we specify."
    },
    {
      heading: "5. Your Rights",
      content: "You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights."
    },
    {
      heading: "6. Changes to This Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any significant changes through our website or other communication channels."
    },
    {
      heading: "7. Contact Us",
      content: "If you have any questions about this Privacy Policy or our data practices, please contact us at [email@example.com]."
    }
  ]
};

export default function Privacy() {
  return (
    <div>
       <div className="relative h-[82px] w-full bg-gradient-to-r from-amber-700 to-red-950"></div>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            {privacyPolicyContent.title}
          </motion.h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
          >
            <p>{privacyPolicyContent.introduction}</p>
          </motion.section>

          {privacyPolicyContent.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-white shadow-md rounded-lg p-6 mb-8"
            >
              <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
              <p>{section.content}</p>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Matrimonial Site. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}
