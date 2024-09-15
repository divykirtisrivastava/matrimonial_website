import React from 'react'


const ImageCard = ({ title, imageUrl, description }) => (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );


export default function About() {
  return (
    <div>
      
      
  {/* Background Image Section */}
  <div className="relative w-full  h-60 sm:h-72 md:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg)' }}>
  {/* Content to overlap */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
    <h1 class="text-2xl sm:text-3xl md:text-[4rem] mt-28 text-white font-bold font-serif">About Us</h1>
    <p className="text-sm sm:text-lg mt-8 md:text-xl mb-6">Join us in the journey of a lifetime with your perfect match.</p>
    {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
      Learn More
    </button> */}
  </div>
</div>


  {/* About Section */}
  <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100">
    <div className="md:w-1/2 p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        About Our Matrimonial
      </h1>
      <p className="text-gray-700 mb-4 text-lg sm:text-xl md:text-2xl text-center md:text-left">
        Welcome to Matrimonials, your trusted partner in finding love and companionship. We specialize in connecting individuals who are ready for a committed relationship. With a focus on cultural values and personal preferences, our platform offers a safe and respectful environment for you to meet your perfect match. Join us to embark on a journey towards a meaningful and lasting relationship. Your happiness is our mission.
      </p>
    </div>
    <div className="md:w-1/2 p-4">
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src="https://cdn0.weddingwire.in/article/6998/3_2/1280/jpg/28996-matrimonial-services-dipak-studious-lead-image.webp"
        alt="About Us"
      />
    </div>
  </div>

  {/* Image Card Section */}
  <div className="flex flex-wrap justify-center p-6 gap-6">
    <ImageCard
      title="Dummy & Dummy"
      imageUrl="https://raikwarrishtey.com/img/9.jpg"
      description="A match made in heaven, Anjali and Raj share a bond of love, laughter, and lifelong companionship."
    />
    <ImageCard
      title="Dummy & Dummy"
      imageUrl="https://www.mmmatrimony.in/images/sponser/download.jpg"
      description="A match made in heaven, Anjali and Raj share a bond of love, laughter, and lifelong companionship."
    />
    <ImageCard
      title="Dummy & Dummy"
      imageUrl="https://pbs.twimg.com/media/Dt34SZDUUAACC6o?format=jpg&name=large"
      description="A match made in heaven, Anjali and Raj share a bond of love, laughter, and lifelong companionship."
    />
    <ImageCard
      title="Dummy & Dummy"
      imageUrl="https://www.99marriageguru.com/blog/wp-content/uploads/2019/04/marathi-2.jpg"
      description="A match made in heaven, Anjali and Raj share a bond of love, laughter, and lifelong companionship."
    />
    <ImageCard
      title="Dummy & Dummy"
      imageUrl="https://www.sycorian.com/images/img-01.jpg"
      description="A match made in heaven, Anjali and Raj share a bond of love, laughter, and lifelong companionship."
    />
    <ImageCard
      title="Dummy & Dummy"
      imageUrl="https://sycoriaan.com/images/services/pic-07.jpg"
      description="A match made in heaven, Anjali and Raj share a bond of love, laughter, and lifelong companionship."
    />
  </div>
</div>

  )
}
