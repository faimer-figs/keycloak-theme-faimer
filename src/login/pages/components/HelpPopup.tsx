import React, { useState } from "react";
import "../styles.css";

const HelpPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    React.useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const handleClickOutside = event => {
            if (isOpen && event.target.closest(".tooltip-container") === null) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="fixed right-10 bottom-10 inline-block tooltip-container">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-gray-600 hover:text-gray-800 transition-colors bg-gray-50 rounded-full font-extrabold"
                style={{ width: 30, color: "#1d2125" }}
                aria-label="Help"
            >
                ?
            </button>

            {isOpen && (
                <div className="absolute bottom-full right-5 mb-2 w-48 bg-white rounded-lg shadow-lg py-3 z-50 transform translate-x-1/4">
                    {/* Tooltip Arrow */}
                    <div className="absolute -bottom-1 right-10 w-3 h-3 bg-white transform rotate-45" />

                    <div className="relative z-10 bg-white">
                        <div className="pb-3">
                            <p className="px-3" style={{ color: "#1d2125" }}>
                                You are not logged in.
                            </p>

                            <div className="px-3">
                                <a
                                    href="https://learning.faimer.org/admin/tool/dataprivacy/summary.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block underline"
                                    style={{ color: "#1d2125" }}
                                >
                                    Data retention summary
                                </a>

                                <a
                                    href="https://www.openlms.net/open-lms-mobile-app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block underline"
                                    style={{ color: "#1d2125" }}
                                >
                                    Get the mobile app
                                </a>

                                <div className="">
                                    <a
                                        href="https://learning.faimer.org/admin/tool/policy/viewall.php?returnurl=https%3A%2F%2Flearning.faimer.org%2Flogin%2Findex.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block underline"
                                        style={{ color: "#1d2125" }}
                                    >
                                        Policies:
                                    </a>
                                    <div className="pl-3 space-y-1 pb-3">
                                        <a
                                            href="https://www.intealth.org/terms/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block underline"
                                            style={{ color: "#1d2125" }}
                                        >
                                            Terms and Conditions
                                        </a>
                                        <a
                                            href="https://www.intealth.org/privacy/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block underline"
                                            style={{ color: "#1d2125" }}
                                        >
                                            Privacy Notice
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p
                                className="px-3 pt-3 border-t-2 border-t-gray-100"
                                style={{ color: "#1d2125" }}
                            >
                                Powered by{" "}
                                <a
                                    href="https://moodle.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                    style={{ color: "#1d2125" }}
                                >
                                    Moodle
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelpPopup;
