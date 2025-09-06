import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import SectionWrapper from '../ui/SectionWrapper';
import LottieAnimation from '../ui/LottieAnimation';
import { ContactForm } from '../../types';
import { personalInfo } from '../../data/portfolio';

// ✅ Import local JSON animation
import contactAnimation from '../../assets/animations/contact.json';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: ContactForm) => {
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    reset();
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      value: 'aswini.ms2023eee@sece.ac.in',
      href: `mailto:${'aswini.ms2023eee@sece.ac.in'}`,
      color: 'text-red-500'
    },
    {
      name: 'Phone',
      icon: Phone,
      value: 7010917929,
      href: `tel:${7010917929}`,
      color: 'text-green-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      value: 'https://github.com/aswini27ms',
      href: `https://${'github.com/aswini27ms'}`,
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      value: 'https://linkedin.com/in/aswini-m-s-8b10a8310/',
      href: `https://${'linkedin.com/in/aswini-m-s-8b10a8310/'}`,
      color: 'text-blue-600'
    }
  ];

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Get in Touch
              </h3>

              {/* ✅ Contact Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-40 h-40 mx-auto lg:mx-0 mb-6"
              >
                <LottieAnimation
                  animationData={contactAnimation} // using local animation
                  className="w-full h-full"
                />
              </motion.div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name === 'Email' || link.name === 'Phone' ? '_self' : '_blank'}
                    rel={link.name === 'Email' || link.name === 'Phone' ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-hover"
                  >
                    <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${link.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-200">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Send me a message
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-hover"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </SectionWrapper>
  );
};

export default Contact;
