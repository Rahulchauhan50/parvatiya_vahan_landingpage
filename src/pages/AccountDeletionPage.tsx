import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-background">
      <Navbar />

      <main className="grow w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-10 sm:pb-14">
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold mb-3">Account Deletion and Deactivation</h1>
          <p className="text-on-background/70 mb-10">Parvatiya Vahan Mobility LLP</p>

          <section className="space-y-6 text-on-background/85 leading-relaxed">
            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">1. Account Deactivation</h2>
              <p>
                If you wish to temporarily suspend your account, you can choose to deactivate it. During deactivation, your profile, ride history, and personal information will be hidden from other users, but we will retain your data so you can easily reactivate your account upon your return.
              </p>
              <p className="mt-2">
                To deactivate your account, please send an email to <a href="mailto:Support@parvatiyavahan.com" className="text-[#EB5310] hover:underline">Support@parvatiyavahan.com</a> with the subject "Account Deactivation Request".
              </p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">2. Account Deletion</h2>
              <p>
                If you choose to permanently delete your account, your profile, ride history, and all personal information associated with your account will be permanently removed from our active databases. 
              </p>
              <p className="mt-2">
                Please note that we may retain certain data for a limited period if required by law or for legitimate business purposes (e.g., fraud prevention, accounting).
              </p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">3. How to Request Deletion</h2>
              <p>To request permanent deletion of your account and associated data:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Send an email to <a href="mailto:Support@parvatiyavahan.com" className="text-[#EB5310] hover:underline">Support@parvatiyavahan.com</a> from the email address registered to your account.</li>
                <li>Use the subject line "Account Deletion Request".</li>
                <li>Include your full name and registered phone number in the body of the email for verification.</li>
              </ul>
              <p className="mt-2">Our team will process your request within 30 days and confirm via email once your account has been successfully deleted.</p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">4. App Uninstallation</h2>
              <p>
                Please note that simply uninstalling the Parvatiya Vahan app from your device does not delete your account or personal data. You must follow the procedure outlined above to ensure your account is permanently deleted.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold mb-2">5. Contact Us</h2>
              <p>If you have any questions or need assistance regarding account deletion or deactivation, please contact us at:</p>
              <p className="mt-2">Email: <a href="mailto:Support@parvatiyavahan.com" className="text-[#EB5310] hover:underline">Support@parvatiyavahan.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
