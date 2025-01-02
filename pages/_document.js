// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx,err) {
    const initialProps = await Document.getInitialProps(ctx);
    const incomingUrl = ctx.req ? ctx.req.url : null;


    
    
    
    // if (ctx.req.url.includes("trueassist")) {
    //   color = "#FFFFFFF";
    // } else {
    //   color = "#0B417E";
    // }
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>homepage</title>
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
