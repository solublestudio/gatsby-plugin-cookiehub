import React from "react";

const BASE_URL = "https://cookiehub.net/";
const API_VERSION = "c2/";

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  config
) => {
  if (!config.cookiehubID) {
    return null;
  }

  const isDev =
    config.isDev !== undefined || config.isDev !== null
      ? config.isDev
      : process.env.NODE_ENV === "development";

  const setComponents = config.head ? setHeadComponents : setPostBodyComponents;

  const URL_DEV = isDev ? "dev/" : "";
  const URL = `${BASE_URL}${URL_DEV}${API_VERSION}${config.cookiehubID}.js`;

  return setComponents([
    <link key="gatsby-cookiehub-preconnect" rel="preconnect" href={BASE_URL} />,
    <script key="gatsby-cookiehub-url" async src={URL} />,
    <script
      key="gatsby-cookiehub-script"
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener("load", function() {
                    const language = document.documentElement.lang ?? "es";
                    
                    const cpm = {
                        language,
                    };
                    
                    if (window.cookiehub !== undefined) {
                        window.cookiehub.load(cpm);
                    } else {
                        console.log("CookieHub not loaded!");
                    }
                });`,
      }}
    />,
  ]);
};
