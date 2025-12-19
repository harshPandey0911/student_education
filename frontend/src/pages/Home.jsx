// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Component Imports
import Footer from "../components/common/Footer"
import CTAButton from "../components/common/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div className="bg-green-500">
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center gap-8 text-white">

        {/* Become Instructor Button */}
        <Link to="/signup">
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 transition-all duration-200 hover:scale-95">
            <div className="flex items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Learn <HighlightText text="Coding Skills" />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, with hands-on projects and expert feedback.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-7">
          <CTAButton active={true} linkto="/signup">
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto="/login">
            Book a Demo
          </CTAButton>
        </div>

        {/* Code Section 1 */}
        <CodeBlocks
          position="lg:flex-row"
          heading={
            <div className="text-4xl font-semibold">
              Unlock your <HighlightText text="coding potential" /> with our
              online courses.
            </div>
          }
          subheading="Our courses are designed by industry experts with real-world experience."
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor="text-yellow-25"
          codeblock={`<!DOCTYPE html>
<html lang="en">
<head>
  <title>This is my Page</title>
</head>
<body>
  <h1><a href="/">Header</a></h1>
  <nav>
    <a href="/one">One</a>
    <a href="/two">Two</a>
    <a href="/three">Three</a>
  </nav>
</body>
</html>`}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />

        {/* Code Section 2 */}
        <CodeBlocks
          position="lg:flex-row-reverse"
          heading={
            <div className="text-4xl font-semibold lg:w-[50%]">
              Start <HighlightText text="coding in seconds" />
            </div>
          }
          subheading="Write real code from your very first lesson."
          ctabtn1={{
            btnText: "Continue Lesson",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor="text-white"
          codeblock={`import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;`}
          backgroundGradient={<div className="codeblock2 absolute"></div>}
        />

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex gap-7 text-white">
              <CTAButton active={true} linkto="/signup">
                <div className="flex items-center gap-2">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto="/login">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col gap-8">
          <div className="mb-10 mt-[-100px] flex flex-col gap-7 lg:mt-20 lg:flex-row">
            <div className="text-4xl font-semibold lg:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text="job that is in demand." />
            </div>
            <div className="flex flex-col gap-6 lg:w-[40%]">
              <p>
                To be competitive today, you need more than just basic skills.
              </p>
              <CTAButton active={true} linkto="/signup">
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="mx-auto my-20 flex w-11/12 max-w-maxContent flex-col gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h1 className="mt-8 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
      </div>

      <Footer />
    </div>
  )
}

export default Home
