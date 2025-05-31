import { useParams } from "react-router-dom";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { projectSlug } = useParams();

  // In a real application, you would fetch project data here
  // For now, we'll use a placeholder project name
  const projectName = projectSlug.replace(/-\s*/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Simple slug to title conversion

  // Define sections for side navigation
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'my-role', title: 'My Role' },
    { id: 'problem', title: 'Problem' },
    { id: 'goals', title: 'Goals' },
    { id: 'impact', title: 'Impact' },
    { id: 'our-users', title: 'Our Users' },
    { id: 'process', title: 'Process' },
    { id: 'final-designs', title: 'Final Designs' },
    { id: 'what-we-learned', title: 'What we learned' },
    { id: 'future', title: 'Future' },
    // Add other sections as needed based on your content
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 flex font-inter">
        {/* Side Navigation */}
        <SideNavigation sections={sections} />

        {/* Main Content */}
        <article className="max-w-7xl mx-auto lg:mx-0 lg:ml-64 lg:w-[calc(100%-16rem)]">
          {/* Hero Image Section */}
          <div className="mb-8 w-full"> {/* Full width for images */}
               <img
                  src={`/images/projects/${projectSlug}/hero.jpeg`}
                  alt={`${projectName} Hero Image`}
                  className="w-full h-auto block rounded-md"
               />
          </div>

          {/* Text Content Container */}
          <div className="max-w-xl lg:max-w-[70%]">
            {/* Header Section */}
            <header className="mb-12">
              <h1 className="text-6xl font-semibold leading-tight mb-8 font-inter-tight">Redesigning consumer fintech app experience for 4M users.</h1>
              <div className="border-b border-gray-300 mb-8"></div>
              <div className="text-gray-500 text-sm mb-8 font-inter-tight flex justify-between">
                <span className="mr-4"><strong>Timeline:</strong><br/> Dec 2019—Early 2022</span>
                <span className="mr-4"><strong>PLATFORM:</strong><br/> iOS & Android App</span>
                <span><strong>MY ROLE:</strong><br/> Senior Product Designer</span>
              </div>
              <div className="border-b border-gray-300 mb-12"></div>
            </header>

            {/* Introduction Section */}
            <section id="introduction" className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Introduction</h2>
              <p className="text-base md:text-lg font-light mb-4">
                Fave is one of Southeast Asia's fintech startup that helps consumers save, while empowering small and medium-sized enterprises to grow in the digital economy. Fave's key offering includes cashless payments, online/offline deals and other offers. Fave has been acquired by PineLabs, an India-based unicorn on April 2021. (Placeholder Text)
              </p>
              <p className="text-base md:text-lg font-light mb-4">In this project, we revamped the user experience and redesigned the UI, which is one of the largest projects at Fave since 2019. (Placeholder Text)</p>
              {/* Placeholder for image/visual */}
              {/* <div className="mt-8 h-64 bg-gray-200 flex items-center justify-center text-gray-500">Placeholder Image/Visual</div> */}
            </section>

            {/* My Role Section */}
            <section id="my-role" className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">My Role</h2>
              <p className="text-base md:text-lg font-light mb-4">As the Lead Designer on this initiative for a focused 6-month period, <strong>I was solely responsible for the end-to-end design process</strong>. This meant personally driving every aspect of the design, from initial research and strategy through to final UI, prototyping, and collaboration with engineering for implementation across both the Tom and Polly apps.</p>
            </section>

            {/* Problem Section */}
            <section id="problem" className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Problem</h2>
              <p className="text-base md:text-lg font-light mb-6">Since 2016, Fave's app experience has not been changed. Here are the key problems with the core experience. (Placeholder Text)</p>

              {/* Problem 1 */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">No Relevancy</h3>
                <p className="text-base md:text-lg font-light mb-2">Irrelevant content directly impacts the conversion rate. Every individual is unique but every day, the app recommends irrelevant content that are not personalised to our users. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">EXAMPLE: The app shows female Deals to men—the user might feel that the app is not for him, and he might never use the app again. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">IMPACT: With no relevant content, users tend to not use the app and spend less time on it. (Placeholder Text)</p>
                {/* Placeholder for image/visual */}
                {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Problem 1 Visual</div> */}
              </div>

              {/* Problem 2 */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">No Defined Journey</h3>
                <p className="text-base md:text-lg font-light mb-2">Unclear user experience leads to frustration in users—in turn increases the drop off rate. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">EXAMPLE: There are multiple entry points to perform the same action. Users can scan the QR and FavePay in 3 different ways. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">IMPACT: With no defined journey, users easily get lost and lead to low conversion. (Placeholder Text)</p>
                 {/* Placeholder for image/visual */}
                {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Problem 2 Visual</div> */}
              </div>

               {/* Problem 3 */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Brand & Product Perception</h3>
                <p className="text-base md:text-lg font-light mb-2">The copywriting and visual elements do not speak to our brand—they lack consistent emotional branding and a clear strategy. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">EXAMPLE: Our app messaging gives users the impression of low quality offers, like 'Shocking Deals'. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">IMPACT: A product without a strong branding is just an app. (Placeholder Text)</p>
                 {/* Placeholder for image/visual */}
                {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Problem 3 Visual</div> */}
              </div>

              {/* Problem 4 */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Inconsistent Experience</h3>
                <p className="text-base md:text-lg font-light mb-2">Inconsistent design breaks the user experience and increases technical debt. Users are more likely to be lost in the app. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">EXAMPLE: The design components look different on most pages, so when one component breaks, the app crashes. (Placeholder Text)</p>
                <p className="italic text-base md:text-lg font-light">IMPACT: Without a consistent and mature UI and design system, we will always spend time building on top of existing solutions. (Placeholder Text)</p>
                 {/* Placeholder for image/visual */}
                {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Problem 4 Visual</div> */}
              </div>

               {/* Defining the problem - Placeholder */}
              <p className="text-center font-semibold mt-8 font-inter-tight">Defining the problem (Placeholder)</p>
              <p className="text-center italic font-inter-tight">problem statement (Placeholder)</p>

            </section>

            {/* Goals Section */}
            <section id="goals" className="mb-12">
               <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Goals</h2>

               {/* Business Goals */}
               <div className="mb-8">
                 <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">BUSINESS GOALS</h3>
                 <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">Strengthen the value proposition of core products</h4>
                 <p className="text-base md:text-lg font-light mb-4">With new products introduced, we want to highlight our core product offerings that go beyond Deals. We aim to allow a habit-building & fast payment experience for our consumers, while strengthening product discovery on the app. (Placeholder Text)</p>
                 <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">Operational efficiency</h4>
                 <p className="text-base md:text-lg font-light">To optimize internal operations, we will build scalable design components, which will work across FavePay, Deals & eCards. (Placeholder Text)</p>
               </div>

               {/* User Goals */}
               <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">USER GOALS</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">Increase content relevancy</h4>
                  <p className="text-base md:text-lg font-light mb-4">To work with the data science and engineering team to build a recommendation engine that automatically shows consumers the most relevant content based on their past purchase behaviour, interests and most favourited brands. (Placeholder Text)</p>
                  <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">A delightful, consistent consumer experience</h4>
                  <p className="text-base md:text-lg font-light">To ensure a proper design system is in place to reduce technical debt, and give our consumers a better, consistent experience. (Placeholder Text)</p>
               </div>

            </section>

            {/* Impact Section */}
            <section id="impact" className="mb-12">
               <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Impact</h2>
               <p className="text-base md:text-lg font-light mb-4">As this is a huge project, we released the new designs in phases. For confidentiality reasons I have omitted the actual values for these metrics. (Placeholder Text)</p>
                {/* Placeholder for image/visual */}
                {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Impact Visual</div> */}
            </section>

             {/* Our Users Section */}
            <section id="our-users" className="mb-12">
               <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Our users</h2>
               <p className="text-base md:text-lg font-light mb-4">Before we started designing, we deep dive into existing behavioral and purchase data of our users to understand them better. We also conducted a series of customer interviews. (Placeholder Text)</p>
               <p className="text-base md:text-lg font-light mb-6">We focused on identifying what is <strong>the</strong> <span className="font-bold">job that our customers hire our product for.</span> (Placeholder Text)</p>
               <p className="text-base md:text-lg font-light mb-4">We defined 3 user archetypes, and mapped them to their respective jobs-to-be-done. (Placeholder Text)</p>

               {/* User Archetype 1 */}
                <div className="mb-8">
                    {/* Placeholder for image */}
                     {/* <div className="mb-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">User Archetype 1 Image</div> */}
                    <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">The Habitual Creature</h3>
                    <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">JOBS-TO-BE-DONE</h4>
                    <p className="text-base md:text-lg font-light mb-2">An early adopter seeking for convenience—She/he is a heavy FavePay user that value cashback with a potential cross sell to eCards. (Placeholder Text)</p>
                    <p className="text-base md:text-lg font-light">When I grab my morning coffee, I want to be able to pay with my mobile phone, so I can track my spending and get out of the queue faster. (Placeholder Text)</p>
                </div>

                {/* User Archetype 2 */}
                <div className="mb-8">
                    {/* Placeholder for image */}
                     {/* <div className="mb-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">User Archetype 2 Image</div> */}
                    <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">The Modern Saver</h3>
                    <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">JOBS-TO-BE-DONE</h4>
                    <p className="text-base md:text-lg font-light mb-2">A heavy FaveDeal user and less of a cashless adopter—which makes it hard to convert her/him to be a FavePay user. (Placeholder Text)</p>
                    <p className="text-base md:text-lg font-light">When I want to go for manicure, I want to find the cheapest offer, so I can keep the money for what is important for me and my family. (Placeholder Text)</p>
                </div>

                 {/* User Archetype 3 */}
                <div className="mb-8">
                    {/* Placeholder for image */}
                     {/* <div className="mb-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">User Archetype 3 Image</div> */}
                    <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">The Routine Breaker</h3>
                    <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">JOBS-TO-BE-DONE</h4>
                    <p className="text-base md:text-lg font-light mb-2">She/he is more adventurous and is open to try any type of product. (Placeholder Text)</p>
                    <p className="text-base md:text-lg font-light">When I don't know what to eat, I want to find new restaurants or cuisine so I can have new experiences with my colleagues and/or friends. (Placeholder Text)</p>
                </div>

            </section>

            {/* Process Section */}
            <section id="process" className="mb-12">
               <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Process</h2>

               {/* Design Sprints */}
               <div className="mb-8">
                 <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Design Sprints</h3>
                 <p className="text-base md:text-lg font-light mb-4">We conducted design sprints to facilitate collaboration cross-departments. Product Designers, Product Managers and Creatives contributed their fresh ideas in this sprint. The purpose of these sprints is to align everyone on the same goal—To improve our consumer experience by solving our user's problems today. (Placeholder Text)</p>
                  {/* Placeholder for image */}
                 {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Design Sprints Image</div> */}
               </div>

                {/* User Flows */}
               <div className="mb-8">
                 <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">User Flows</h3>
                  <p className="text-base md:text-lg font-light mb-4">We mapped each archetype to their user journey on the app, with their respective success metrics. (Placeholder Text)</p>
                   <p className="text-base md:text-lg font-light mb-4">On the left, we have the current user flow. (Placeholder Text)</p>
                    <p className="text-base md:text-lg font-light">On the right, we have the newly improved user flow. (Placeholder Text)</p>
                  {/* Placeholder for images */}
                 {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">User Flow Images</div> */}
                 <p className="text-base md:text-lg font-light mt-4">We mapped each flow with the percentage of tap events. (Placeholder Text)</p>
                  {/* Placeholder for images */}
                 {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">User Flow Images 2</div> */}
               </div>

               {/* Sketches */}
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Sketches</h3>
                   <p className="text-base md:text-lg font-light mb-4">I sketched multiple user flows to visualize ideas quickly. My focus at this stage is to diverge first, converge later. Here are some early sketches of the Brand page. (Placeholder Text)</p>
                   {/* Placeholder for image */}
                  {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Sketch Image</div> */}
                </div>

                 {/* Early designs */}
                 <div className="mb-8">
                     <h3 className="text-lg md:text-xl font-semibold mb-4 font-inter-tight">Early designs</h3>
                     <p className="text-base md:text-lg font-light mb-4">A sneak peek into my early wireframes, mid-fidelity designs and drafts. The designs have went through at least 30 iterations per screen. It is due to several reasons: Change in business direction, a pandemic, shift in product roadmap or simply to improve the user experience. (Placeholder Text)</p>

                     {/* Home Tab */}
                     <div className="mb-8">
                         <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">Home Tab</h4>
                         <p className="text-base md:text-lg font-light mb-4">We want our home tab to be personalised to each user. These are the various designs I've tried and did not make the cut. It could be due a number of reasons like unclear value proposition, cluttered designs, and lack of scalability. (Placeholder Text)</p>
                          {/* Placeholder for image */}
                          {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Home Tab Image</div> */}
                     </div>

                      {/* Explore Tab */}
                     <div className="mb-8">
                         <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">Explore Tab</h4>
                         <p className="text-base md:text-lg font-light mb-4">A place for further exploration so users could discover something new and interesting. Instead of asking users what Fave product they want to use, ask them what they want to do first. One of our design principles is that each screen is singular purpose. This is why we don't overwhelm the user with too much content on the Explore tab. (Placeholder Text)</p>
                          {/* Placeholder for image */}
                          {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Explore Tab Image</div> */}
                     </div>

                      {/* Collections */}
                     <div className="mb-8">
                          <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight">Collections</h4>
                          <p className="text-base md:text-lg font-light mb-4">We show users a collection of recommended deals or shops to visit. We needed a scalable design so in future Operations Team can automatically create useful collections based on deal/shop tags and reduce manual work. This also makes it easier for users to browse related content all in one place. (Placeholder Text)</p>
                            {/* Placeholder for image */}
                           {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Collections Image</div> */}
                     </div>

                     <p className="text-base md:text-lg font-light mb-4">We went through 200+ iterations. (Placeholder Text)</p>
                      <p className="text-base md:text-lg font-light">The initial designs went through several user tests, discussions with operations, marketing and business teams to ensure we have a friendly and scalable user experience. (Placeholder Text)</p>
                       <p className="text-base md:text-lg font-light">I wish I could show you every single part of the process! (Placeholder Text)</p>
                 </div>

                 {/* Usability Testing & Customer Interviews */}
                 <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Usability Testing & Customer Interviews</h3>
                      <p className="text-base md:text-lg font-light mb-4">To validate our designs or test prototypes, we did guerrilla testing with real users. Before the pandemic, we did this in-person. Now, our customer interviews are done remotely. (Placeholder Text)</p>
                      <p className="text-base md:text-lg font-light">We've tested the prototype with 17+ people in a controlled testing environment as well as the guerilla way. (Placeholder Text)</p>
                        {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Usability Testing Image</div> */}
                 </div>

             </section>

             {/* Final Designs Section */}
             <section id="final-designs" className="mb-12">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Final Designs</h2>
                  <p className="text-base md:text-lg font-light mb-6">Here's a detailed walkthrough of the revamped app. (Placeholder Text)</p>

                  {/* Looks new. Feels like home. */}
                   <div className="mb-8">
                       <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Looks new. Feels like home.</h3>
                        <p className="text-base md:text-lg font-light mb-4">Before the redesign, the app was cluttered, it had a lack of focus on Fave's core products. Now, Fave has a fresh new modern look and a better experience. To improve our brand and product perception, we introduced new, scalable components, redesigned micro-interactions and repositioned the product. (Placeholder Text)</p>
                        {/* Placeholder for image */}
                        {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">A new home Image</div> */}
                   </div>

                    {/* Introduction of the Lucid Design System */}
                   <div className="mb-8">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Introduction of the Lucid Design System</h3>
                        <p className="text-base md:text-lg font-light mb-4">**Lucid** is a scalable design system that saves time, reduces technical debt over time. It solves the problem of inconsistent components and user experience. (Placeholder Text)</p>
                         <p className="text-base md:text-lg font-light">**Lucid** consists of 100+ components with properly defined typography styles, icons and illustrations. Everything in the app is made up of these modular components—this gives a unified, consistent, robust UI. (Placeholder Text)</p>
                        <p className="text-base md:text-lg font-light">The design system is never final. It evolves as we go along. (Placeholder Text)</p>
                         {/* Placeholder for image */}
                        {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Design System Image</div> */}
                   </div>

                   {/* Your home is personalised to you */}
                   <div className="mb-8">
                       <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Your home is personalised to you</h3>
                       <p className="text-base md:text-lg font-light mb-4">The content you see is now more relevant. We collaborated with the data science and engineering team to implement full personalisation of the user experience to show you content based on past purchase behaviour and interests. (Placeholder Text)</p>
                        <p className="text-base md:text-lg font-light">The prominent QR scanner on the bottom menu has a 31% increase in usage. (Placeholder Text)</p>
                        {/* Placeholder for image */}
                       {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Homepage comparison Image</div> */}
                   </div>

                    {/* Designed for discovery: The Explore Tab */}
                   <div className="mb-8">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Designed for discovery: The Explore Tab</h3>
                        <p className="text-base md:text-lg font-light">The old 'Nearby' tab is replaced with 'Explore'. While it wasn't an easy decision to make, people can now navigate to discover new things easily. Detailed breakdown below. (Placeholder Text)</p>
                         {/* Placeholder for image */}
                        {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Explore page Image</div> */}
                   </div>

                   {/* Discover by Categories */}
                   <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Discover by Categories</h3>
                      <p className="text-base md:text-lg font-light">To encourage discovery, we reduced the friction when switching categories and products. With products as the main tab, people are aware of Fave's other products. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Category page Image</div> */}
                   </div>

                    {/* Discover eCards across different categories */}
                   <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Discover eCards across different categories</h3>
                      <p className="text-base md:text-lg font-light">Having a dedicated entry point to eCards also means users can discover eCards across multiple categories with a swipe. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">eCards Discovery Image</div> */}
                   </div>

                   {/* Improved Brand page */}
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Improved Brand page</h3>
                      <p className="text-base md:text-lg font-light">We have separated content into 3 pages for easier navigation. Social proof is also more prominent now, with the key brand information displayed upfront like cashback amount, FavePay button, opening hours, ratings, price range, and user's available cashback. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Shop Page Image</div> */}
                   </div>

                    {/* Revamped Deal Page */}
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Revamped Deal Page</h3>
                      <p className="text-base md:text-lg font-light mb-4">Besides making the photos more prominent, I rearranged the information on the Deal page to tell a better story. Based on customer feedback, there is lack of trust in deals. So, I paid extra attention to improving the trust through social proof, ratings and reviews, and displaying the most important information upfront to give clarity. (Placeholder Text)</p>
                       <p className="text-base md:text-lg font-light">Now, highly-rated reviews with a lengthy description will be shown first so it is more helpful for users than reviews with no comments. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Deal page Image</div> */}
                   </div>

                    {/* eCards with clearer messaging */}
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">eCards with clearer messaging</h3>
                      <p className="text-base md:text-lg font-light mb-4">Previously, people are unclear of the value of eCards, how to use it and where to utilize their bonus cashback. After several rounds of user testing to improve the messaging, pricing and discoverability, it has resulted in <span className="font-bold">19% increase in conversion rate</span>. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">eCard page Image</div> */}
                   </div>

                   {/* Humanized copy and delightful illustrations */}
                     <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Humanized copy and delightful illustrations</h3>
                      <p className="text-base md:text-lg font-light mb-4">People should feel like they're engaged in a conversation with Fave. (Placeholder Text)</p>
                      <p className="text-base md:text-lg font-light">I designed the illustrations for a delightful experience. Empty states, error states and loading screens are often the most overlooked, so I gave these screens more love. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Empty States Image</div> */}
                   </div>

                   {/* My Savings */}
                   <div className="mb-8">
                     <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">My Savings</h3>
                     <p className="text-base md:text-lg font-light">One of the most exciting mini screen we've launched. Now, people can see their monthly and lifetime savings with Fave, and share this to their friends as a humble brag. (Placeholder Text)</p>
                      {/* Placeholder for image */}
                     {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">My Savings Image</div> */}
                   </div>

                   {/* My Faves */}
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">My Faves</h3>
                      <p className="text-base md:text-lg font-light mb-4">People typically favourite deals to compare them for later, or favourite a shop for quick access so they can pay faster. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                      {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">My Faves Image</div> */}
                   </div>

             </section>

              {/* What we learned Section */}
             <section id="what-we-learned" className="mb-12">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">What we learned</h2>

                  {/* Adapt to the changing consumer behaviour */}
                   <div className="mb-8">
                       <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Adapt to the changing consumer behaviour</h3>
                       <p className="text-base md:text-lg font-light">We needed to stay grounded and focused on the goal, but also account for changes to the product to match the changed behavior of customers during the pandemic. (Placeholder Text)</p>
                       {/* Placeholder for image */}
                       {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Adapt to the changing consumer behaviour Image</div> */}
                   </div>

                    {/* Products don't exist in a vacuum */}
                   <div className="mb-8">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Products don't exist in a vacuum</h3>
                        <p className="text-base md:text-lg font-light mb-4">With a major user experience revamp, our internal processes are affected. For example, the operations team needs to change how they tag offerings or our merchandise. (Placeholder Text)</p>
                        <p className="text-base md:text-lg font-light">If we didn't collaborate with these teams, listened to their concerns, and evolved the tools they worked with, our beautiful app revamp would look nice only as a prototype, but fall flat once implemented in production. Hence, we had a lot of alignment initiatives going on in the background, such as re-defining our brand guidelines. (Placeholder Text)</p>
                         {/* Placeholder for image */}
                        {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Products don't exist in a vacuum Image</div> */}
                   </div>

                   {/* Take it one phase at a time */}
                   <div className="mb-8">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Take it one phase at a time</h3>
                        <p className="text-base md:text-lg font-light">We learned to break down complicated designs into small, manageable chunks. This eases development and handles bugs as we go along. (Placeholder Text)</p>
                         {/* Placeholder for image */}
                        {/* <div className="mt-4 h-48 bg-gray-200 flex items-center justify-center text-gray-500">Take it one phase at a time Image</div> */}
                   </div>

             </section>

              {/* Future Section */}
              <section id="future" className="mb-12">
                   <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight">Future</h2>

                   {/* Bug fixes */}
                   <div className="mb-8">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Bug fixes</h3>
                        <p className="text-base md:text-lg font-light">For a project of this scale, even though we have already fixed plenty of bugs before public release, there are bound to be minor bugs. (Placeholder Text)</p>
                   </div>

                    {/* Post-launch optimization */}
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Post-launch optimization</h3>
                      <p className="text-base md:text-lg font-light">This is a crucial next step for every UX improvement or product launch. With informed, actionable insights, we are able to design a better experience for our consumers. (Placeholder Text)</p>
                    </div>

                    {/* Continue to design better experiences */}
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight">Continue to design better experiences</h3>
                      <p className="text-base md:text-lg font-light">To follow through our product roadmap and continue to stick to our design principles. (Placeholder Text)</p>
                    </div>

                   <p className="text-base md:text-lg font-light">Thank you for reading through! Hope you enjoyed learning about my design and thought process.  </p>

              </section>

        </div>
      </article>
    </div>

    {/* More to explore section - MOVED HERE */}
    <section id="more-to-explore" className="max-w-[1800px] mx-auto px-5 bedar-sc1:px-20 mb-12">
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 font-inter-tight">More to explore</h2>
        <div className="flex flex-col bedar-sc2:flex-row justify-center gap-6">
            {/* Card 1 */}
            <div className="flex flex-col border border-zinc-200 rounded-md p-6 w-full bedar-sc2:w-1/2">
                <div className="text-sm font-inter-tight text-gray-500">UI/UX DESIGN</div>
                <h3 className="text-2xl font-semibold mt-2 mb-4 font-inter-tight">I design clean experiences that your users will love.</h3>
                <Link to="/projects" className="text-gray-1 flex items-center gap-1 hover:text-black transition-colors ease-linear font-semibold">
                   See my work <IoIosArrowForward />
                </Link>
                <div className="mt-6 bg-gray-300 h-48 w-full rounded-md">{/* Image Placeholder */}</div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col border border-zinc-200 rounded-md p-6 w-full bedar-sc2:w-1/2">
                 <div className="text-sm font-inter-tight text-gray-500">WEBFLOW / FRAMER</div>
                <h3 className="text-2xl font-semibold mt-2 mb-4 font-inter-tight">I build high quality websites at warp speed.</h3>
                 <Link to="/projects" className="text-gray-1 flex items-center gap-1 hover:text-black transition-colors ease-linear font-semibold">
                   How I help <IoIosArrowForward />
                </Link>
                 <div className="mt-6 bg-gray-300 h-48 w-full rounded-md">{/* Image Placeholder */}</div>
            </div>
        </div>
    </section>
  </>
);
};

export default ProjectDetail; 