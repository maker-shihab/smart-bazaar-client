const Footer = () => {
  const date = new Date();
  const gateYear = date.getFullYear();
  return <footer>&copy; Maker Shihab {gateYear} </footer>;
};

export default Footer;
