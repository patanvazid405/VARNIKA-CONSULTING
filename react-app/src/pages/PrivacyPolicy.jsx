import useDocumentHead from "../hooks/useDocumentHead";

export default function PrivacyPolicy() {
  useDocumentHead(
    "Privacy Policy | Varnika Consulting",
    "How Varnika Consulting collects, uses and protects the information you share with us through our website and consulting engagements."
  );

  return (
    <>
      <section className="hero hero--compact">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Legal</p>
              <h1>Privacy Policy</h1>
              <div className="rule" />
              <p>Effective date: August 2, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820, margin: "0 auto" }}>
          <p>
            Varnika Consulting (&ldquo;Varnika Consulting,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy and is
            committed to protecting the personal information you share with us. This Privacy Policy explains
            what information we collect through varnikaconsulting.com (the &ldquo;Site&rdquo;), how we use it, and the
            choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p><strong>Information you provide directly.</strong> When you submit our contact or consultation
            request form, we collect the information you enter — typically your name, work email address,
            phone number, company/role, and the details of your message.</p>
          <p><strong>Information collected automatically.</strong> Like most websites, we may use analytics
            tools (such as Google Analytics) that automatically collect standard usage data — pages visited,
            time on site, referring pages, device and browser type, and approximate location derived from IP
            address — using cookies or similar technologies.</p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide the consulting services you request</li>
            <li>To communicate with you about our services, proposals and engagements</li>
            <li>To improve our website, content and service offerings</li>
            <li>To understand aggregate traffic and usage patterns on our Site</li>
            <li>To meet legal, regulatory and contractual obligations</li>
          </ul>

          <h2>3. Cookies &amp; Analytics</h2>
          <p>We use cookies and similar technologies to operate our Site and understand how visitors use it.
            You can control or disable cookies through your browser settings; doing so may limit some
            functionality of the Site.</p>

          <h2>4. How We Share Information</h2>
          <p>We do not sell your personal information. We may share information with trusted service
            providers who help us operate our Site and business (for example, hosting, email delivery and
            analytics providers), and only to the extent necessary for them to perform those services. We may
            also disclose information if required to do so by law or to protect our legal rights.</p>

          <h2>5. Data Security</h2>
          <p>We take reasonable administrative and technical measures to protect the information we hold
            from unauthorized access, alteration, disclosure or destruction. No method of transmission or
            storage is completely secure, and we cannot guarantee absolute security.</p>

          <h2>6. Data Retention</h2>
          <p>We retain personal information for as long as necessary to fulfil the purposes described in this
            policy, unless a longer retention period is required or permitted by law.</p>

          <h2>7. Your Rights</h2>
          <p>Depending on where you are located, you may have the right to request access to, correction of,
            or deletion of your personal information, or to object to or restrict certain processing. To
            exercise any of these rights, contact us using the details below.</p>

          <h2>8. Children&rsquo;s Privacy</h2>
          <p>Our Site is intended for business audiences and is not directed at children. We do not
            knowingly collect personal information from children.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with a revised effective date.</p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or how we handle your information, contact us
            at <a href="mailto:advisory@varnikaconsulting.com">advisory@varnikaconsulting.com</a> or{" "}
            <a href="tel:+917483503223">+91 74835 03223</a>.</p>
        </div>
      </section>
    </>
  );
}
