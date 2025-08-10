import { useState } from "react";
import ad_hero from '.././assets/admissionsbooxhero.jpeg';
import { useNavigate } from "react-router-dom";

function App() {
  const [email_addr, setEmail_addr] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate()

  const goToForm = () => {
    navigate('/onboard');
  };

  const handleChange = (e) => {
    setEmail_addr(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://foodsboox-coming-soon-page.onrender.com/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email_addr })
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
      <section className="text-[1.5rem] flex flex-col sm:flex-row p-[2rem] gap-[4rem] items-center justify-center mb-[15rem] sm:h-[90vh]">
        <div>
          <img className="sm:max-h-[80vh] border-2 border-booxorange rounded" src={ad_hero} alt="a vendor advert." />
        </div>
        <div className="flex flex-col gap-[1rem] sm:max-w-[40vw]">
          <div className="pb-[2rem] sm:pb-[4rem]">
            <span>Find a school, No hassle!</span>
            <br />
            <span className="font-black text-[3.815rem] sm:text-[6rem] ">Coming Soon</span>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[2rem]">
              <div className="flex flex-col">

                <label htmlFor="email">
                  <span className="font-bold">Just plain interested?</span> We'll keep in touch.
                </label>
                <br />
                <input
                  className="focus:outline-none border-2 border-booxorange p-[1rem] rounded-[1rem]"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email_addr}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-[1rem]">
                <button type="submit" className="bg-booxorange p-[1rem] rounded">Join mailing list</button>
                <button onClick={goToForm} className="block bg-btncol p-[1rem] rounded">Sign-up your school!</button>
              </div>
              <br />

            </form>
            {/* <p class="error"> */}
            {message && <p class="text-red-600"> {message} </p>}
            {/* </p> */}
          </div>
          <div className=""><p>AdmissionBOOX is proprietary software from <a href="https://www.booxcommunity.com" target="_blank" rel="noopener">BOOX Community</a> that aims to connect schools to applicants and prospective students. Sign up as a school today!</p></div>
        </div>
      </section >
      <section>
        <div className="fixed flex justify-center bottom-0 w-[100vw] bg-booxorange" id="copy_contain">
          <p>&copy; BOOX Community Limited. <span className="font-bold">2025</span></p>
        </div>
      </section>
    </>
  );
}

export default App;

