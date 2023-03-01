/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

import BuildWebsite from 'assets/images/Startup.png';

export default function Hero() {
  return (
    <section className="hero">
      <Fade bottom>
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-4xl sm:text-6xl text-theme-blue font-bold leading-tight mb-6">
            Brainy
            <br />
            AI Product Content
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
            Brainy is a Shopify app that helps you write your product content including descriptions, SEO content and images alternate text and notifies you about issues with your products using the latest AI models.
          </p>

          <Button target="_blank" isExternal href="https://apps.shopify.com/brainy-ai-product-description?st_source=website" rel="noopener noreferrer" type="link" className="flex w-80 h-16 items-center px-10 py-5 text-white bg-theme-purple rounded-full shadow-2xl hover:bg-dark-theme-purple transition duration-200">
            Add to your Shopify store
            <svg className="ml-2  h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src={BuildWebsite} alt="Build Website" />
        </div>
      </Fade>
    </section>
  );
}
