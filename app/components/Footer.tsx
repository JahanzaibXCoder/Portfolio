import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2025 Jahanzaib Sohail. All rights reserved.</p>
        <Link
          href="https://www.linkedin.com/in/jahanzaib-sohail-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}

export default Footer

