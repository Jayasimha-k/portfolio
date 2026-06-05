"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Mail, Send, Terminal, Phone, Copy, Check } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [terminalLog, setTerminalLog] = useState("");

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const githubRef = useMagnetic<HTMLAnchorElement>();
  const linkedinRef = useMagnetic<HTMLAnchorElement>();
  const emailRef = useMagnetic<HTMLAnchorElement>();
  const submitBtnRef = useMagnetic<HTMLButtonElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    setTerminalLog("Establishing secure uplink...");

    // Simulated terminal logs
    setTimeout(() => {
      setTerminalLog("Encrypting payload with RSA-2048...");
    }, 1000);

    setTimeout(() => {
      setTerminalLog("Transmitting message to Jayasimha Core...");
    }, 2000);

    setTimeout(() => {
      setStatus("success");
      setTerminalLog("Transmission complete. Connection closed.");
      setFormState({ name: "", email: "", message: "" });
    }, 3200);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        {/* Title */}
        <div className={styles.titleGroup}>
          <p className="text-gradient-cyan-blue">05 / Connection</p>
          <h2>Get In Touch</h2>
        </div>

        <div className={styles.contactLayout}>
          {/* Left Side: Contact Form */}
          <motion.div
            className={`${styles.formWrapper} glass-panel`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="name">
                  Identifier / Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Recruiter / Engineer"
                  className={styles.inputField}
                  disabled={status !== "idle"}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="email">
                  Uplink Address / Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. contact@company.com"
                  className={styles.inputField}
                  disabled={status !== "idle"}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="message">
                  Transmission payload / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your inquiry or project scope..."
                  className={styles.textareaField}
                  disabled={status !== "idle"}
                />
              </div>

              {/* Status Banner */}
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    className={`${styles.statusMessage} ${
                      status === "success" ? styles.statusSuccess : styles.statusSending
                    }`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Terminal size={16} />
                    <span style={{ fontFamily: "monospace" }}>{terminalLog}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                ref={submitBtnRef}
                type="submit"
                className="btn-magnetic btn-primary"
                style={{ width: "100%", marginTop: "1rem" }}
                disabled={status !== "idle"}
              >
                {status === "idle" ? (
                  <>
                    Transmit Message <Send style={{ marginLeft: "0.5rem" }} size={16} />
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  "Transmitted!"
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Side: Info & Socials */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.infoGroup}>
              <h3 className="text-gradient-cyan-blue">Digital Coordinates</h3>
              <p>
                Based in Bangalore, India. Available for internship roles, research projects, and collaborative software engineering worldwide.
              </p>
            </div>

            <div className={styles.infoGroup}>
              <h3 className="text-gradient-blue-purple">Uplink Networks</h3>
              <p style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>Email: jayasimha.k2006@gmail.com</span>
                <button 
                  onClick={() => copyToClipboard('jayasimha.k2006@gmail.com', 'email')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cyan)' }}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </p>
              <p style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>Phone: +91 9972519591</span>
                <button 
                  onClick={() => copyToClipboard('+919972519591', 'phone')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cyan)' }}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </p>
              <div className={styles.socialGrid}>
                <a
                  ref={githubRef}
                  href="https://github.com/Jayasimha-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialRoundel}
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a
                  ref={linkedinRef}
                  href="https://www.linkedin.com/in/jayasimha-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialRoundel}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a
                  href="https://www.instagram.com/itz_me____jay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialRoundel}
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a
                  ref={emailRef}
                  href="mailto:jayasimha.k2006@gmail.com"
                  className={styles.socialRoundel}
                  title="Email"
                >
                  <Mail size={22} />
                </a>
                <a
                  href="tel:+919972519591"
                  className={styles.socialRoundel}
                  title="Call"
                >
                  <Phone size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
