'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const INTERESTS = ['Banking, M&A & Advisory','Research, Sales & Trading','Institutional Asset Management','Private Equity / Venture Capital','Private Wealth Management','Other / Not sure'];
const FREE_EMAIL = ['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com'];

export default function DemoForm() {
  const params = useSearchParams();
  const [interest, setInterest] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const pre = params.get('interest');
    if (pre && INTERESTS.includes(pre)) setInterest([pre]);
  }, [params]);

  function validateEmail(v: string) {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) return 'Please enter a valid email address.';
    const domain = v.split('@')[1]?.toLowerCase();
    if (FREE_EMAIL.includes(domain)) return 'Please use your business email address.';
    return '';
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateEmail(email); setEmailErr(err);
    if (err || !consent || interest.length === 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card card-pad">
        <div className="rounded-xl px-4 py-3 font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20">✓ Thank you — your demo request has been received.</div>
        <p className="mt-4 text-muted">Our capital-markets team will reach out within one business day. In the meantime, explore our <a href="/solutions" className="text-brand-300 font-semibold">solutions</a>.</p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} noValidate className="card card-pad">
      <Field label="Full name" required><input required name="name" className="inp" /></Field>
      <Field label="Business email" required error={emailErr}>
        <input required type="email" name="email" value={email}
          onChange={(e) => { setEmail(e.target.value); if (emailErr) setEmailErr(validateEmail(e.target.value)); }}
          onBlur={() => setEmailErr(validateEmail(email))}
          className={`inp ${emailErr ? '!border-spark-500' : ''}`} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Company name" required><input required name="company" className="inp" /></Field>
        <Field label="Job title"><input name="title" className="inp" /></Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone"><input name="phone" className="inp" /></Field>
        <Field label="Estimated users">
          <select name="users" className="inp"><option value="">Select…</option><option>1–25</option><option>26–100</option><option>101–500</option><option>500+</option></select>
        </Field>
      </div>
      <fieldset className="mb-5">
        <legend className="block text-[0.82rem] font-semibold text-white/90 mb-2">Product / market interest <span className="text-spark-400">*</span></legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {INTERESTS.map((i) => (
            <label key={i} className="flex items-center gap-2 text-sm text-muted">
              <input type="checkbox" className="accent-brand-500" checked={interest.includes(i)} onChange={(e) => setInterest(e.target.checked ? [...interest, i] : interest.filter((x) => x !== i))} />{i}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Message"><textarea name="message" rows={3} className="inp" /></Field>
      <label className="flex items-start gap-2 text-xs text-muted mb-5">
        <input type="checkbox" className="mt-0.5 accent-brand-500" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>I agree to be contacted about InsightsCRM and accept the <a href="/privacy-policy" className="text-brand-300 underline">Privacy Policy</a>. <span className="text-spark-400">*</span></span>
      </label>
      <button type="submit" className="btn btn-lg btn-primary w-full">Request a Demo</button>
      <p className="mt-3 text-[0.7rem] text-dim text-center">Protected by bot detection. UTM &amp; source captured on submission.</p>
      <style>{`.inp{width:100%;padding:11px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:12px;font-size:.95rem;color:#EAF0FB;background:rgba(255,255,255,0.04)}.inp::placeholder{color:#6B7790}.inp:focus{outline:none;border-color:#4F93FF;box-shadow:0 0 0 3px rgba(79,147,255,0.22)}.inp option{color:#0A0F1C}`}</style>
    </form>
  );
}
function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="block text-[0.82rem] font-semibold text-white/90 mb-1.5">{label}{required && <span className="text-spark-400"> *</span>}</label>
      {children}
      {error && <p className="mt-1.5 text-[0.78rem] text-spark-400">{error}</p>}
    </div>
  );
}
