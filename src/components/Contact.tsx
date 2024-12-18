import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setLoading(true); // Start loading when the form is submitted
      setTimeout(() => {
        console.log(formData);
        setSubmitted(true);
        setLoading(false); // End loading after submission
      }, 2000); // Simulate network request delay
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setErrors({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold text-green-500 mb-4 tracking-wider"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let's Get in Touch
          </motion.h1>
          <motion.p
            className="text-green-600 max-w-2xl mx-auto text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We’d love to hear from you. Reach out with your questions, comments, or ideas!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Left side - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white shadow-xl rounded-lg p-10 w-full transform transition duration-500 ease-in-out hover:scale-105 relative z-10"
          >
            {/* Name Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label className="absolute left-4 top-2 text-sm font-medium text-green-500 transition-all duration-300 ease-in-out">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label className="absolute left-4 top-2 text-sm font-medium text-green-500 transition-all duration-300 ease-in-out">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <label className="absolute left-4 top-2 text-sm font-medium text-green-500 transition-all duration-300 ease-in-out">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
            </motion.div>

            {/* Submit and Clear Buttons */}
            <div className="flex space-x-4 justify-center">
              <motion.button
                type="submit"
                className="py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 w-1/2"
                disabled={loading} // Disable button while loading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
              <motion.button
                type="button"
                onClick={handleClear}
                className="py-3 px-6 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200 w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Clear Form
              </motion.button>
            </div>
          </form>

          {/* Right side - Image */}
          <div className="space-y-6 absolute top-0 right-0 z-0 hidden md:block">
            <motion.div
              className="w-full h-full flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="/contact.jpg" // Local image inside the public/images folder
                alt="Q&A Person"
                className="max-w-full max-h-[400px] object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <motion.div
            className="w-full mt-6 p-4 bg-green-200 text-green-700 rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Thank you for reaching out! We'll get back to you soon.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
