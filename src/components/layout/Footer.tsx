export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-10">
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h4 className="text-white font-semibold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">HELP</h4>
          <ul className="space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">CONSUMER POLICY</h4>
          <ul className="space-y-2">
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Mail Us:</h4>
          <p className="text-gray-400 leading-relaxed">
            Flipkart Internet Private Limited,<br />
            Bengaluru, Karnataka,<br />
            India
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2007–2026 Flipkart Clone by Prem
      </div>
    </footer>
  );
}
