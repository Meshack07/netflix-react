function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-10 md:px-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-red-600">
            NETFLIX
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Enjoy movies, series and entertainment anytime,
            anywhere.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Company</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Careers</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Support</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white">
              Help Center
            </li>
            <li className="cursor-pointer hover:text-white">
              Terms of Use
            </li>
            <li className="cursor-pointer hover:text-white">
              Privacy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Follow Us</h3>

          <div className="flex gap-4 text-sm text-gray-400">
            <span className="cursor-pointer hover:text-white">
              Facebook
            </span>

            <span className="cursor-pointer hover:text-white">
              Instagram
            </span>

            <span className="cursor-pointer hover:text-white">
              X
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2026 Netflix Clone. Built with React + Vite + Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;