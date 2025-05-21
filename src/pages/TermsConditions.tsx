import PageBanner from "../section/banner/PageBanner";

const TermsConditions = () => {
  const pageContent = {
    title: "Terms & Conditions",
    description:
      "Welcome to Smart Bazaar! By accessing or using our website, you agree to be bound by the following terms and conditions:",
  };
  return (
    <>
      <PageBanner pageContent={pageContent} />
      <section className="policy_page bg-white">
        <div className="container mx-auto text-blue-950">
          <h2>1. General</h2>
          <p>
            These Terms apply to all users of the website. Please read them
            carefully before using our services.
          </p>

          <h2>2. Use of Our Website</h2>
          <ul>
            <li>
              You must be at least 18 years old or have permission from a
              guardian.
            </li>
            <li>You agree not to misuse the website or services.</li>
          </ul>

          <h2>3. Products and Services</h2>
          <p>
            We strive to ensure all product descriptions and prices are
            accurate. However, we reserve the right to correct errors, including
            after an order has been placed.
          </p>

          <h2>4. Orders and Payments</h2>
          <p>
            All orders are subject to availability and confirmation of the order
            price. We accept multiple payment methods for your convenience.
          </p>

          <h2>5. Returns & Refunds</h2>
          <p>
            Please refer to our <a href="/return-policy">Return Policy</a> for
            detailed information.
          </p>

          <h2>6. Changes to the Terms</h2>
          <p>
            Smart Bazaar reserves the right to change these terms at any time
            without prior notice.
          </p>

          <p>Last updated: May 2025</p>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
