import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head>
        <Script id='gtm' strategy='afterInteractive' dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BDXT8R');`
        }}></Script>
      </Head>
      <body>
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BDXT8R"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}></noscript>
      <Main/>
      <NextScript/>
      <Script id='chatwoot' strategy='afterInteractive'>
        {`
        (function(d,t) {
          var BASE_URL="https://app.chatwoot.com";
          var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
          g.src=BASE_URL+"/packs/js/sdk.js";
          g.defer = true;
          g.async = true;
          s.parentNode.insertBefore(g,s);
          g.onload=function(){
            window.chatwootSDK.run({
              websiteToken: 'kzxmCYaGSi8NWNK6CEkeGMTR',
              baseUrl: BASE_URL
            })
          }
        })(document,"script");
        `}
      </Script>
      </body>
    </Html>
  );
}

export default Document;
