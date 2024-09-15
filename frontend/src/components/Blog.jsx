import React from 'react'

import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://img.freepik.com/free-photo/affectionate-indian-couple-celebrating-propose-day-together_23-2151111001.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1722902400&semt=ais_hybrid',
    
  },
  {
    src: 'https://png.pngtree.com/thumb_back/fh260/background/20240520/pngtree-cute-indian-wedding-couple-with-bridal-girl-image_15804099.jpg',
    
  },
  {
    src: 'https://1.bp.blogspot.com/-qy-ESV2fhRE/Vmu_OCEutFI/AAAAAAAABhU/1XRc0eV3ieM/s1600/kannada-matrimony-rambha-wedding.jpg',
    
  },
  {
    src: 'https://i.pinimg.com/736x/33/0c/dc/330cdcb5c5647b45499db4916be865dd.jpg',
    
  }
];

const blogContent = {
  title: "Welcome to Our Matrimonial Blog",
  introduction: "Discover stories, tips, and advice for finding the perfect match. Our blog covers everything from relationship advice to wedding planning.",
  sections: [
    {
      heading: "Finding the Perfect Match",
      content: "Learn about the traits to look for in a partner and how to find someone who truly complements you."
    },
    {
      heading: "Successful Relationship Tips",
      content: "Get insights on maintaining a healthy and successful relationship with your partner."
    },
    {
      heading: "Wedding Planning Essentials",
      content: "Explore tips and tricks for planning the perfect wedding, from budgeting to choosing the right venue."
    }
  ]
};

export default function Blog() {
  return (
    <div>
      {/* Header */}
      <div>
      <header className="bg-amber-900 text-white py-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-bold"
          >
            Welcome to our Matrimonial Blog
          </motion.h1>
        </div>
      </header>
      <header className="bg-amber-900 text-white py-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-bold"
          >
            Welcome to our Matrimonial Blog
          </motion.h1>
        </div>
      </header>
      </div>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm sm:text-lg font-semibold">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Blog Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              {blogContent.introduction}
            </h2>
          </motion.section>

          {blogContent.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                {section.heading}
              </h3>
              <p>{section.content}</p>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Matrimonial Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
