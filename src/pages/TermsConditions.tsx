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
      <section className="policy_page bg-white py-16">
        <div className="container mx-auto text-blue-950">
          <h3 className="font-bold text-2xl pb-3">1. General</h3>
          <p className="pb-3">
            These Terms apply to all users of the website. Please read them
            carefully before using our services.
          </p>

          <h3 className="font-bold text-2xl py-3">2. Use of Our Website</h3>
          <ul className="pb-3">
            <li>
              You must be at least 18 years old or have permission from a
              guardian.
            </li>
            <li>You agree not to misuse the website or services.</li>
          </ul>

          <h3 className="font-bold text-2xl py-3">3. Products and Services</h3>
          <p className="pb-3">
            We strive to ensure all product descriptions and prices are
            accurate. However, we reserve the right to correct errors, including
            after an order has been placed.
          </p>

          <h3 className="font-bold text-2xl py-3">4. Orders and Payments</h3>
          <p className="pb-3">
            All orders are subject to availability and confirmation of the order
            price. We accept multiple payment methods for your convenience.
          </p>

          <h3 className="font-bold text-2xl py-3">5. Returns & Refunds</h3>
          <p className="pb-3">
            Please refer to our <a href="/return-policy">Return Policy</a> for
            detailed information.
          </p>

          <h3 className="font-bold text-2xl py-3">6. Changes to the Terms</h3>
          <p className="pb-3">
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
