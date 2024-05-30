import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16'>
          <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
  <img
                  src="https://i.ibb.co/GttwYvd/logo-svg.png"
                  alt=""
                  className="w-16  hidden lg:block"
                />
    <p>Faria's Cooking Luxury<br/>Providing Yummy Foods since 2020</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Self-Service</span> 
    <a className="link link-hover">About </a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>  
        </div>
    );
};

export default Footer;