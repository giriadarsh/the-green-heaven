const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex justify-center items-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-10 transition-transform transform hover:scale-105">
        
        {/* Heading Section */}
        <h1 className="text-5xl font-extrabold text-green-700 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We'd love to hear from you! Fill out the form below or reach us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-green-600 hover:text-green-800 transition"
          >
            support@example.com
          </a>
          .
        </p>

        {/* Form Section */}
        <form className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Your Message</label>
            <textarea
              placeholder="Write your message here..."
              className="w-full p-4 h-40 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
