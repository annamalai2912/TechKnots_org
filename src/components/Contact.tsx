import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', phone: '', message: '' };
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.phone && !newErrors.message) {
      setLoading(true);
      setTimeout(() => {
        console.log(formData);
        setSubmitted(true);
        setLoading(false);
      }, 2000);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      file: null,
    });
    setErrors({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold text-green-500 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-green-600 text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We’d love to hear from you. Please fill out the form below.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 space-y-6">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length} / 500
              </div>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <label className="block text-sm font-medium text-gray-700">Attachment (optional)</label>
              <input
                type="file"
                className="mt-1 block w-full px-4 py-2 border rounded-md"
                onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
              />
            </motion.div>

            <div className="flex space-x-4 justify-center">
              <motion.button
                type="submit"
                className="py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 w-1/2"
                disabled={loading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {loading ? 'Submitting...' : 'Send Message'}
              </motion.button>
              <motion.button
                type="button"
                onClick={handleClear}
                className="py-3 px-6 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Clear Form
              </motion.button>
            </div>
          </form>

          <div className="hidden md:flex justify-center items-center">
            <motion.img
              src="/contact.jpg"
              alt="Contact Us"
              className="max-w-full h-auto rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {submitted && (
          <motion.div
            className="mt-8 p-4 bg-green-200 text-green-700 rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Thank you for contacting us! We will get back to you soon.</p>
            <button
              onClick={handleClear}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Go Back
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
