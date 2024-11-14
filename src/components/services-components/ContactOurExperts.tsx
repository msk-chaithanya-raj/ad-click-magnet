import React from "react";
import Image from "next/image";
import Link from "next/link";

function ContactOurExperts() {
  return (
    <div className="p-[80px] h-auto sm:h-[auto] mb-9">
      <div className="contact-our-expert-card flex flex-col sm:flex-row md:flex-row items-center sm:justify-between">
        <div className="contact-our-expert-card-content sm:w-[60%] text-center sm:text-left">
          <h2 className="contact-our-expert-card-content-head mb-5 text-xl sm:text-3xl md:text-4xl">
            Our Customization Expertise Serves All Types, Even The Ones Not
            Listed Above
          </h2>
          <p className="services-sec7-content-para mb-5 text-sm sm:text-base md:text-lg">
            Describe your business type to our experts and get the quickest
            clarity on the product roadmap, scope of innovation, and expected
            ROIs
          </p>
          <Link href="/contact-us">
            <button
              type="button"
              className="contact-our-expert-card-content-btn bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
            >
              Consult Our Experts
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-[30%] mt-5 sm:mt-0 flex justify-center">
          <Image
            className="contact-our-expert-card-img w-full sm:w-[70%] rounded-2xl"
            src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contact"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactOurExperts;
