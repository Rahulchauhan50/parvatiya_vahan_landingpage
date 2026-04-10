import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-background">
      <Navbar />

      <main className="grow w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-10 sm:pb-14">
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-on-background/70 mb-10">Parvatiya Vahan Mobility LLP</p>

          <section className="space-y-6 text-on-background/85 leading-relaxed">
            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">1. Information Collected</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, phone number, email</li>
                <li>Location data for ride services</li>
                <li>Device and app usage data</li>
                <li>Payment details (handled by secure third-party gateways)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">2. Purpose of Use</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide ride booking services</li>
                <li>To connect users with independent drivers</li>
                <li>To improve platform performance</li>
                <li>To send alerts and booking updates</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">3. Data Sharing</h2>
              <p>We may share data:</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>With drivers for ride fulfillment</li>
                <li>With payment partners</li>
                <li>With authorities if legally required</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">4. Data Security</h2>
              <p>We implement reasonable safeguards but do not guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">5. User Rights</h2>
              <p>Users may request data correction or deletion.</p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">6. Updates</h2>
              <p>Policy may change anytime without prior notice.</p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">7. Contact</h2>
              <p>Email: parvatiyavahan@gmail.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
