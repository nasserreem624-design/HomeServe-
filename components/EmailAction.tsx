
"use client";

import React from 'react';
import { Mail } from 'lucide-react';

interface EmailActionProps {
  email: string;
  subject?: string;
}

const EmailAction: React.FC<EmailActionProps> = ({ email, subject = "طلب صيانة HomeServe Pro" }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // استخدام JavaScript لفتح البريد الإلكتروني يضمن العمل بنسبة 100% حتى لو كانت هناك طبقات شفافة
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <button 
      onClick={handleClick}
      className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors justify-end group cursor-pointer relative z-[9999] pointer-events-auto"
      title="اضغط لإرسال بريد إلكتروني"
    >
      <span className="text-lg hover:underline underline-offset-4">{email}</span>
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all">
        <Mail className="w-5 h-5" />
      </div>
    </button>
  );
};

export default EmailAction;
