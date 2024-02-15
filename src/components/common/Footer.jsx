import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import logo from "../../images/logo-light.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Footer = () => {
  const [Email, setEmail] = useState("");
  const [desclaimerData, setDesclaimerData] = useState([]);

  const apiCall = async () => {
    const PageApiResponse = await fetch(
      `${process.env.REACT_APP_STRAPI_API_URL}/api/pages?populate=seo`,
      {
        method: "GET",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
        },
      }
    );

    const data = await PageApiResponse.json();
    setDesclaimerData(data?.data?.[3]?.attributes);
  };
  useEffect(() => {
    apiCall();
  }, []);

  const handleSubmit = async () => {
    const Name = Email.split("@")[0];
    const data = {
      data: {
        Email: Email,
        Name: Name,
      },
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_STRAPI_API_URL}/api/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
          },
          body: JSON.stringify(data),
        }
      );
      await response.json();
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="items-center gap-6 px-9 pt-11 pb-5 bg-darkblue text-white">
      <div className="flex flex-col  h-auto min-h-full gap-6 md:flex md:flex-row md:h-48">
        <div className="self-center md:self-start  ">
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="h-5 object-contain sm:h-6 w-48 sm:w-56 xxlg:text-xl"
          />
        </div>
        <div className="w-full self-end text-center  text-xs-smaller text-white md:w-4/5 xxlg:text-base italic">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} className="gap-10">
            {desclaimerData.Content}
          </ReactMarkdown>
        </div>
        <div className="flex flex-col self-center  text-sm gap-2 md:self-start mb-5">
          <div className="flex gap-4  items-center xxlg:text-lg">
            Conecte :
            <div className="flex gap-3 text-xl xxlg:text-lg">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                aria-label="Visit our facebook page"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                aria-label="Visit our twitter page"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://www.youtube.com"
                target="_blank"
                aria-label="Visit our youtube channel"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 xxlg:text-lg">
            <div className="text-lg">
              <TbMailFilled />
            </div>
            <div>Reciba nuestro boletín</div>
          </div>

          <div className="relative xxlg:text-lg">
            <input
              type="text"
              placeholder="Correo electronico"
              className="py-2 px-4 text-black border rounded-l outline-none w-w-68"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="text-black py-2 px-4 rounded-r absolute right-0 top-0 bottom-0"
              aria-label="Mail submit"
              onClick={handleSubmit}
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-base mt-3 xxlg:text-base not-italic">
        © Decisiones, LLC. 2023 Todos los derechos reservados.{" "}
        <Link to="/terminos-de-uso" className="underline">
          Términos de uso
        </Link>{" "}
        |
        <Link to="/politica-de-privacidad" className="underline">
          Política de privacidad
        </Link>
      </div>
    </div>
  );
};

export default Footer;
