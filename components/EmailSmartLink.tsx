"use client";

import React from 'react';
import { Mail } from 'lucide-react';

const EmailSmartLink: React.FC = () => {
  const EMAIL = "nasserreem624@gmail.com";
  const SUBJECT = "طلب صيانة HomeServe Pro";
  const BODY = "أهلاً، محتاج خدمة صيانة. المحافظة: ___ / الخدمة: ___ / تفاصيل المشكلة: ___";

  const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
  
  const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 1. Try to open the default system mail client
    window.location.href = MAILTO_URL;

    // 2. Fallback to Gmail Web after a short delay (900ms) 
    setTimeout(() => {
      window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
    }, 900);
  };

  return (
    <button 
      onClick={handleEmailClick}
      className="flex w-full items-center gap-4 text-slate-400 hover:text-blue-400 transition-all justify-start group cursor-pointer relative z-[9999] pointer-events-auto"
      title="ارسل بريد إلكتروني"
    >
      {/* الأيقونة أولاً لتبدأ من اليمين في نظام RTL */}
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all shrink-0">
        <Mail className="w-5 h-5" />
      </div>
      <span className="text-lg hover:underline underline-offset-8 decoration-blue-400/30 transition-all text-right truncate">
        {EMAIL}
      </span>
    </button>
  );
};

export default EmailSmartLink;