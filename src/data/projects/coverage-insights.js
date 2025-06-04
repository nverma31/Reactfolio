const coverageInsights = {
  projectName: "Coverage Insights",
  projectDescription: "Strategic design and implementation of a sophisticated in-app recommendations engine for the Tom and Polly mobile applications.",
  projectURL: "",
  githubRepositoryURL: "",
  tags: "Node.js, React.js, PostgreSQL, GraphQL",
  date: "Oct 2024 - Present",
  imageUrl: "/images/projects/coverage-insights/cardimage.png",
  details: {
    timeline: "Oct 2024 - Present",
    platform: "Mobile Application",
    role: "Senior Product designer",
    heroImage: "/images/projects/coverage-insights/hero.png",
    heroImageAlt: "Coverage Insights Platform Overview",
    customTitle: "Coverage Insights - Personalized Insurance Recommendations",
    sections: [
      {
        id: "introduction",
        type: "introduction",
        title: "Introduction",
        content: [
          "Tom and Polly are a UK-based company specializing in insurances for Mums and Dads. ",
          "This case study details the strategic design and implementation of a sophisticated in-app recommendations engine for the Tom and Polly mobile applications."
        ]
      },
      {
        id: "my-role",
        type: "introduction",
        title: "My Role",
        content: [
          "As Lead Designer, I solely owned the end-to-end design, from research and strategy to UX/UI, prototyping, testing, and implementation across two brands, influencing both strategy and execution."
        ]
      },
      {
        id: "problem",
        type: "introduction",
        title: "Problem",
        content: "Initially, the Tom and Polly apps were seen merely as policy management apps for your life insurance that you bought with Tom and Polly. This was failing to inform users about other relevant insurance, which stunted business growth and didn't proactively aid users. The core challenge was to evolve them into proactive, trustworthy platforms for personalized insurance recommendations, respecting the distinct Tom and Polly brand identities."
      },
      {
        id: "problem-callout",
        type: "callout",
        title: "Framing the problem",
        content: "How to effectively introduce and recommend relevant additional insurance products to existing life insurance customers in a way that felt personalized, valuable, and timely, enhancing trust rather than feeling like an unwanted upsell?"
      },
      {
        id: "Discovery",
        type: "introduction",
        title: "Discovery",
        content: [
          "We conducted qualitative interviews to explore how people currently understand and purchase life insurance, uncovering key pain points and mental models.",
          "We also carried out competitive benchmarking of both traditional life insurance's online buying journey and price comparison sites to identify gaps and best practices in the market."
        ]
      },
      {
        id: "key-insights",
        type: "keypoints",
        title: "Key Research Insights",
        content: [
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
        id: "Vision",
        type: "introduction",
        title: "Vision",
        content: "Our discovery enabled us to have a very strong vision for the product.."
      },
      {
        id: "vision-callout",
        type: "callout",
        title: "Enhanced Financial Protection",
        content: "Our vision for the app recommendations was to significantly increase the cross-sell rate of additional insurance products to existing life insurance customers. We aimed to transform the apps into proactive platforms for financial protection discovery and provide more holistic and personalized value to our customers."
      },
      {
        id: "process",
        type: "feature",
        title: "How we got there",
        features: [
          {
            title: "Starting with Speed and Collaboration",
            description: "We began with rapid prototyping and close collaboration between design, product, and engineering teams to ensure quick iterations and alignment on goals. Since, we needed to create a new recommendation engine, there was constant alignment with the data engineering team to ensure we were using the right data and that we were using it in the right way."
          },
          {
            title: "Iteration and Validation",
            description: "Through extensive usability testing and A/B testing, we refined the recommendation engine to ensure it provided clear, actionable insights while maintaining a personalized touch.",
            images: [
              {
                src: "/images/projects/coverage-insights/interviewnotes.png",
                alt: "Usability testing notes and insights"
              },
              {
                src: "/images/projects/coverage-insights/abtest.png",
                alt: "One of the A/B tests we did to test different designs. The right one performed 50% better."
              }
            ]
          },
          {
            title: "Adapting Content and Brand Specification",
            description: "We carefully crafted category pages and implemented brand-specific changes to ensure the recommendations felt native to each brand's identity while maintaining consistency in the user experience.",
            image: "/images/projects/coverage-insights/content.png",
            imageAlt: "Each insurance category page needed to be tailored to the brand's identity and tone of voice."
          }
        ]
      },
      {
        id: "final-designs",
        type: "alternating-feature",
        title: "Final Designs",
        content: "Our final designs focused on creating an intuitive and personalized experience for users to discover and understand their insurance needs.",
        features: [
          {
            title: "Coverage Insights in Home Screen",
            description: "The coverage insights tells the users what they are covered for and what they should get to achieve financial security and peace of mind. We started with categorising information based on insurance types but later evolved to needs based categorisation.",
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
            description: "These pages informs the users about the what that insurance is all about and how it can benefit them.",
            image: "/images/projects/coverage-insights/categorynew.png",
            imageAlt: "Coverage Insights Life Stage Detection"
          }
        ]
      },
      {
        id: "final-refinement",
        type: "feature",
        title: "Final Refinement",
        features: [
          {
            title: "Life stages based coverage insights",
            description: " We introduced insurance suggestions can vary depending on where you are in life to make it more personal. We staretd with four key life stages for our core user demographics - Independent, Young family, Next chapter, Growing family.",
            image: "/images/projects/coverage-insights/lifestages.png",
            imageAlt: "Life stages based coverage insights for Polly"
          }
        ]
      },
      {
        id: "learnings",
        type: "learnings",
        title: "Learnings",
        content: [
          {
            title: "Personalization Drives Value",
            description: "Tailoring recommendations to user life stages and needs significantly increases engagement and perceived value."
          },
          {
            title: "Trust is Earned Through Transparency",
            description: "Clear communication about why products are recommended and how data is used builds user trust."
          },
          {
            title: "Simplicity Wins",
            description: "Reducing complexity in both UI and product explanations helps users make confident decisions."
          },
          {
            title: "Continuous Feedback Improves Outcomes",
            description: "Regular user testing and feedback loops are essential for refining recommendations and user flows."
          },
          {
            title: "Brand Consistency Matters",
            description: "Adapting the experience to each brand's tone and style increases user comfort and adoption."
          }
        ]
      },
      {
        id: "impact-section",
        type: "impact",
        title: "Project Impact",
        copyText: "The digital transformation of our life insurance platform has delivered significant improvements across key business metrics, demonstrating the value of user-centered design in regulated industries.",
        content: [
          {
            label: "Revenue",
            value: "240%",
            subtitle: "Year-over-year growth",
            description: "We have reached last year total revenue before the end of May and we are seeing growth in monthly revenues by 40%",
            bgColor: "bg-yellow-200",
            textColor: "text-yellow-800"
          },
          {
            label: "Cross sell opportunities",
            value: "$400%",
            subtitle: "Increase in callback requested",
            description: "We have seen a 400% increase in cross-sell opportunities, which went from 0.5% to 2,5%(for first 8 weeks).",
            bgColor: "bg-gray-200",
            textColor: "text-gray-800"
          }
        ]
      },
      {
        id: "what-we-learned",
        type: "learnings",
        title: "What we learned",
        content: [
          {
            title: "Power of Existing Data (Used Right)",
            description: "Our life insurance customers had already shared valuable information. Using this (transparently) as a foundation for relevant recommendations proved far more effective than generic marketing. Recommendations needed to feel like a natural extension of the service, not a misuse of data."
          },
          {
            title: "Iterative Approach to Sophistication",
            description: "Starting with a simpler needs overview allowed us to launch, learn, and then build more sophisticated features like life-stage triggers. This phased approach was crucial for managing complexity and delivering value incrementally."
          },
          {
            title: "The \"Why\" Before the \"What\"",
            description: "Leading with an overview of why certain insurances might be relevant before pushing a specific product was key to making recommendations feel like helpful guidance rather than a sales pitch."
          },
          {
            title: "Continuous Testing is Key",
            description: "Multiple rounds of user testing were invaluable. What seemed like a clear recommendation internally sometimes needed significant refinement based on real user feedback to ensure it was understood and well-received."
          }
        ]
      }
    ]
  }
};

export default coverageInsights; 