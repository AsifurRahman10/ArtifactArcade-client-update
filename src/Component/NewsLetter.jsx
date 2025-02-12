import axios from "axios";
import Swal from "sweetalert2";

export default function NewsLetter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    axios.post("http://localhost:4000/newsletter", email).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Thank you for subscribing!",
          text: "You will now receive updates on historical artifacts and more.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center py-20 md:py-[100px] gap-6 ">
      <div className="">
        <h2 className="text-3xl font-semibold">Stay connected to history !</h2>
        <p className="text-gray-800 mt-2 dark:text-white">
          Subscribe for regular updates on new artifacts and discoveries.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex rounded-[30px] overflow-hidden border dark:border-none"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="px-4 py-3 border-none flex-grow focus:outline-none text-base rounded-l-[30px]"
          />
          <button
            to="/login"
            className="bg-custom-btn font-semibold text-white py-3 rounded-r-[30px] group overflow-hidden px-6 md:px-10 relative"
          >
            <span className="relative z-10">Subscribe</span>
            <span className="absolute inset-0 w-0 bg-[#183153] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </button>
        </form>
      </div>
    </div>
  );
}
