import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="">
      <footer className="footer py-32 px-5 bg-black text-white">
        <nav>
          <h6 className="footer-title text-white text-xl tracking-widest">
            Explorer
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white text-xl tracking-widest">
            About
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white text-xl">Help</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-white text-xl tracking-widest">
            Join the ride
          </h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text"> Sign up for our newsletter </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item rounded-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
            <p className="mt-5">
              By signing up, I agree to the privacy policy of veloretti{" "}
            </p>
            <div className="flex flex-row items-center justify-between mt-10 cursor-pointer">
              <FaFacebookF />
              <FaTwitter />
              <FaTwitch />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </fieldset>
        </form>
      </footer>
    </section>
  );
};

export default Footer;
