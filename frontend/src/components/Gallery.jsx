import React from 'react'
import { motion } from 'framer-motion';

const images = [
    "https://www.nrimb.com/assets/images/couple-img1.jpg",
    "https://i0.wp.com/moviegalleri.net/wp-content/uploads/2022/06/director-vignesh-shivan-actress-nayanthara-marriage-photos-hd-wedding-photos.jpg?resize=2500%2C2500&ssl=1",
    "https://www.nrimb.com/assets/images/g-img5.jpg",
    "https://www.nrimb.com/assets/images/couple-img2.jpg",
    "https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg",
    "https://content.jdmagicbox.com/comp/guwahati/t8/pwfl1542876491b1k6t8/catalogue/gathbandhan-centre-ulubari-guwahati-matrimonial-bureaus-r5q3kjigiw.jpg",
    "https://img.freepik.com/premium-photo/assamese-elegance-radiant-bride-mekhela-chador-showcasing-traditional-jewelry-with-joyful_878783-11300.jpg",
    "https://www.shutterstock.com/image-photo/8th-october-2017-guwahati-assam-600nw-743099197.jpg",
    "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG1hcnJpYWdlfGVufDB8fDB8fHww",
    "https://www.nrimb.com/assets/images/couple-img3.jpg",
    "https://i.pinimg.com/736x/f6/ac/fa/f6acfa98187ceb14dc5f7d7fcf5b2ce7.jpg",
    "https://5.imimg.com/data5/ANDROID/Default/2022/7/GI/NL/OS/41037327/product-jpeg-500x500.jpg",
    "https://content.jdmagicbox.com/comp/guwahati/t8/pwfl1542876491b1k6t8/catalogue/gathbandhan-centre-ulubari-guwahati-matrimonial-bureaus-r5q3kjigiw.jpg",
    "https://i.pinimg.com/474x/28/f4/6d/28f46dba1b9a5ca1e90ae47a41f5f622.jpg",
    "https://www.shutterstock.com/image-photo/8th-october-2017-guwahati-assam-600nw-743099197.jpg",
    "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG1hcnJpYWdlfGVufDB8fDB8fHww"
  ];

export default function Gallery() {
  return (
    <div>
     
      <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image}
              alt={`Matrimony ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        {/* Title Section with Animation */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 4, x: 0 }}
          transition={{ duration: 5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Thousands of
            <br />
            <span className="text-[#df5e55]">Success</span> Stories
          </h1>
        </motion.div>

        {/* Description Section with Animation */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 4, y: 0 }}
          transition={{ duration: 4, delay: 3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            We take pride in publishing the most inspiring couple's success stories as we can motivate other members who are looking forward to finding the most ideal match through NRI Marriage Bureau. You can browse our happily married life stories of the couples.
          </p>
        </motion.div>
      </div>
    </div>
    </div>
    </div>


    
  )
}
