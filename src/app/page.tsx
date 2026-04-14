"use client";

export default function Home() {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* This hides standard scrollbars and centers the chat */
        body { 
            margin: 0; 
            padding: 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh;
            background-color: transparent;
            overflow: hidden;
        }
      </style>
      <script>
        function initFreshdesk() {
          window.fdWidget.init({
            token: "01KP69FNEB3H50AG7KABC1P0PA",
            host: "https://sabriayoub2026success.freshdesk.com",
            widgetId: "01KP69FR7HA0WKJNWEC2J029JT"
          });
          
          // Force open the widget to simulate an embedded native experience
          setTimeout(function() {
             if (window.fdWidget && window.fdWidget.open) {
                window.fdWidget.open();
             }
          }, 1000);
        }

        function initialize(i,t){var e;i.getElementById(t)?initFreshdesk():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://sabriayoub2026success.freshdesk.com/webchat/js/widget.js",e.onload=initFreshdesk,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
      </script>
    </head>
    <body>
    </body>
    </html>
  `;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
      {/* Header simulateur d'une plateforme métier */}
      <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
         <div className="flex items-center space-x-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 shadow-md">
                 <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
             </div>
             <h1 className="text-xl font-bold text-slate-800 tracking-tight">Portail d'Assistance</h1>
         </div>
         <nav className="hidden space-x-6 md:flex">
             <span className="text-sm font-medium text-slate-500 cursor-pointer hover:text-indigo-600 transition-colors">Accueil</span>
             <span className="text-sm font-medium text-slate-500 cursor-pointer hover:text-indigo-600 transition-colors">Base de connaissances</span>
             <span className="text-sm font-medium text-indigo-600 cursor-pointer">Support</span>
         </nav>
      </header>
      
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-8">
        <div className="mb-8 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comment pouvons-nous vous aider ?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Discutez directement avec notre équipe de support. Le chat est totalement intégré à cette page.
            </p>
        </div>

        {/* Le conteneur du chat "Embedded" */}
        <div className="relative w-full max-w-lg h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 ring-4 ring-slate-900/5">
          <div className="absolute top-0 left-0 right-0 h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 space-x-2 z-10">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-amber-400"></div>
              <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="pt-12 w-full h-full bg-[#f4f6f8]">
            {/* L'iframe sert de sandbox pour éviter les conflits et forcer la vue encapsulée */}
            <iframe 
              srcDoc={htmlContent} 
              className="w-full h-full border-0 rounded-b-3xl"
              title="Freshdesk Chat Embedded Widget"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
