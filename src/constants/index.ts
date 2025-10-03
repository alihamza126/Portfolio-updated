const navLinks = [
   {
      name: "Work",
      link: "#work",
   },
   {
      name: "Experience",
      link: "#experience",
   },
   {
      name: "Skills",
      link: "#skills",
   },
   {
      name: "Testimonials",
      link: "#testimonials",
   },
];

const expCards = [
   {
      title: "Freelance Developer",
      date: "2021 - Present",
      imgPath: "/images/freelance-work.png", // replace with your actual asset
      logoPath: "/logos/freelance.png", // replace with logo if you have
      responsibilities: [
         "Worked with international clients on MERN stack projects.",
         "Developed responsive websites and dashboards.",
         "Built APIs and integrated Firebase authentication.",
         "Customized UI/UX for client-specific branding.",
      ],
   },
   {
      title: "Full-Stack Developer (Agency)",
      date: "2023 - Present",
      imgPath: "/images/agency-work.png", // replace with your actual asset
      logoPath: "/logos/agency.png", // replace with your agency logo
      responsibilities: [
         "Collaborated with designers & backend engineers in Agile teams.",
         "Delivered production-grade web apps with Next.js & Tailwind.",
         "Optimized performance and SEO for large-scale apps.",
         "Mentored junior developers in React & Node.js.",
      ],
   },
];

export { navLinks, expCards };
