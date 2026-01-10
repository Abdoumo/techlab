export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    text: "TechLab transformed our entire business infrastructure. Their team delivered beyond expectations and provided excellent support throughout the process. Highly recommended!",
    author: "Ahmed Mohamed",
    role: "CEO",
    company: "Digital Solutions Inc.",
  },
  {
    id: "testimonial-2",
    text: "We partnered with TechLab for our e-commerce platform. The solution was robust, scalable, and launched ahead of schedule. Their technical expertise is unmatched.",
    author: "Fatima Benali",
    role: "Business Owner",
    company: "Fashion Hub Online",
  },
  {
    id: "testimonial-3",
    text: "The custom software solution TechLab developed has streamlined our operations significantly. The team was professional, responsive, and delivered exactly what we needed.",
    author: "Karim Hassan",
    role: "Operations Manager",
    company: "LogiCorp Logistics",
  },
  {
    id: "testimonial-4",
    text: "Security was our biggest concern, and TechLab's cybersecurity solutions gave us complete peace of mind. Their proactive approach saved us from potential threats.",
    author: "Leila Amrani",
    role: "IT Director",
    company: "FinanceSecure Bank",
  },
  {
    id: "testimonial-5",
    text: "Implementing AI solutions seemed daunting, but TechLab made it seamless. The results have improved our efficiency by 40%. Excellent work!",
    author: "Mohamed Serir",
    role: "Product Lead",
    company: "TechStart Innovations",
  },
  {
    id: "testimonial-6",
    text: "Outstanding service from start to finish. The team understood our vision and translated it into a world-class product. They're now our trusted tech partner.",
    author: "Yasmine El-Habib",
    role: "Founder",
    company: "Creative Studios Agency",
  },
];
