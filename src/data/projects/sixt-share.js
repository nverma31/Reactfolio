const sixtShare = {
  projectName: "SIXT Share",
  projectDescription: "Adding Shared Micro-mobility to SIXT Share - Integrating shared micro-mobility partners within SIXT share with a focus on increasing customer engagement and retention.",
  projectURL: "",
  githubRepositoryURL: "",
  tags: "Product Design, UX Research, Mobile App Design, Micro-mobility",
  date: "Dec 2021 - June 2022",
  details: {
    timeline: "Dec 2021 - June 2022",
    platform: "Mobile Application",
    role: "Lead Product Designer",
    heroImage: "/images/projects/sixt-share/hero.png",
    heroImageAlt: "SIXT Share Micro-mobility Integration",
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
        id: "defining-success",
        type: "introduction",
        title: "02. Defining Success",
        content: "As we were gaining a deeper understanding of both users and the micro-mobility business, we established certain guiding principles for our product, which determined the product requirements."
      },
      {
        id: "explorations",
        type: "feature",
        title: "03. Explorations and Key Design Decisions",
        features: [
          {
            title: "03.01 – Filter chips for mobility type selection",
            description: "I used filter chips that are expandable on selection and collapse on de-selection to allow users to filter the vehicles they are interested in.",
            image: "/images/projects/sixt-share/filter-chips.png",
            imageAlt: "Filter chips for mobility type selection"
          },
          {
            title: "03.02 – Vehicle clusters and city markers",
            description: "With too many partners and many vehicles, I designed vehicle clusters and new city markers to declutter and simplify the map experience.",
            image: "/images/projects/sixt-share/vehicle-clusters.png",
            imageAlt: "Vehicle clusters and city markers"
          },
          {
            title: "03.03 – New vehicle markers",
            description: "I designed new, visually distinct vehicle markers which highlight the particular mobility option to make it easier for users to identify the type.",
            image: "/images/projects/sixt-share/vehicle-markers.png",
            imageAlt: "New vehicle markers design"
          },
          {
            title: "03.04 – Communicating additional zones information",
            description: "With additional types of zones offered by the partners, a new color scheme along with new snackbars were added to communicate the zones better.",
            image: "/images/projects/sixt-share/zones-info.png",
            imageAlt: "Additional zones information display"
          },
          {
            title: "03.05 – Redesigned floating action buttons",
            description: "We already had three FABs for key actions, but with partners we needed more. I switched to an expandable FAB that reveals all available actions including the QR scanner.",
            image: "/images/projects/sixt-share/fab-redesign.png",
            imageAlt: "Redesigned floating action buttons"
          },
          {
            title: "03.06 – Direct user's attention to key journey steps",
            description: "Modal bottom sheets were used at key journey points like parking, unlocking, ending trips—since these differ across vehicle types and partners.",
            image: "/images/projects/sixt-share/journey-steps.png",
            imageAlt: "Key journey steps with modal bottom sheets"
          },
          {
            title: "03.07 – Interrupting the flow in critical cases",
            description: "To transparently communicate penalties or fees, modal dialogues interrupt the flow to force acknowledgment.",
            image: "/images/projects/sixt-share/critical-cases.png",
            imageAlt: "Critical case interruptions"
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
            image: "/images/projects/sixt-share/moped-flow.png",
            imageAlt: "Moped booking and usage flow"
          },
          {
            title: "E-Scooter Flow",
            description: "A similar flow to mopeds, with differences in locking, parking, and ending highlighted using in-context action sheets.",
            image: "/images/projects/sixt-share/scooter-flow.png",
            imageAlt: "E-Scooter booking and usage flow"
          },
          {
            title: "Bike Flow",
            description: "Mirrors the moped/e-scooter flows with tailored action sheets to explain key differences like locking/unlocking and parking.",
            image: "/images/projects/sixt-share/bike-flow.png",
            imageAlt: "Bike booking and usage flow"
          }
        ]
      },
      {
        id: "interaction-design",
        type: "introduction",
        title: "Immersion with Interaction Design",
        content: "In line with creating a feel for the real vehicles, we used motion design to immerse users and help them experience what it's like."
      },
      {
        id: "responsive-design",
        type: "introduction",
        title: "Map Selection and Unlock",
        content: "Everything was designed responsively, with consistent visuals and behavior across all viewports."
      },
      {
        id: "impact",
        type: "impact",
        title: "05. Impact",
        content: [
          {
            label: "Market Expansion",
            value: "Europe-wide",
            subtitle: "Expanded footprint",
            description: "From Germany and Netherlands to multiple European cities",
            bgColor: "bg-blue-200",
            textColor: "text-blue-800"
          },
          {
            label: "User Growth",
            value: "Increased",
            subtitle: "Monthly Active Users",
            description: "Higher engagement and retention",
            bgColor: "bg-green-200",
            textColor: "text-green-800"
          },
          {
            label: "Revenue",
            value: "Growth",
            subtitle: "Business impact",
            description: "Increased transactions and revenue",
            bgColor: "bg-purple-200",
            textColor: "text-purple-800"
          }
        ]
      }
    ]
  }
};

export default sixtShare; 