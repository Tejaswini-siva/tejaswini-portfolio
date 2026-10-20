import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Volume2,
  VolumeX,
  Sparkles,
  Bot,
  RotateCcw,
  Check,
  Copy,
  AlertCircle
} from "lucide-react";
import {
  chatbotWelcomeMessage,
  suggestedPrompts
} from "../data/chatbotProfile";
import {
  sendChatMessage,
  speakText,
  stopSpeaking,
  isSpeechSynthesisSupported
} from "../services/chatbotService";

export default function TejaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: chatbotWelcomeMessage,
      timestamp: "Just now",
      source: "verified-knowledge-base"
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll chat stream to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [messages, isOpen]);

  // Clean up speech synthesis when component unmounts or modal closes
  useEffect(() => {
    return () => stopSpeaking();
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
    const message = (textToSend || inputMessage).trim();
    if (!message || isLoading) return;

    const userMessageObj = {
      id: `user-${Date.now()}`,
      role: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMessageObj]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await sendChatMessage(message, messages);

      const botMessageObj = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        source: response.source
      };

      setMessages((prev) => [...prev, botMessageObj]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: "assistant",
          content:
            "I encountered a momentary connection hiccup. Tejaswini's verified profile highlights: Final-year B.E. ECE student at Velammal (89%) with proven Business Analysis impact (30% turnaround reduction at Kosmo One, 40% engagement surge at LOBES). Please feel free to email her directly at tejaswinisiva20@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          source: "fallback"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (text) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    const success = speakText(
      text,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false),
      () => setIsSpeaking(false)
    );

    if (!success) setIsSpeaking(false);
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleResetChat = () => {
    stopSpeaking();
    setIsSpeaking(false);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: chatbotWelcomeMessage,
        timestamp: "Just now",
        source: "verified-knowledge-base"
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button at bottom-right */}
      <div
        style={{
          position: "fixed",
          bottom: "1.8rem",
          right: "1.8rem",
          zIndex: 950
        }}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8052B8 0%, #321538 100%)",
              border: "2px solid var(--lavender-electric)",
              color: "#FFFFFF",
              boxShadow: "0 8px 30px rgba(128, 82, 184, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            aria-label="Open TejaBot AI Portfolio Assistant"
            title="Ask TejaBot about Tejaswini"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08) translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(184, 154, 244, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(128, 82, 184, 0.45)";
            }}
          >
            <Bot size={28} />
            {/* Live Indicator Pulse */}
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "#22c55e",
                border: "2px solid var(--bg-darkest)"
              }}
            />
          </button>
        )}
      </div>

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "clamp(320px, 92vw, 430px)",
            height: "clamp(500px, 80vh, 660px)",
            background: "rgba(23, 13, 29, 0.98)",
            border: "1px solid var(--border-medium)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85), var(--glow-subtle)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            zIndex: 999,
            overflow: "hidden",
            animation: "modalScale 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          role="dialog"
          aria-label="TejaBot Chat Interface"
        >
          {/* Header */}
          <div
            style={{
              padding: "1rem 1.2rem",
              background: "linear-gradient(135deg, rgba(50, 21, 56, 0.9) 0%, rgba(33, 20, 42, 0.9) 100%)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8052B8 0%, #4D1F63 100%)",
                  border: "1.5px solid var(--lavender-electric)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF"
                }}
              >
                <Bot size={20} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <h3 style={{ fontSize: "1.1rem", margin: 0, color: "var(--text-main)" }}>TejaBot</h3>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(34, 197, 94, 0.15)",
                      color: "#4ade80",
                      fontWeight: 600,
                      border: "1px solid rgba(34, 197, 94, 0.3)"
                    }}
                  >
                    AI Verified
                  </span>
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  Recruiter Assistant • S. Tejaswini
                </div>
              </div>
            </div>

            {/* Header controls: Voice, Reset, Close */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              {isSpeechSynthesisSupported() && (
                <button
                  type="button"
                  onClick={() => handleSpeak(messages[messages.length - 1]?.content || "")}
                  style={{
                    background: isSpeaking ? "rgba(214, 162, 207, 0.2)" : "rgba(255, 255, 255, 0.06)",
                    border: "none",
                    color: isSpeaking ? "var(--pink-soft)" : "var(--text-secondary)",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title={isSpeaking ? "Stop Speaking" : "Read Aloud Last Message"}
                  aria-label={isSpeaking ? "Stop speaking" : "Read aloud"}
                >
                  {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              )}

              <button
                type="button"
                onClick={handleResetChat}
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "none",
                  color: "var(--text-secondary)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                title="Reset Conversation"
                aria-label="Reset chat history"
              >
                <RotateCcw size={15} />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "none",
                  color: "var(--text-secondary)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                title="Close Assistant"
                aria-label="Close TejaBot"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem"
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={msg.id || idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.role === "user" ? "flex-end" : "flex-start"
                }}
              >
                <div
                  style={{
                    maxWidth: "88%",
                    padding: "0.75rem 1rem",
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #8052B8 0%, #4D1F63 100%)"
                        : "rgba(33, 20, 42, 0.85)",
                    border:
                      msg.role === "user"
                        ? "1px solid rgba(184, 154, 244, 0.3)"
                        : "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {msg.content}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginTop: "0.3rem",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    padding: "0 0.3rem"
                  }}
                >
                  <span>{msg.timestamp}</span>

                  {msg.role === "assistant" && (
                    <>
                      <span>•</span>
                      <button
                        onClick={() => handleCopy(msg.content, idx)}
                        style={{
                          background: "none",
                          border: "none",
                          color: copiedIndex === idx ? "var(--pink-soft)" : "var(--text-muted)",
                          padding: 0,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.2rem"
                        }}
                        title="Copy text"
                      >
                        {copiedIndex === idx ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedIndex === idx ? "Copied" : "Copy"}</span>
                      </button>

                      {isSpeechSynthesisSupported() && (
                        <>
                          <span>•</span>
                          <button
                            onClick={() => handleSpeak(msg.content)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "var(--text-muted)",
                              padding: 0,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.2rem"
                            }}
                            title="Speak"
                          >
                            <Volume2 size={12} />
                            <span>Speak</span>
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--pink-soft)", fontSize: "0.85rem", padding: "0.5rem" }}>
                <Sparkles size={16} className="typing-cursor" />
                <span>TejaBot is consulting verified profile data...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompt Chips (shows if messages <= 2) */}
          {messages.length <= 3 && !isLoading && (
            <div
              style={{
                padding: "0.5rem 1rem",
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                gap: "0.45rem",
                borderTop: "1px solid rgba(184, 154, 244, 0.08)",
                background: "rgba(16, 8, 18, 0.4)"
              }}
            >
              {suggestedPrompts.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  style={{
                    whiteSpace: "nowrap",
                    fontSize: "0.78rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(184, 154, 244, 0.1)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--lavender-electric)",
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(184, 154, 244, 0.2)";
                    e.currentTarget.style.color = "var(--pink-soft)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(184, 154, 244, 0.1)";
                    e.currentTarget.style.color = "var(--lavender-electric)";
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Input Box and Send Controls */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: "0.75rem 1rem",
              background: "rgba(16, 8, 18, 0.95)",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about Tejaswini's BA skills, projects, etc..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: "0.65rem 0.95rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(33, 20, 42, 0.8)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-main)",
                fontSize: "0.9rem"
              }}
            />

            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="btn-primary"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                padding: 0,
                opacity: isLoading || !inputMessage.trim() ? 0.5 : 1
              }}
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
