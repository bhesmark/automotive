import Head from "next/head";
import "../../public/assets/css/bootstrap.rtl.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../styles/custom.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/style-rtl.css";
import { useEffect, useState } from "react";

import Preloader from "../components/common/Preloader";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const handlePreloaderClose = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate loading for 3 seconds (adjust as needed)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    import("../../public/assets/js/bootstrap.min.js");
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Head>
            <title>Loading....</title>
            <link
              rel="icon"
              href="assets/img/sm-logo.svg"
              type="image/gif"
              sizes="20x20"
            />
          </Head>
          <Preloader onClose={handlePreloaderClose} />
        </>
      ) : (
        <>
          <Head>
            <title>Drivco - Car Dealer NExt Js Template</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            ></meta>
            <meta name="description" content="Generated by create next app" />
            <link
              rel="icon"
              href="assets/img/sm-logo.svg"
              type="image/gif"
              sizes="20x20"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;