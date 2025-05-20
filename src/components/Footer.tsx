const Footer = () => {
  const date = new Date();
  const gateYear = date.getFullYear();
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p className="py-4 text-sm">&copy; Maker Shihab {gateYear} </p>
      </div>
    </footer>
  );
};

export default Footer;
