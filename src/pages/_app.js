import "./globals.css"; // Update the path to your global CSS file

function MyApp({ Component, pageProps }) {
  // Any additional layout or components you want to wrap around your pages
  return <Component {...pageProps} />;
}

export default MyApp;
