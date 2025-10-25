import { Geist, Geist_Mono } from "next/font/google";
import './styles/global.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Abdulraghman A - Senior Frontend Developer',
  description: 'Portfolio of Abdulraghman A, a Senior Frontend Developer with over 13 years of experience in web development.',
  icons: [
    { rel: 'icon', url: '/A.png' },
    { rel: 'apple-touch-icon', url: '/A.png' },
    { rel: 'shortcut icon', url: '/A.png' }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/A.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
