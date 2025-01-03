import { useState, useEffect } from 'react';
import PrivacyNotice from './PrivacyNotice';
import TermsAndConditions from './TermsAndConditions';

interface PolicyOverlayProps {
    onPolicyAccept?: (accepted: boolean) => void;
}

export default function PolicyOverlay({ onPolicyAccept }: PolicyOverlayProps) {
    const [showPolicyOverlay, setShowPolicyOverlay] = useState(false);
    const [showPolicyNoticeModal, setShowPolicyNoticeModal] = useState(false);
    const [showTermsAndConditionsModal, setShowTermsAndConditionsModal] = useState(false);

    useEffect(() => {
        const hasAgreed = JSON.parse(localStorage.getItem('policyAgreement') || 'false');
        if (!hasAgreed) {
            setShowPolicyOverlay(true);
        }
    }, []);

    const handlePolicyAccept = (accepted: boolean = true) => {
        localStorage.setItem('policyAgreement', accepted.toString());
        setShowPolicyOverlay(false);
        setShowTermsAndConditionsModal(false);
        setShowPolicyNoticeModal(false);
        onPolicyAccept?.(accepted);
    };

    if (!showPolicyOverlay) {
        return null;
    }

    return (
        <>
            <input
                type="checkbox"
                id="policy-toggle"
                checked
                style={{ display: "none" }}
                readOnly
            />
            <div className="policy-overlay">
                <label
                    htmlFor="policy-toggle"
                    className="policy-close"
                    onClick={() => handlePolicyAccept(false)}
                >
                    ×
                </label>
                <div className="policy-text">
                    If you continue browsing this website, you agree to our policies:
                    <br/>
                    <button
                        className="policy-button underline"
                        onClick={() => setShowTermsAndConditionsModal(true)}
                    >
                        Terms and Conditions
                    </button>
                    , &nbsp;
                    <button
                        className="policy-button underline"
                        onClick={() => setShowPolicyNoticeModal(true)}
                    >
                        Privacy Notice
                    </button>
                </div>
                <label htmlFor="policy-toggle">
                    <button
                        className="policy-continue"
                        onClick={() => handlePolicyAccept()}
                    >
                        Continue
                    </button>
                </label>
            </div>
            {showPolicyNoticeModal && (
                <PrivacyNotice onClose={() => setShowPolicyNoticeModal(false)} />
            )}
            {showTermsAndConditionsModal && (
                <TermsAndConditions onClose={() => setShowTermsAndConditionsModal(false)} />
            )}
        </>
    );
}
