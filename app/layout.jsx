import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lalezar } from 'next/font/google';
const lalezar = Lalezar({
  subsets: ['latin'], // Choose subsets if needed
  weight: '400', // Specify weights
});


export const metadata = {
  title: "Mostafa Ayman",
  description: "My Portfilio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-primary2 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
