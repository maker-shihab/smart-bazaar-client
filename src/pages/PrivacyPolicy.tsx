import PageBanner from "../section/banner/PageBanner";

const PrivacyPolicy = () => {
  const pageContent = {
    title: "Privacy Policy",
    description:
      "Your privacy is important to us. This Privacy Policy explains how Smart Bazaar collects, uses, and protects your information.",
  };
  return (
    <>
      <PageBanner pageContent={pageContent} />
      <section className="policy_page bg-white py-16">
        <div className="container mx-auto text-blue-950">
          <h3 className="font-bold text-2xl py-3">1. Information We Collect</h3>
          <ul className="pb-3">
            <li>
              Personal Information: Name, email address, phone number, etc.
            </li>
            <li>Browsing Data: IP address, browser type, device info, etc.</li>
          </ul>

          <h3 className="font-bold text-2xl py-3">
            2. How We Use Your Informatio
          </h3>
          <p className="pb-3">We use your data to:</p>
          <ul className="listy-disc pb-3">
            <li className="list-decimal ml-10">
              Process orders and deliver products
            </li>
            <li className="list-decimal ml-10">
              Send newsletters and promotional content (if you opt-in)
            </li>
            <li className="list-decimal ml-10">
              Improve our services and website performance
            </li>
          </ul>

          <h3 className="font-bold text-2xl py-3">3. Data Security</h3>
          <p className="pb-3">
            We implement security measures to protect your data. However, no
            method is 100% secure, and we cannot guarantee absolute protection.
          </p>

          <h3 className="font-bold text-2xl py-3">4. Third-Party Services</h3>
          <p className="pb-3">
            We may use third-party services (e.g., payment gateways, analytics)
            that have their own privacy policies.
          </p>

          <h3 className="font-bold text-2xl py-3">5. Your Rights</h3>
          <p className="pb-3">
            You can request access, correction, or deletion of your personal
            data at any time.
          </p>

          <h3 className="font-bold text-2xl py-3">6. Contact Us</h3>
          <p className="pb-3">
            If you have any questions about this policy, contact us at:{" "}
            <a href="mailto:support@smartbazaar.com">support@smartbazaar.com</a>
          </p>

          <p>Last updated: May 2025</p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
