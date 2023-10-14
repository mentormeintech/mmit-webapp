import './globals.css';



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
