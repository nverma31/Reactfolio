const sixtShare = {
  projectName: "SIXT Share",
  projectDescription: "Integrating shared micro-mobility partners within SIXT share with a focus on increasing customer engagement and retention.",
  projectURL: "",
  githubRepositoryURL: "",
  tags: "Product Design, UX Research, Mobile App Design, Micro-mobility",
  date: "Dec 2021 - June 2022",
  imageUrl: "/images/projects/sixt-share/card.png",
  details: {
    timeline: "Dec 2021 - June 2022",
    platform: "Mobile Application",
    role: "Lead Product Designer",
    heroImage: "/images/projects/sixt-share/hero.png",
    heroImageAlt: "SIXT Share Micro-mobility Integration",
    customTitle: "Shared Micro-mobility to SIXT Share",
    sections: [
      {
        id: "introduction",
        type: "introduction",
        title: "Introduction",
        content: [
          "SIXT share offers car sharing to its customers via the share tab in the SIXT app. Due to shortage of cars because of the semiconductor crisis after Corona, Sixt share could not meet the demands of its customers and had declining customers and revenue.",
          "It was decided that SIXT Share will now also offer shared micro-mobility along with shared cars with a focus to increase its customer base, market footprint, and revenue."
        ]
      },
      {
        id: "my-role",
        type: "introduction",
        title: "My Role",
        content: "I was the lead product designer and designed the entire flow and screens. Coordinated with Product managers, engineers, operations, marketing, research, and external partners."
      },
      {
        id: "understand",
        type: "introduction",
        title: "01. Understand",
        content: "We started with understanding the micro-mobility space by conducting a competitive benchmarking. With our improved understanding, we planned field research with users of our future micro-mobility partners to better understand their attitudes and behaviour."
      },
      {
        id: "key-insights",
        type: "keypoints",
        title: "Key Insights",
        content: [
          {
            label: "Use Case",
            heading: "Mostly people use micro-mobility for the last mile.",
            description: "Mostly people use micro-mobility for the similar use of doing the last mile. However, that is more atypical of E-scooters. Mopeds and bikes are also sometimes used for normal traveling purpose of commuting.",
            icon: "🚲"
          },
          {
            label: "Selection",
            heading: "Price and Proximity are the key factors while choosing a vehicle.",
            description: "People are not loyal to a particular micro-mobility partner. They look for the nearest available vehicle while thinking about the price. Even most times people are agnostic of the kind of micromobility.",
            icon: "💸"
          },
          {
            label: "Driving Behaviour",
            heading: "People assume vehicles to be driven in the usual way.",
            description: "Different brand have some peculiar behaviour of driving that is a real pain-point for users as they expect all of them to be unlocked, driven, parked in the similar way. People look for support when they run into these issues.",
            icon: "🛴"
          },
          {
            label: "Journey Planning",
            heading: "People want to know where can I go, park and end.",
            description: "Since city administrations have a lot of say in how in the operations of these vehicles. People always want to know upfront where can they drive it, park it, or end their journey. Also, want to know of fines or fees in case they didn't follow these restrictions.",
            icon: "🗺️"
          }
        ]
      },
      {
        id: "defining-success",
        type: "introduction",
        title: "02. Defining Success",
        content: "As we were gaining a deeper understanding of both users and the micro-mobility business, we established certain guiding principles for our product, which determined the product requirements."
      },
      {
        id: "explorations-alternating",
        type: "alternating-feature",
        title: "Explorations and Key Design Decisions",
        content: "Many aspects of the user journey required me to explore many possible design solutions. I always kept going to our goals, product requirements and principles we have defined earlier while finalising a design choice. Following are some important explorations and key design decisions:",
        features: [
          {
            title: "Filter chips for mobility type selection",
            description: "I used filter chips that are expandable on selection and collapse on de-selection to allow users to filter the vehicles they are interested in.",
            image: "/images/projects/sixt-share/exp1.png",
            imageAlt: "",
          },
          {
            title: " Vehicle clusters and city markers at higher zoom level",
            description: "With too many partners and many vehicles, I designed vehicle clusters and new city markers to declutter and simplify the map experience.",
            image: "/images/projects/sixt-share/exp2.png",
            imageAlt: ""
          },
          {
            title: " New vehicle markers",
            description: "I designed new, visually distinct vehicle markers which highlight the particular mobility option to make it easier for users to identify the type.",
            image: "/images/projects/sixt-share/exp3.png",
            imageAlt: ""
          },
          {
            title: "Communicating additional zones information",
            description: "With additional types of zones offered by the partners, a new color scheme along with new snackbars were added to communicate the zones better.",
            image: "/images/projects/sixt-share/exp4.png",
            imageAlt: ""
          },
          {
            title: "Redesigned floating action buttons for map actions",
            description: "We already had three FABs for key actions, but with partners we needed more. I switched to an expandable FAB that reveals all available actions including the QR scanner.",
            image: "/images/projects/sixt-share/exp5.png",
            imageAlt: ""
          },
          {
            title: "Direct user's attention to key journey steps",
            description: "Modal bottom sheets were used at key journey points like parking, unlocking, ending trips—since these differ across vehicle types and partners.",
            image: "/images/projects/sixt-share/exp6.png",
            imageAlt: ""
          },
          {
            title: "Interrupting the flow in critical cases",
            description: "To transparently communicate penalties or fees, modal dialogues interrupt the flow to force acknowledgment.",
            image: "/images/projects/sixt-share/exp7.png",
            imageAlt: ""
          }
        ]
      },
      {
        id: "final-design",
        type: "introduction",
        title: "04. Final Design",
        content: "We first launched with TIER as our partner with all modes—e-scooters, mopeds, and bikes. This expanded our reach beyond Germany and the Netherlands into cities across Europe. We later integrated Nextbike (bikes), Cooltra (mopeds), and MILES (cars) using the same design system."
      },
      {
        id: "vehicle-flows",
        type: "feature",
        title: "Vehicle Flows",
        features: [
          {
            title: "Moped Flow",
            description: "Users can book via the map or by scanning a QR code, see onboarding, unlock using a pin, park/resume, and end the trip in designated business areas.",
            image: "/images/projects/sixt-share/mopeds.png",
            imageAlt: "Moped booking and usage flow"
          },
          {
            title: "E-Scooter Flow",
            description: "A similar flow to mopeds, with differences in locking, parking, and ending highlighted using in-context action sheets.",
            image: "/images/projects/sixt-share/escooter.png",
            imageAlt: "E-Scooter booking and usage flow"
          },
          {
            title: "Bike Flow",
            description: "Mirrors the moped/e-scooter flows with tailored action sheets to explain key differences like locking/unlocking and parking.",
            image: "/images/projects/sixt-share/bikes.png",
            imageAlt: "Bike booking and usage flow"
          }
        ]
      },
      {
        id: "impact",
        type: "impact",
        title: "05. Impact",
        content: [
          {
            label: "Market Expansion",
            value: "6 countries",
            subtitle: "with own or partner vehicles",
            description: "From just Germany and Netherlands to 6 countries in Eruope with a total of 21 European cities",
            bgColor: "bg-blue-200",
            textColor: "text-blue-800"
          },
          {
            label: "User Growth",
            value: "72%",
            subtitle: "increase monthly active users",
            description: "We saw 72% increase in Monthly Active Users YOY after the launch of the micro-mobility.",
            bgColor: "bg-green-200",
            textColor: "text-green-800"
          },
          {
            label: "Business Impact",
            value: "15%",
            subtitle: "Revenue increase",
            description: "We saw a 15% increase in revenue YOY after the launch of the micro-mobility.",
            bgColor: "bg-purple-200",
            textColor: "text-purple-800"
          }
        ]
      },
      {
        id: "learnings",
        type: "learnings",
        title: "Learnings",
        content: [
          {
            title: "User Education is Critical",
            description: "Clear onboarding and contextual guidance are essential when introducing new mobility options and partners to ensure users feel confident and avoid confusion."
          },
          {
            title: "Consistency Drives Trust",
            description: "A unified experience across all vehicle types and partners helps build user trust and reduces friction in the journey."
          },
          {
            title: "Flexibility Increases Engagement",
            description: "Allowing users to choose from a variety of vehicles and partners increases engagement and broadens the customer base."
          },
          {
            title: "Transparent Communication Reduces Support Load",
            description: "Proactively communicating rules, zones, and fees reduces user frustration and the need for customer support interventions."
          },
          {
            title: "Iterative Design is Key",
            description: "Continuous testing and iteration with real users is vital to refine flows and address pain points unique to micro-mobility."
          }
        ]
      }
    ]
  }
};

export default sixtShare; 