

const Footer = () => {
    return (
        <div>
       <div className="mt-20 mb-10 text-center">
       <h3 className="text-3xl font-bold mb-5">Gadget Heaven</h3>
       <p >Leading the way in cutting-edge technology and innovation.</p>
       </div>
        <footer className="footer bg-white container mx-auto justify-center gap-80 text-black p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

        </div>
    );
};

export default Footer;