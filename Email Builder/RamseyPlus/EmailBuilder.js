document.querySelector('#generate').addEventListener('click', run)

function run() {
    const bodyCopy1 = document.querySelector('#bodyCopy').value

    document.querySelector('#output').innerText =
        `<html lang="en">  
        <head>    
          <meta content="width=device-width, initial-scale=1" name="viewport"/> <!-- So that mobile will display zoomed in -->
          <meta content="IE=edge" http-equiv="X-UA-Compatible"/> <!-- enable media queries for windows phone 8 -->
          <meta content="telephone=no" name="format-detection"/> <!-- disable auto telephone linking in iOS -->
          <meta name="x-apple-disable-message-reformatting"/> <!-- Used to fix the 1/2 width display on iOS11-->
          <title>
            Ramsey Newsletter
          </title>
          <style type="text/css">
        @import url("https://use.typekit.net/zbs1uwc.css");
            ReadMsgBody{ width: 100%;}
            .ExternalClass {width: 100%;}
            .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
            body {-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;margin:0 !important;}
            p { margin: 1em 0;}
            table td { border-collapse: collapse;}
            img {outline:0;}
            a img {border:none;}
            @-ms-viewport{ width: device-width;}
          </style>
          <style type="text/css">
            @media only screen and (max-width: 480px) {
              .container 
          {width: 100% !important;}
              .footer 
          { width:auto !important; margin-left:0; }
              .mobile-hidden 
          { display:none !important; }
              .logo 
          { display:block !important; padding:0 !important; }
               img 
            { max-width:100% !important; height:auto !important; max-height:auto !important;}
              .header 
           img
            {max-width:100% !important;height:auto !important; max-height:auto !important;}
              .photo 
           img 
            { width:100% !important; max-width:100% !important; height:auto !important;}
              .drop 
          { display:block !important; width: 100% !important; float:left; clear:both;}
              .footerlogo 
          { display:block !important; width: 100% !important; padding-top:15px; float:left; clear:both;}
              .nav4, .nav5, .nav6 
          { display: none !important; }
              h1 { font-size: 24px !important; font-weight:600 !important; font-family: canada-type-gibson, Arial, sans-serif !important; text-align: left !important;}
               h2 { font-size: 18px !important; font-family: canada-type-gibson, Arial, sans-serif !important; text-align: left !important;}
              .tableBlock 
          {width:100% !important;}
              .responsive-td 
          {width:100% !important; display:block !important; padding:0 !important; }
              .fluid, .fluid-centered 
          {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                margin-left: auto !important;
                margin-right: auto !important;
          }
              .fluid-centered {
                margin-left: auto !important;
                margin-right: auto !important;
              }
        .button-limit {
          max-width: 240px !important;  
        }
          
              .desktopContent {
       display: block;
      }
      .mobileContent {
       mso-hide: all;
       display: none;
       max-height: 0px;
       overflow: hidden;
      }
          .mobile-width {
           width:100% !important;
           min-width:100% !important;
          }
              
      .adcopy {
        text-align: left;
              }
              /* MOBILE GLOBAL STYLES - DO NOT CHANGE */
              body { font-size: 18px !important; font-family: canada-type-gibson, Arial, sans-serif !important; text-align: center !important;}
              h1 { font-size: 24px !important; font-weight:600 !important; font-family: canada-type-gibson, Arial, sans-serif !important; text-align: center !important;}
              h2 { font-size: 18px !important; font-family: canada-type-gibson, Arial, sans-serif !important; text-align: center !important;}
              h3 { font-size: 18px !important; line-height: normal !important; font-family: canada-type-gibson, Arial, sans-serif !important;}
              .buttonstyles {
                font-family: canada-type-gibson, Arial, sans-serif !important;
                font-size: 16px !important;
                padding: 10px 24px !important;
                align: center !important;
              }
              .desktopContent {
       display: none !important;
      }
      .mobileContent {
       display: block !important;
       max-height: none !important;
      }
              
      .adcopy {
        text-align: center;
              }
      
      .top-banner-text {
        background-color: #0073b9 !important;
        color: #FFFFFF !important;
        font-family: canada-type-gibson, Helvetica, Arial, sans-serif !important;
        font-size: 14px !important;
        line-height:28px !important;
        text-align:center !important;
        padding-top: 5px !important;
        padding-bottom: 5px !important;
        font-weight: normal !important;
        width: 600px !important;
        min-width: 100% !important;
      }
              
              /* END OF MOBILE GLOBAL STYLES - DO NOT CHANGE */
            }
            @media only screen and (max-width: 640px) {
              .container { width:100% !important; }
              .mobile-hidden { display:none !important; }
              .logo { display:block !important; padding:0 !important; }
              .photo img { width:100% !important; height:auto !important;}
              .nav5, .nav6 { display: none !important;}
              .fluid, .fluid-centered {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                margin-left: auto !important;
                margin-right: auto !important;
              }
              .fluid-centered {
                margin-left: auto !important;
                margin-right: auto !important;
              }
          .mobile-width {
           width:80% !important; 
           min-width:80% !important;
          }
                
      .top-banner-text {
        background-color: #0073b9; 
        color: #FFFFFF; 
        font-family: canada-type-gibson, Helvetica, Arial, sans-serif; 
        font-size: 14px; 
        line-height:28px; 
        text-align:center; 
        padding-top: 5px; 
        padding-bottom: 5px; 
        font-weight: normal; 
        width: 600px; 
        min-width: 100%
      }
              
              .adcopy {
        text-align: center;
              }
            }
          </style>
      <!--[if mso]>
            <style type="text/css">
                /* Begin Outlook Font Fix */
                body, table, td {
                    font-family: Arial, sans-serif ;
                    font-size:16px;
                    color:#000000;
                    line-height:1;
                }
                /* End Outlook Font Fix */
            </style>
          <![endif]-->
        </head>
        <body>
        <p>
        ${bodyCopy1}
        </p>
        </body>
        </html>`

}