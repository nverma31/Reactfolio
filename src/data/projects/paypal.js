const paypal = {
  projectName: "Rebooting PayPal",
  urlId: "paypal",
  projectDescription: "Rebooting PayPal - Reimagining the web-based PayPal experience to create a seamless and consistent multi-channel, user-centric journey.",
  projectURL: "",
  githubRepositoryURL: "",
  tags: "Software Engineering, Product Design, Web Development, Mobile App Development",
  date: "July 2013 - June 2014",
  imageUrl: "/images/projects/paypal/card.png",
  details: {
    timeline: "July 2013 - June 2014",
    platform: "Web & Mobile Application",
    role: "Software Engineer",
    client: "PayPal",
    heroImage: "/images/projects/paypal/8ball.jpg",
    heroImageAlt: "PayPal Reboot Project",
    customTitle: "Rebooting PayPal - A Complete Digital Transformation",
    sections: [
      {
        id: "introduction",
        type: "introduction",
        title: "Introduction",
        content: [
          "Founded in 1998, PayPal was the first online payments company. However, with the change in landscape of how people use technology, PayPal lagged behind in providing a good experience for its customers. In 2013, I was involved in the complete overhaul of the Website and the App that better serves its customers."
        ]
      },
      {
        id: "my-role",
        type: "introduction",
        title: "My Role",
        content: "I worked as a software engineer in the customer team responsible for overhauling the website and the mobile app."},
      {
        id: "process",
        type: "introduction",
        title: "How we got there",
        content: [
          "It was a truly cross-disciplinary collaborative effort. Product owners worked closely with designers and researchers to align business and user needs. Developers (like myself) were involved throughout, building microservices to support the experience. The process was agile and iterative, incorporating user testing at each step."
        ]
      },
      {
        id: "key-features",
        type: "feature",
        title: "Key New Features",
        content: "The redesign introduced several key features that significantly improved the user experience and engagement.",
        features: [
          {
            title: "Enhanced Engagement",
            description: "We introduced a module that encourages customers to complete their account setup, making it easier for them to get the most out of their PayPal account. This feature helps users understand the benefits of a complete profile and guides them through the process.",
            images: [
              {
                src: "/images/projects/paypal/web5.jpg",
                alt: "Account setup module using gamification to encourage customers to complete their account setup"
              },
              {
                src: "/images/projects/paypal/web6.jpg",
                alt: "Prominent space for marketing to promote new products and educate customers.p"
              }
            ]
          },
          {
            title: "Activity Tracker",
            description: "A comprehensive activity tracker was added to give users better visibility into their transactions and account activity. This feature made it easier to monitor spending and track payment history.",
            image: "/images/projects/paypal/activity.jpg",
            imageAlt: "Activity tracking interface showing transaction history"
          },
          {
            title: "Improved Settings Management",
            description: "We completely redesigned the settings interface to make it more user-friendly and organized. The new design grouped related settings together and added clear visual hierarchy to make navigation intuitive.",
            image: "/images/projects/paypal/settings.png",
            imageAlt: "Redesigned settings management interface"
          }
        ]
      },
      {
        id: "website",
        type: "feature",
        title: "The Website redesign",
        content: [
          "The redesign focused on simplifying the customer interface, responsive web design, and incorporating mobile-first methodology. Significant improvements included responsive pages, simplified user flows, modern visual design, and added functionality."
        ],
        features: [
          {
            title: "Before and After",
            description: "A comprehensive comparison showing the transformation of PayPal's interface from its original state to the new, modern design.",
            images: [
              {
                src: "/images/projects/paypal/web1.jpg",
              },
              {
                src: "/images/projects/paypal/web2.jpg",
              },
              {
                src: "/images/projects/paypal/web3.jpg",
              },
              {
                src: "/images/projects/paypal/web4.jpg",
                alt: "After: Clean, intuitive interface with improved user flow"
              }
            ]
          }
        ]
      },
      {
        id: "app",
        type: "feature",
        title: "The App",
        content: [
          "A new consumer PayPal app launched to 4.8 million customers in February 2016. This was a complete overhaul designed in partnership with stakeholders, product, design, and engineering teams."
        ],
        features: [
          {
            title: "",
            description: "",
            images: [
              {
                src: "/images/projects/paypal/mobilebf1.png",
              },
              {
                src: "/images/projects/paypal/mobilebf2.png",
              },
              {
                src: "/images/projects/paypal/mobilebf3.png",
              }
            ]     
          }
        ]
      },
      {
        id: "impact",
        type: "impact",
        title: "Impact",
        content: [
          {
            label: "Account Completion",
            value: "27%",
            subtitle: "Overall Increase",
            description: "Increase in overall account completion rate",
            bgColor: "bg-blue-200",
            textColor: "text-blue-800"
          },
          {
            label: "New Customers",
            value: "18%",
            subtitle: "Completion Rate",
            description: "Increase in account completion among new customers",
            bgColor: "bg-green-200",
            textColor: "text-green-800"
          },
          {
            label: "Bank Linking",
            value: "12%",
            subtitle: "Increase",
            description: "More customers linking their bank accounts",
            bgColor: "bg-purple-200",
            textColor: "text-purple-800"
          }
        ]
      }
    ]
  }
};

export default paypal; 