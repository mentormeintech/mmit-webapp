import Providers from "@/redux/Providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css"; // Update the path to your global CSS file

function MyApp({ Component, pageProps }) {
  // Any additional layout or components you want to wrap around your pages
  return (
    <Providers>
      <Component {...pageProps} />
      <ToastContainer />
    </Providers>
  );
}

export default MyApp;
