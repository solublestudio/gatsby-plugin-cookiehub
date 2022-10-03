import React from "react";

const PROD_URL = "https://cookiehub.net/c2/";
const DEV_URL = "https://dash.cookiehub.com/dev/";

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

  const BASE_URL = isDev ? DEV_URL : PROD_URL;

  const URL = `${BASE_URL}${config.cookiehubID}.js`;

  return setComponents([
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied', 'wait_for_update': 500});
    `,
      }}
    />,
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
