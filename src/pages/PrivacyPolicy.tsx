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
      <section className="policy_page bg-white">
        <div className="container mx-auto text-blue-950">
          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              Personal Information: Name, email address, phone number, etc.
            </li>
            <li>Browsing Data: IP address, browser type, device info, etc.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Process orders and deliver products</li>
            <li>Send newsletters and promotional content (if you opt-in)</li>
            <li>Improve our services and website performance</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement security measures to protect your data. However, no
            method is 100% secure, and we cannot guarantee absolute protection.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services (e.g., payment gateways, analytics)
            that have their own privacy policies.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You can request access, correction, or deletion of your personal
            data at any time.
          </p>

          <h2>6. Contact Us</h2>
          <p>
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
