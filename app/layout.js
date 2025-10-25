import { Inter } from "next/font/google";
import './styles/global.scss';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
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
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
