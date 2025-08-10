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
    <section className="form-container">

      <h2 className='header'>School Information Form</h2>
      <form className='onboard' onSubmit={handleSubmit}>
        <div className="form">

          <label>
            School Email:

          </label>
          <input
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
            name="facilities_and_clubs"
            maxLength="4000"
            value={formData.facilities_and_clubs}
            onChange={handleChange}
          />

          <label>
            School Admin Name:

          </label>
          <input
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
            type="text"
            name="curriculum_type"
            maxLength="60"
            value={formData.curriculum_type}
            onChange={handleChange}
            required
          />

          <label>
            Website Link:

          </label>
          <input
            type="url"
            name="website_link"
            maxLength="100"
            value={formData.website_link}
            onChange={handleChange}
          />

          <label>
            Date Established:

          </label>
          <input
            type="date"
            name="date_est"
            value={formData.date_est}
            onChange={handleChange}
          />

        </div>
        <button class="btn" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SchoolInfoForm;
