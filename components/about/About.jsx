import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>At RentUp, our story began with a shared vision to revolutionize the rental experience. Our founders, driven by a passion for customer satisfaction, created a user-friendly platform connecting renters with their ideal homes. We prioritize transparency, reliability, and personalized service, ensuring every customer finds a sanctuary they can call home. </p>
            <p>Join RentUp and Simplify Your Rental Search. Discover a user-friendly platform designed to streamline the process of finding your perfect rental. With a focus on personalized service, we connect you with verified listings and reliable landlords. At RentUp, we're committed to making your renting journey stress-free and memorable. Experience the convenience of finding your sanctuary with RentUp today</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
