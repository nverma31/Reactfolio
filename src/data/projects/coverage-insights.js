const coverageInsights = {
  projectName: "From Wallet to Advisor",
  projectDescription: "A case study on transforming a simple policy app into a proactive advisory tool. See how a strategic pivot to life-stage personalization unlocked a 400% increase in cross-sell opportunities.",
  projectURL: "",
  githubRepositoryURL: "",
  tags: "Node.js, React.js, PostgreSQL, GraphQL",
  date: "Oct 2024 - Present | @ CLARK",
  imageUrl: "/images/projects/coverage-insights/cardimage.png",
  details: {
    timeline: "Oct 2024 - Present",
    platform: "Mobile Application",
    role: "Senior Product designer",
    heroImage: "/images/projects/coverage-insights/hero.png",
    heroImageAlt: "Coverage Insights Platform Overview",
    customTitle: "From Wallet to Advisor: Driving 240% Revenue Growth",
    sections: [
      {
        id: "introduction",
        type: "introduction",
        title: "Introduction",
        content: [
          "This case study details the strategic design and implementation of Coverage Insights, a sophisticated in-app recommendations engine for Tom and Polly, CLARK's UK brands specializing in insurance for parents. The goal was to evolve the apps from passive policy managers into proactive, trustworthy platforms that deliver personalized insurance recommendations, build deeper customer relationships, and unlock significant business growth. ",
          
        ]
      },
      {
        id: "my-role",
        type: "introduction",
        title: "My Role",
        content: [
                  "As the lead designer, I solely owned the end-to-end design, from research and strategy to UX/UI, prototyping, testing, and implementation across two brands, influencing both strategy and execution. This involved close collaboration with product leadership to define this strategic vision, working directly with engineering leads to ensure data feasibility for personalization, and presenting key design milestones and their rationale to executive stakeholders to secure buy-in.",
        ]
      },
      {
        id: "problem",
        type: "introduction",
        title: "Problem",
        content: "Initially, the Tom and Polly apps were seen merely as policy management apps for your life insurance that you bought with Tom and Polly. This was failing to inform users about other relevant insurance, which stunted business growth and didn't proactively aid users. "
      },
      {
        id: "problem-callout",
        type: "callout",
        title: "Framing the problem",
        content: "How to effectively introduce and recommend relevant additional insurance products to existing life insurance customers in a way that felt personalized, valuable, and timely, enhancing trust rather than feeling like an unwanted upsell?"
      },

      {
        id: "Vision",
        type: "introduction",
        title: "Vision",
        content: "We aimed to transform the apps into trusted advisory platforms, significantly increasing the cross-sell rate of additional products and deepening customer loyalty by demonstrating tangible, personalized value."
      },
      {
        id: "vision-callout",
        type: "callout",
        title: "Becoming a Trusted Financial Partner",
        content: "We aimed to transform the apps into trusted advisory platforms, significantly increasing the cross-sell rate of additional products and deepening customer loyalty by demonstrating tangible, personalized value."
      },
      ,
      
      {
        id: "process",
        type: "feature",
        title: "A Continuous Discovery Process",
        features: [
          {
            title: "Explorative Research in the Beginning",
            description:"To ground our strategy in reality, I began by conducting 12 in-depth qualitative interviews with existing customers. The goal was to uncover their mental models, pain points, and triggers related to buying insurance.",
            image: "/images/projects/coverage-insights/interviewnotes.png",
            imageAlt: "Affinity diagram of the interview notes."
          },
          {
            id: "key-insights",
            type: "keypoints",
            title: "Key Research Insights from the qualitative interviews",
            features: [
              {
                label: "Price",
                heading: "Price Triggers the Search",
                description: "Most people only think about insurance when their premium increases—typically at renewal time. Price changes are the #1 reason users start shopping around."
              },
              {
                label: "Comparison",
                heading: "Comparison First, Loyalty Last",
                description: "Users go straight to comparison websites (e.g. MoneySuperMarket) to scout for deals. They aren't loyal to one insurer—switching annually is common if the deal is better."
              },
              {
                label: "Life Changes",
                heading: "Life Changes Spark New Needs",
                description: "Turning 40, buying a home, having kids—personal milestones prompt users to seek out life or health coverage for peace of mind and future planning."
              },
              {
                label: "Value",
                heading: "Value = Price + Trust",
                description: "While price gets attention, final decisions rely on brand reputation and customer reviews. Users prefer well-rated, recognizable names—even if slightly more expensive."
              }
            ]
          },
          {
            title: "Kicking off with supercharged ideation",
            description: "Armed with these insights, I facilitated \"supercharged ideation\" workshops with a diverse group of stakeholders, including Sales, Operations, Compliance, Business, and Technology. This cross-functional collaboration ensured our ideas were desirable, viable, and technically feasible from the start.",
           
          },
          {
            title: "Quickly Getting Started and Testing Ideas",
            description: "Leveraging our existing design system, we were able to quickly translate the most promising ideas from the workshops into tangible, low-fidelity prototypes. This allowed us to test concepts rapidly without significant engineering investment. Early feedback helped us discard ideas that didn't resonate and identify a core set of features for an initial MVP.",
            images: [
              {
                src: "/images/projects/coverage-insights/proto1.png",
                alt: "Initial prototype of the coverage insights tested with the users highlighting coverage gaps and recommended products"
              },
              {
                src: "/images/projects/coverage-insights/Proto2.png",
                alt: "Another iteration of the coverage insights tested with the users with insurance overview and more catergories"
              }
            ]
          }
        ]
      },
      {
        id: "final-designs",
        type: "alternating-feature",
        title: "An Initial MVP launch",
        content: "In the MVP we presented the users with coverage insights based on basic data points they had already provided. This allowed us to get a functional version to market quickly while we continued to learn.",
        features: [
          {
            title: "Coverage Insights in Home Screen",
            description: "The coverage insights tells the users what they are covered for and what they should get to achieve financial security and peace of mind.",
            image: "/images/projects/coverage-insights/homenew.png",
            imageAlt: "Coverage Insights Recommendations Interface"
          },
          {
            title: "Insights details page",
            description: "Here user can see the details of the coverage insights and get more information about the insurance products that are recommended.",
            image: "/images/projects/coverage-insights/insightsold.png",
            imageAlt: "Coverage Insights Life Stage Detection"
          },
          {
            title: "Insurance category details page",
            description: "These pages informs the users what the recommended insurance is all about and how it can benefit them.",
            image: "/images/projects/coverage-insights/categorynew.png",
            imageAlt: "Coverage Insights Life Stage Detection"
          }
        ]
      },
      {
        id: "final-refinement",
        type: "feature",
        title: "Continuous Refinement and key strategic pivot",
        features: [
          {
            title: "A/B Testing Many Improvements",
            description: " We introduced insurance suggestions can vary depending on where you are in life to make it more personal. We started with four key life stages for our core user demographics - Independent, Young family, Next chapter, and Growing family.",
            images: [
              {
                src: "/images/projects/coverage-insights/abtest.png",
                alt: "One A/B test that enables us to simplify the structure of the recommendations"
              },
              {
                src: "/images/projects/coverage-insights/abtest2.png",
                alt: "Another A/B test where we experimented with the CTA of the insights sections on the home page with different copy and designs"
              }
            ]
          },
          {
            title: "A Key Strategic Refinement: Pivot to Life Stages",
            description: "Ongoing user testing revealed a key insight: recommendations tied to life events performed best. This prompted a strategic pivot, reframing the problem from \"What can we sell?\" to \"How can we help at this life stage?\" This \"Life Stages\" model unlocked true personalization, transforming the feature from a simple cross-sell tool into a genuine advisory experience.",
            image: "/images/projects/coverage-insights/lifestages.png",
            imageAlt: "Life stages based coverage insights for Polly"
          }
        ]
      },
      {
        id: "impact-section",
        type: "impact",
        title: "Project Impact",
        copyText: "The introduction of coverage insights as a key tool for cross sell enabled us to increase the cross sell rate of additional insurance products to existing customers, which in turn increased the revenue generated from the apps..",
        content: [
          {
            label: "Revenue",
            value: "240%",
            subtitle: "Year-over-year growth",
            description: "We have reached last year total revenue by May and we are seeing growth in monthly revenues by 40%",
            bgColor: "bg-yellow-200",
            textColor: "text-yellow-800"
          },
          {
            label: "Cross sell opportunities",
            value: "$400%",
            subtitle: "Increase in callback requested",
            description: "We have seen a 400% increase in cross-sell opportunities, which went from 0.5% to 2,5%.",
            bgColor: "bg-gray-200",
            textColor: "text-gray-800"
          }
        ]
      },
      {
        id: "learnings",
        type: "learnings",
        title: "Learnings",
        content: [
          {
            title: "Discovery is a Mindset, Not a Phase",
            description: "This project proved the value of continuous discovery. Our biggest strategic win—the pivot to \"Life Stages\"—came from insights gathered months after the initial launch, highlighting the need to constantly learn and be willing to reframe the problem."
          },
          {
            title: "Lead with Strategy, Validate with Data",
            description: "My most impactful contribution was not a specific UI, but successfully championing the strategic shift from a product-based to a needs-based model. This vision was born from qualitative insights and ultimately validated by a massive uplift in our quantitative metrics."
          },
          {
            title: "Cross-Functional Ideation Unlocks Better Solutions",
            description: "Involving stakeholders from Sales and Compliance early in the process brought invaluable perspectives that we, as designers and engineers, would have missed on our own."
          },
          {
            title: "A Design System is a Living Product",
            description: "We learned to treat our design system not as a static library, but as a product in itself. This project required us to contribute back, evolving the system to meet the needs of more complex, data-driven features."
          }
        ]
      }
    ]
  }
};

export default coverageInsights; 