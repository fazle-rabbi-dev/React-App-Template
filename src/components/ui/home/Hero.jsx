import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Hero = () => {
  return (
    <section className="text-center my-8">
      <h1 className="heading2">
        <span className="text-gradient-violet">ORN</span>
        <span className="inline-block">Online Resource Network</span>
      </h1>
      <p className="body-text mt-4 text-lg font-medium">
        Discover and Share Valuable Resources from Across the Web!
      </p>
      
      <div className="max-w-2xl mx-auto flex-center gap-3 mt-8">
        <button className="btn-base btn-primary rounded-full" type="button">
          <Link to="/resources">
            Get Started 🎉
          </Link>
        </button>
        <button className="btn-base btn-gray rounded-full" type="button">
          <Link target="_blank" to="https://github.com/fazle-rabbi-dev/online-resource-network">
            View on Github
          </Link>
        </button>
      </div>
    </section>
  );
};
