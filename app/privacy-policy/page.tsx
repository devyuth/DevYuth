import type { Metadata } from "next";


const COMPANY_NAME = "Devyuth";
const WEBSITE_URL = "https://devyuth.in";
const CONTACT_EMAIL = "contact@devyuth.in";
const LAST_UPDATED = "October 31, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Devyuth",
  description:
    "Read Devyuth's Privacy Policy to understand how we collect, use, protect, and manage your personal information when using our website and software services.",

  alternates: {
    canonical: "https://devyuth.in/privacy-policy",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Privacy Policy | Devyuth",
    description:
      "Learn how Devyuth collects, uses, and protects your personal information.",
    url: "https://devyuth.in/privacy-policy",
    siteName: "Devyuth",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Privacy Policy | Devyuth",
    description:
      "Understand how Devyuth handles and protects your personal information.",
  },
};



export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-sans pt-20">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        
        {/* Header */}
        <header className="border-b border-slate-200 pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Updated: {LAST_UPDATED}
          </p>
        </header>

        {/* Content */}
        <div className="mt-8 space-y-10 text-base leading-relaxed text-slate-700">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>{COMPANY_NAME}</strong>. We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
              <a href={WEBSITE_URL} className="text-slate-900 underline underline-offset-2 hover:text-blue-600">
                {WEBSITE_URL}
              </a>{" "}
              and use our website & software services.
            </p>
            <p>
              By accessing or using our Services, you acknowledge that you have read and understood the terms of this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              We collect information that identifies, relates to, or could reasonably be linked with you. This includes:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>
                <strong>Information You Provide Directly:</strong> Account registration data (such as name, email address, password), billing and payment details, customer support communications, and user preferences.
              </li>
              <li>
                <strong>Automatically Collected Information:</strong> IP addresses, browser types, operating systems, referring URLs, device information, pages viewed, API requests, and standard server log data.
              </li>
              <li>
                <strong>Information from Third Parties:</strong> Data received from single sign-on (SSO) providers (like Google or GitHub) if you choose to authenticate using those services.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect for the following operational and business purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>To provide, operate, maintain, and improve our website and software services.</li>
              <li>To process financial transactions, manage subscriptions, and send invoices.</li>
              <li>To respond to comments, questions, and customer support inquiries.</li>
              <li>To monitor usage patterns, prevent fraud, and secure our software infrastructure.</li>
              <li>To send administrative emails, service notices, updates, and security alerts.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share your information under the following limited circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>
                <strong>Service Providers:</strong> We share data with third-party vendors who perform services on our behalf, such as cloud hosting providers, payment processors, email delivery services, and diagnostics tools.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose information if required by law, court order, subpoena, or government regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, restructuring, or sale of company assets, user information may be transferred as part of the transaction.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies (such as local storage and session tokens) to maintain your login session, remember your settings, and understand how users interact with our website.
            </p>
            <p>
              You can control cookie settings through your internet browser parameters. Disabling certain cookies may limit your ability to use specific features of our software.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              6. Data Security
            </h2>
            <p>
              We employ administrative, technical, and physical safeguards designed to protect your personal data against unauthorized access, disclosure, alteration, and destruction. Data transmitted between your browser and our servers is encrypted using industry-standard Transport Layer Security (TLS).
            </p>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute data security.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              7. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, it is deleted or anonymized.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              8. Your Rights and Choices
            </h2>
            <p>
              Depending on your location (including rights provided under the GDPR and CCPA), you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Deletion:</strong> Request erasure of your personal data (&quot;right to be forgotten&quot;).</li>
              <li><strong>Export:</strong> Request a structured, machine-readable copy of your data.</li>
            </ul>
            <p className="pt-1">
              To exercise any of these rights, please contact us using the email address provided below.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our Services are not intended for or directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it promptly.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this page periodically to stay informed about our privacy practices.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              11. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
            </p>
            <div className="rounded border border-slate-200 p-4 font-mono text-sm text-slate-800">
              <p><strong>{COMPANY_NAME}</strong></p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}