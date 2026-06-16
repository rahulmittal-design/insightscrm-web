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
    const err = validateEmail(email);
    setEmailErr(err);
    if (err || !consent || interest.length === 0) return;
    // Demo scaffold: in production POST to /api/demo with UTM + consent + source.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-ink-200 rounded-lg p-8 shadow-sm">
        <div className="bg-success/10 text-success rounded-md px-4 py-3 font-medium">✓ Thank you — your demo request has been received.</div>
        <p className="mt-4 text-ink-600">Our capital-markets team will reach out within one business day. In the meantime, explore our <a href="/solutions" className="text-primary-700 font-semibold">solutions</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white border border-ink-200 rounded-lg p-7 shadow-sm">
      <Field label="Full name" required><input required name="name" className="inp" /></Field>
      <Field label="Business email" required error={emailErr}>
        <input required type="email" name="email" value={email}
          onChange={(e) => { setEmail(e.target.value); if (emailErr) setEmailErr(validateEmail(e.target.value)); }}
          onBlur={() => setEmailErr(validateEmail(email))}
          className={`inp ${emailErr ? 'border-error' : ''}`} />
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
        <legend className="block text-[0.82rem] font-semibold text-ink-700 mb-2">Product / market interest <span className="text-accent-600">*</span></legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {INTERESTS.map((i) => (
            <label key={i} className="flex items-center gap-2 text-sm text-ink-700">
              <input type="checkbox" checked={interest.includes(i)} onChange={(e) => setInterest(e.target.checked ? [...interest, i] : interest.filter((x) => x !== i))} />
              {i}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Message"><textarea name="message" rows={3} className="inp" /></Field>
      <label className="flex items-start gap-2 text-xs text-ink-600 mb-5">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
        <span>I agree to be contacted about InsightsCRM and accept the <a href="/privacy-policy" className="text-primary-700 underline">Privacy Policy</a>. <span className="text-accent-600">*</span></span>
      </label>
      <button type="submit" className="btn btn-lg btn-accent w-full">Request a Demo</button>
      <p className="mt-3 text-[0.7rem] text-ink-400 text-center">Protected by bot detection. UTM &amp; source captured on submission.</p>
      <style>{`.inp{width:100%;padding:11px 14px;border:1px solid #C2CAD6;border-radius:10px;font-size:.95rem;color:#0E1726;background:#fff}.inp:focus{outline:none;border-color:#1670CA;box-shadow:0 0 0 3px rgba(22,112,202,.18)}`}</style>
    </form>
  );
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="block text-[0.82rem] font-semibold text-ink-700 mb-1.5">{label}{required && <span className="text-accent-600"> *</span>}</label>
      {children}
      {error && <p className="mt-1.5 text-[0.78rem] text-error">{error}</p>}
    </div>
  );
}
