"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Freshdesk initialization script
    function initFreshdesk() {
      if ((window as any).fdWidget) {
        (window as any).fdWidget.init({
          token: "01KP69FNEB3H50AG7KABC1P0PA",
          host: "https://sabriayoub2026success.freshdesk.com",
          widgetId: "01KP69FR7HA0WKJNWEC2J029JT"
        });
        setIsLoaded(true);
      }
    }

    function initialize(i: any, t: string) {
      let e;
      if (i.getElementById(t)) {
        initFreshdesk();
      } else {
        e = i.createElement("script");
        e.id = t;
        e.async = true;
        e.src = "https://sabriayoub2026success.freshdesk.com/webchat/js/widget.js";
        e.onload = initFreshdesk;
        i.head.appendChild(e);
      }
    }

    function initiateCall() {
      initialize(document, "Freshdesk-js-sdk");
    }

    // Call the script initiation
    initiateCall();

  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 font-sans text-slate-100 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px] mix-blend-screen pointer-events-none" />
      
      <main className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl flex flex-col items-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Support Webchat
        </h1>
        <p className="mb-8 text-center text-slate-400">
          Le widget de messagerie automatisé a été injecté directement sur cette page.
        </p>

        {isLoaded ? (
          <div className="mt-6 flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-2 text-sm text-emerald-400 animate-in fade-in slide-in-from-bottom-2 bg-emerald-400/10 px-4 py-3 rounded-xl border border-emerald-400/20">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Widget en ligne ! (regardez en bas à droite)</span>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex items-center space-x-2 text-sm text-blue-400 animate-pulse">
            <div className="h-4 w-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
            <span>Injection du script Freshdesk en cours...</span>
          </div>
        )}
      </main>
      
      <div className="mt-8 text-center text-slate-500">
        <p className="text-sm font-medium">Détails de configuration :</p>
        <p className="mt-1 text-xs font-mono">
          HOST: sabriayoub2026success.freshdesk.com
          <br/>
          WIDGET ID: 01KP69FR7HA0WKJNWEC2J029JT
        </p>
      </div>
    </div>
  );
}
