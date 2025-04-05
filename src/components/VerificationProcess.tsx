import { motion } from 'framer-motion';
import { CheckCircle, FileText, ShieldCheck, ClipboardList, Compass } from 'lucide-react';

const steps = [
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: 'Consultation',
    description: 'Tell us about your property and investment goals.',
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: 'Document Submission',
    description: 'Securely share all relevant documents with our team.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: 'Expert Analysis',
    description: 'Our legal team thoroughly examines every document.',
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-white" />,
    title: 'Verification Report',
    description: 'Receive a detailed and transparent property report.',
  },
  {
    icon: <Compass className="w-6 h-6 text-white" />,
    title: 'Actionable Steps',
    description: 'Get tailored advice to move forward with confidence.',
  },
];

export default function VerificationSection() {
  return (
   
      <div className="h-container mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-white text-3xl sm:text-4xl font-bold ']">
            Our Verification Process
          </h2>
          <p className="mt-3 text-gray-300 text-base sm:text-lg ']">
            Your step-by-step journey to smart property investment
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center  rounded-2xl p-4 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#ED1C24] flex items-center justify-center mb-4 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-white text-lg font-bold  mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed ">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
  
  );
}
