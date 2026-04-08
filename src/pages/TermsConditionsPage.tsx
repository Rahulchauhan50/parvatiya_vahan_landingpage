import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-background">
      <Navbar />

      <main className="grow max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-10 sm:pb-14 space-y-12">
        <section>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold mb-3">Terms &amp; Conditions</h1>
          <p className="text-on-background/70 mb-8">Parvatiya Vahan Mobility LLP</p>

          <div className="space-y-6 text-on-background/85 leading-relaxed">
            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">1. Nature of Platform</h2>
              <p>
                Parvatiya Vahan Mobility LLP is a technology intermediary platform connecting
                passengers with independent drivers.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">2. No Transport Liability</h2>
              <p>The Company does not provide transportation services directly and is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Driver conduct</li>
                <li>Vehicle condition</li>
                <li>Delays, accidents, or disputes</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">3. User Obligations</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate details</li>
                <li>Be present at pickup location</li>
                <li>Follow applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">4. Pricing</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dynamic pricing may apply</li>
                <li>Final fare is shown before booking</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">5. Payments</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>All payments are processed via third-party gateways</li>
                <li>Company is not responsible for payment failures</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">6. Cancellation &amp; Refund</h2>
              <p>Governed strictly by Refund Policy.</p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">7. Account Suspension</h2>
              <p>We may suspend accounts for misuse or fraud.</p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">8. Legal Jurisdiction</h2>
              <p>All disputes subject to courts of Dehradun, Uttarakhand.</p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-on-background/10">
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold mb-3">
            Refund &amp; Cancellation Policy
          </h2>
          <p className="text-on-background/70 mb-8">Parvatiya Vahan Mobility LLP</p>

          <div className="space-y-6 text-on-background/85 leading-relaxed">
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">1. Strict No Refund Policy</h3>
              <p>All bookings are non-refundable under any circumstances, except vehicle breakdown.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">2. No Cancellation</h3>
              <p>Once booked, no cancellation is eligible for refund.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">3. No Show</h3>
              <p>User absence = 100% amount forfeited.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">4. Only Exception – Vehicle Breakdown</h3>
              <p>Refund allowed only if:</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Breakdown verified</li>
                <li>No alternate vehicle provided</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">5. No Refund Cases</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Traffic delay</li>
                <li>Weather</li>
                <li>Late arrival</li>
                <li>Completed ride</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">6. Company Rights</h3>
              <p>Final decision lies with Parvatiya Vahan Mobility LLP.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">7. Refund Timeline</h3>
              <p>5–10 working days (if applicable).</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">8. Fraud &amp; Chargebacks</h3>
              <p>Strict legal action may be taken.</p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-on-background/10">
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold mb-3">Contact Us</h2>
          <p className="text-on-background/85 leading-relaxed">parvatiyavahan@gmail.com</p>
          <p className="text-on-background/85 leading-relaxed">Support: 24x7</p>
        </section>

        <section className="pt-8 border-t border-on-background/10">
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold mb-3">
            Driver Partner Agreement
          </h2>
          <p className="text-on-background/70 mb-8">Parvatiya Vahan Mobility LLP</p>

          <div className="space-y-6 text-on-background/85 leading-relaxed">
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">1. Independent Contractor</h3>
              <p>Driver is not an employee but an independent service provider.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">2. Documents Required</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Valid driving license</li>
                <li>Commercial vehicle permit</li>
                <li>Insurance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">3. Commission</h3>
              <p>Company will charge commission per ride as per policy.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">4. Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintain vehicle condition</li>
                <li>Follow traffic rules</li>
                <li>Ensure passenger safety</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">5. Payments</h3>
              <p>Earnings settled after commission deduction.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">6. Penalty</h3>
              <p>Misbehavior or fraud = permanent removal.</p>
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">7. Liability</h3>
              <p>Driver is fully responsible for accidents and legal violations. Company bears no liability.</p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-on-background/10 pb-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold mb-3">Legal Disclaimer</h2>
          <p className="text-on-background/70 mb-4">Parvatiya Vahan Mobility LLP</p>
          <p className="text-on-background/85 leading-relaxed mb-3">
            Parvatiya Vahan Mobility LLP acts solely as a technology platform and shall not be held liable
            for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-background/85 leading-relaxed">
            <li>Any accident, injury, or death</li>
            <li>Loss or damage of property</li>
            <li>Driver misconduct</li>
            <li>Delays due to any reason</li>
          </ul>
          <p className="text-on-background/85 leading-relaxed mt-4">
            All risks during the ride are borne by the passenger and driver. By using the platform,
            users agree to indemnify and hold harmless Parvatiya Vahan LLP from any claims.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
