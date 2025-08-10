import React, { useState } from 'react';


const SchoolInfoForm = () => {
  const [formData, setFormData] = useState({
    school_email: '',
    school_name: '',
    school_description: '',
    facilities_and_clubs: '',
    school_admin_name: '',
    school_admin_email: '',
    school_address: '',
    curriculum_type: '',
    website_link: '',
    date_est: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://admissionboox-coming-soon.onrender.com/api/onboarding/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Thanks! You're on the list.");
        setEmail_addr("");
      } else {
        setMessage(data.detail || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }
  };


  return (
    <>
      <section className='flex flex-col items-center gap-[4rem] text-[1.5rem] bg-gray-100'>

        <span className='p-[4rem] text-[3rem] sm:text-[4rem] font-bold'>School Information Form</span>
        <form className='flex flex-col items-center pb-[6rem] gap-[4rem]' onSubmit={handleSubmit}>
          <div className="flex flex-col pb-[4rem] max-w-[80vw] sm:max-w-[60vw] gap-[2rem] items-start bg-white p-[4rem]">

            <label >
              School Email:
            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="email"
              name="school_email"
              value={formData.school_email}
              onChange={handleChange}
              required
            />

            <label>
              School Name:

            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="text"
              name="school_name"
              maxLength="200"
              value={formData.school_name}
              onChange={handleChange}
              required
            />

            <label>
              School Description:

            </label>
            <textarea
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              name="school_description"
              maxLength="6000"
              value={formData.school_description}
              onChange={handleChange}
              required
            />

            <label>
              Facilities and Clubs:

            </label>
            <textarea
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              name="facilities_and_clubs"
              maxLength="4000"
              value={formData.facilities_and_clubs}
              onChange={handleChange}
            />

            <label>
              School Admin Name:

            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="text"
              name="school_admin_name"
              maxLength="200"
              value={formData.school_admin_name}
              onChange={handleChange}
              required
            />

            <label>
              School Admin Email:
            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="email"
              name="school_admin_email"
              value={formData.school_admin_email}
              onChange={handleChange}
              required
            />

            <label>
              School Address:
            </label>
            <textarea

              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              name="school_address"
              maxLength="600"
              value={formData.school_address}
              onChange={handleChange}
              required
            />

            <label>
              Curriculum Type:

            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="text"
              name="curriculum_type"
              placeholder='Nigerian, British, etc'
              maxLength="60"
              value={formData.curriculum_type}
              onChange={handleChange}
              required
            />

            <label>
              Website Link:

            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="url"
              name="website_link"
              placeholder='Paste in your schools website link'
              maxLength="100"
              value={formData.website_link}
              onChange={handleChange}
            />

            <label>
              Date Established:

            </label>
            <input
              className='border-2 rounded border-gray-500 p-[1rem] focus:outline-none focus:border-booxorange'
              type="date"
              name="date_est"
              value={formData.date_est}
              onChange={handleChange}
            />

          </div>
          <button class="bg-btncol p-[2rem] w-full rounded text-gray-50 font-bold hover:cursor-pointer active:bg-gray-800" type="submit">Submit</button>
        </form>
      </section >
      <section>
        <div className="fixed flex justify-center bottom-0 w-[100vw] bg-booxorange" id="copy_contain">
          <p>&copy; BOOX Community Limited. <span className="font-bold">2025</span></p>
        </div>
      </section>
    </>
  );
};

export default SchoolInfoForm;
