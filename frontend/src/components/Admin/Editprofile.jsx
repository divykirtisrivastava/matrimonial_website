import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { Link, useNavigate, useParams} from 'react-router-dom'
// import { viewProfile } from "../../../../backend/controllers/profileController";

export default function Editprofile() {

    let {id} = useParams()
let navigation = useNavigate()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gotra: '',
    birth_time: '',
    marital_status: 'unmarried',
    body_height: '',
    working_profile: '',
    Father_occupation: '',
    mother_occupation: '',
    no_of_sister: '',
    whatsapp_number: '',
    email: '',
    about_myself: '',
    caste: '',
    sub_caste: '',
    gender: 'male',
    manglik: '',
    education: '',
    color: '',
    father_name: '',
    mother_name: '',
    no_of_brother: '',
    phone_no: '',
    password: '',
    address: '',
    country: '',
  });

  let {first_name,last_name,gotra,birth_time,marital_status,body_height,working_profile,Father_occupation,mother_occupation,no_of_sister,whatsapp_number,email,about_myself,caste,sub_caste,gender,date_of_birth,manglik,education,color,father_name,mother_name,no_of_brother,phone_no,password,address,country,image}=formData;
  

  const [formErrors, setFormErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState('myself');
  const [selectedCountry, setSelectedCountry] = useState("");

  const formRef = useRef(null);

  // GSAP animation on mount
  useEffect(() => {
    gsap.from(formRef.current, {
      // opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setFormData({ ...formData, country: e.target.value });
  };


 

  


  const validateForm = () => {
    let errors = {};
    if (!formData.first_name) errors.first_name = "First Name is required";
    if (!formData.last_name) errors.last_name = "Last Name is required";
    if (!formData.email) errors.emaill = "Email is required";
    if (!formData.phone_no) errors.phone_nor = "Phone Number is required";
    if (!formData.password) errors.password = "Password is required";
    
    if (!formData.gotra) errors.gotra = "gotra is required";
    if (!formData.birth_time) errors.birth_time = "Birth time is required";
    if (!formData.marital_status) errors.marital_status = "maritalStatus is required";
    if (!formData.body_height) errors.body_height = "bodyHeight is required";
    if (!formData.working_profile) errors.working_profile = "workingProfile is required";

    if (!formData.Father_occupation) errors.Father_occupation = "fatherOccupation is required";
    if (!formData.mother_occupation) errors.mother_occupation = "motherOccupation is required";
    if (!formData.no_of_sister) errors.no_of_sister = "noOfSisters is required";
    if (!formData.body_height) errors.body_height = "bodyHeight is required";
    if (!formData.whatsapp_number) errors.whatsapp_number = "whatsappNumber is required";

    if (!formData.caste) errors.caste = "caste is required";
    if (!formData.about_myself) errors.about_myself = "aboutMyself is required";
    if (!formData.gender) errors.gender = "gender is required";

    if (!formData.country) errors.country = "country is required";
    if (!formData.education) errors.education = "education is required";
    if (!formData.father_name) errors.father_name = "fatherNameis required";
    if (!formData.mother_name) errors.mother_name = "gender is required";
    if (!formData.address) errors.address = "address is required";

    if (!formData.password) errors.password= "password is required";
    if (!formData.no_of_brother) errors.no_of_brother = "noOfBrothers is required";
    if (!formData.manglik) errors.manglik = "manglik is required";

    // Add more validation rules as needed
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  


  async function viewProfile(){
    let result = await axios.get(`http://localhost:3000/api/viewProfile/${id}`)
    setFormData(result.data[0])
}
useEffect(()=>{
viewProfile()
}, [])
console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/updateProfile/${id}`,{
        first_name:formData.first_name,
        last_name:formData.last_name,
        gotra:formData.gotra,
        birth_time:formData.birth_time,
        marital_status:formData.marital_status,
        body_height:formData.body_height,
        working_profile:formData.working_profile,
        Father_occupation:formData.Father_occupation,
        mother_occupation:formData.mother_occupation,
        no_of_sister:formData.no_of_sister,
        whatsapp_number:formData.whatsapp_number,
        email:formData.email,
        about_myself:formData.about_myself,
        caste:formData.caste,
        sub_caste:formData.sub_caste,
        gender:formData.gender,
        manglik:formData.manglik,
        education:formData.education,
        color:formData.color,
        father_name:formData.father_name,
        mother_name:formData.mother_name,
        no_of_brother:formData.no_of_brother,
        phone_no:formData.phone_no,
        password:formData.password,
        address:formData.address,
        country:formData.country,
       });
      navigation('/admin')
    } catch (error) {
      console.error("There was an error submitting the profile!", error);
      alert("Failed to submit profile.");
    }
  };
  return (
    <div className="bg-amber-700 ">
      <div className="container mx-auto p-4">
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          Profile for
        </h1>
        <div className="flex flex-col items-center">
          <label htmlFor="profile" className="text-lg md:text-xl font-medium mb-2">
            Select Profile Type:
          </label>
          <select
            id="profile"
            className="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="myself">Myself</option>
            <option value="children-male">For Children (Male)</option>
            <option value="children-female">For Children (Female)</option>
            <option value="cousin">For Cousin</option>
            <option value="sister">For Sister</option>
            <option value="brother">For Brother</option>
          </select>
          <div className="mt-4 text-center">
            <p className="text-base md:text-lg">
              You have selected: <span className="font-semibold">{selectedOption}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8 bg-yellow-900 shadow-lg rounded-lg ">
        <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "First Name (पहला नाम)", name: "first_name", type: "text" },
              { label: "Last Name (सरनेम)", name: "last_name", type: "text" },
              { label: "Gotra (गोत्र)", name: "gotra", type: "text" },
              { label: "Birth Time (जन्म समय)", name: "birth_time", type: "time" },
              { label: "Select Marital status (वैवाहिक स्थिति)", name: "marital_status", type: "select", options: ["Unmarried", "Divorced", "Widowed"] },
              { label: "Body Height (लंबाई)", name: "body_height", type: "text" },
              { label: "Working Profile (जॉब)", name: "working_profile", type: "text" },
              { label: "Father Occupation (पिताजी का व्यवसाय)", name: "Father_occupation", type: "text" },
              { label: "Mother Occupation (माता का व्यवसाय)", name: "mother_occupation", type: "text" },
              { label: "Select No of Sisters (बहन कितनी हैं)", name: "no_of_sister", type: "select", options: ["None", "1", "2", "3+"] },
              { label: "Whatsapp Number (वाटसेप नं).", name: "whatsapp_number", type: "text" },
              { label: "Email (ईमेल).", name: "email", type: "email" },
              { label: "About Myself (आप अपने बारे मैं कुछ लिखें)", name: "about_myself", type: "textarea" },
              
              { label: "Caste (जाती)", name: "caste", type: "text" },
              { label: "Sub Caste (उप जाती)", name: "sub_caste", type: "text" },
              { label: "Select Gender (स्त्री/पुरुष)", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
              { label: "Manglik (मांगलिक स्थिति)", name: "manglik", type: "select", options: ["Yes", "No", "Don't Know"] },
              { label: "Education (शिक्षा).", name: "education", type: "text" },
              { label: "Select Color (रंग रूप)", name: "color", type: "select", options: ["Fair", "Wheatish", "Dark"] },
              { label: "Father Name (पिताजी का नाम)", name: "father_name", type: "text" },
              { label: "Mother Name (माता का नाम)", name: "mother_name", type: "text" },
              { label: "Select No of Brothers (भाई कितने हैं)", name: "no_of_brother", type: "select", options: ["None", "1", "2", "3+"] },
              { label: "Phone No (मोबाइल नंबर)", name: "phone_no", type: "text" },
              { label: "Any Password (कोई भी पासवर्ड)", name: "password", type: "password" },
              { label: "Address (पूरा पता)", name: "address", type: "textarea" },
              { label: "Country (देश)", name: "country", type: "select", options: ["United States", "India", "Canada", "Australia", "United Kingdom", "Germany", "France", "Japan", "China", "Brazil"] },
            ].map((input, idx) => (
              <div key={idx} className="space-y-4">
                <label className="block text-slate-100 font-bold mb-2">{input.label}</label>
                {input.type === "select" ? (
                  <select name={input.name} className="w-full px-4 py-2 border rounded-lg" value={formData[input.name]} onChange={handleChange}>
                    {input.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : input.type === "textarea" ? (
                  <textarea name={input.name} className="w-full px-4 py-2 border rounded-lg" value={formData[input.name]} onChange={handleChange} />
                ) : input.type === "file" ?(
                  <input
                    type={input.type}
                    name={input.name}
                    className="w-full px-4 py-2 border rounded-lg"
                    onChange={handleChange}
                    accept={input.accept}
                  />
                ) : (
                  <input
                  type={input.type}
                  name={input.name}
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData[input.name]}
                  onChange={handleChange}
                  accept={input.accept}
                />
                )}
                {formErrors[input.name] && <p className="text-red-500 text-sm">{formErrors[input.name]}</p>}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 mb-6">
            <button type="submit" className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




