'use client';
import './globals.css';
import Providers from './redux/Providers';
import { accessToken } from './utilities/tokenClient';




export const metadata = {
  title: 'MentorMeInTech',
  description: 'Community-driven Mentorship Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
          {children}
      </body>
    </html>
  );
}
