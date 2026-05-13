import React, { useState, useRef } from "react";

const linkStyle: React.CSSProperties = {
    color: "#3f4373",
    textDecoration: "underline",
    display: "block",
    marginBottom: "6px",
    fontSize: "0.82rem"
};

const HelpPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                zIndex: 99999,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: "0.82rem",
                lineHeight: 1.5
            }}
        >
            {/* Popup card — rendered before button so it appears above */}
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "calc(100% + 12px)",
                        right: 0,
                        width: "220px",
                        background: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.12)",
                        border: "1px solid #e2e4f0",
                        overflow: "hidden",
                        zIndex: 99999
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            background: "#3f4373",
                            color: "#ffffff",
                            padding: "10px 14px",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <span>Help &amp; Info</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "#ffffff",
                                cursor: "pointer",
                                fontSize: "1.1rem",
                                lineHeight: 1,
                                padding: 0
                            }}
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "12px 14px" }}>
                        <p style={{ color: "#555", fontSize: "0.8rem", marginBottom: "10px" }}>
                            You are not logged in.
                        </p>

                        <a href="https://learning.faimer.org/admin/tool/dataprivacy/summary.php" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            Data retention summary
                        </a>
                        <a href="https://www.openlms.net/open-lms-mobile-app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            Get the mobile app
                        </a>

                        <p style={{ color: "#1d2125", fontWeight: 600, fontSize: "0.82rem", margin: "8px 0 4px" }}>
                            Policies:
                        </p>
                        <div style={{ paddingLeft: "8px" }}>
                            <a href="https://www.intealth.org/terms/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                Terms and Conditions
                            </a>
                            <a href="https://www.intealth.org/privacy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                Privacy Notice
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            borderTop: "1px solid #e8eaf0",
                            padding: "8px 14px",
                            fontSize: "0.78rem",
                            color: "#888"
                        }}
                    >
                        Powered by{" "}
                        <a href="https://moodle.org" target="_blank" rel="noopener noreferrer" style={{ color: "#3f4373", textDecoration: "underline" }}>
                            Moodle
                        </a>
                    </div>

                    {/* Arrow pointing down toward button */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-8px",
                            right: "16px",
                            width: "16px",
                            height: "16px",
                            background: "#ffffff",
                            border: "1px solid #e2e4f0",
                            borderTop: "none",
                            borderLeft: "none",
                            transform: "rotate(45deg)",
                            boxShadow: "2px 2px 4px rgba(0,0,0,0.06)"
                        }}
                    />
                </div>
            )}

            {/* Help button */}
            <button
                onClick={() => setIsOpen(prev => !prev)}
                aria-label="Help"
                style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: isOpen ? "#3f4373" : "#ffffff",
                    color: isOpen ? "#ffffff" : "#3f4373",
                    border: "2px solid #3f4373",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s, color 0.2s",
                    lineHeight: 1
                }}
            >
                ?
            </button>
        </div>
    );
};

export default HelpPopup;
