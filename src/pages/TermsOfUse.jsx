import PageHero from "../components/PageHero";
import useDocumentHead from "../hooks/useDocumentHead";

export default function TermsOfUse() {
  useDocumentHead(
    "Terms of Use | Varnika Consulting",
    "The terms and conditions that govern your use of the Varnika Consulting website."
  );

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" description="Effective date: August 2, 2026" />

      <section className="section">
        <div className="container" style={{ maxWidth: 820, margin: "0 auto" }}>
          <p>
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of varnikaconsulting.com (the
            &ldquo;Site&rdquo;), operated by Varnika Consulting (&ldquo;Varnika Consulting,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing
            or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use
            the Site.
          </p>

          <h2>1. Use of the Site</h2>
          <p>You may use the Site for lawful purposes only, and in a way that does not infringe the rights
            of, or restrict or inhibit the use and enjoyment of the Site by, any third party. You agree not to
            misuse the Site, attempt unauthorized access, or interfere with its normal operation.</p>

          <h2>2. Informational Purposes Only</h2>
          <p>The content on this Site — including service descriptions, insights, articles and case
            material — is provided for general informational purposes only and does not constitute
            professional, financial, technical or legal advice. Any decisions regarding your organization&rsquo;s
            systems, operations or finances should be made in consultation with a qualified Varnika Consulting
            engagement or your own advisors.</p>

          <h2>3. Intellectual Property</h2>
          <p>All content on this Site, including text, graphics, logos, images and software, is the property
            of Varnika Consulting or its licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, modify or create derivative works from any content on this Site
            without our prior written consent.</p>

          <h2>4. Third-Party Links</h2>
          <p>The Site may contain links to third-party websites. We do not control and are not responsible
            for the content, privacy practices or availability of those sites. Accessing linked sites is at
            your own risk.</p>

          <h2>5. No Warranty</h2>
          <p>The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any
            kind, whether express or implied. We do not warrant that the Site will be uninterrupted, secure or
            error-free.</p>

          <h2>6. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Varnika Consulting shall not be liable for any indirect,
            incidental, special or consequential damages arising out of or in connection with your use of, or
            inability to use, the Site.</p>

          <h2>7. Indemnification</h2>
          <p>You agree to indemnify and hold Varnika Consulting harmless from any claims, damages or expenses
            arising from your misuse of the Site or violation of these Terms.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by the laws applicable in the jurisdictions in which Varnika Consulting
            operates, without regard to conflict of law principles. Any disputes shall be subject to the
            exclusive jurisdiction of the competent courts in that location.</p>

          <h2>9. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the Site after changes are posted
            constitutes acceptance of the revised Terms.</p>

          <h2>10. Contact Us</h2>
          <p>Questions about these Terms can be directed to{" "}
            <a href="mailto:advisory@varnikaconsulting.com">advisory@varnikaconsulting.com</a> or{" "}
            <a href="tel:+917483503223">+91 74835 03223</a>.</p>
        </div>
      </section>
    </>
  );
}
