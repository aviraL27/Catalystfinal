"use client"

import { X, FileText, AlertCircle, Clock } from "lucide-react"

interface HostelRulesNoticesModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function HostelRulesNoticesModal({ isOpen, onClose }: HostelRulesNoticesModalProps) {
    const rules = [
        {
            title: "Quiet Hours",
            icon: <Clock size={16} />,
            description: "Silence must be maintained from 11:00 PM to 7:00 AM. Loud conversations, music, or activities during these hours may result in penalties.",
        },
        {
            title: "Visiting Hours",
            icon: <Clock size={16} />,
            description: "Guest visiting hours: 2:00 PM to 8:00 PM. All visitors must be registered at the security desk. Overnight guests require prior permission from the warden.",
        },
        {
            title: "Entry Time",
            icon: <Clock size={16} />,
            description: "All residents must return to the hostel by 10:00 PM on weekdays and 11:00 PM on weekends. Late entries require permission from the RA or warden.",
        },
        {
            title: "Mess Timings",
            icon: <Clock size={16} />,
            description: "Breakfast: 7:30 AM - 9:00 AM | Lunch: 12:30 PM - 2:00 PM | Snacks: 4:00 PM - 5:00 PM | Dinner: 7:00 PM - 9:00 PM",
        },
        {
            title: "Room Maintenance",
            icon: <FileText size={16} />,
            description: "Rooms must be kept clean and tidy. Damages will be charged to the resident. Inspections will be conducted monthly.",
        },
        {
            title: "Prohibited Items",
            icon: <AlertCircle size={16} />,
            description: "No alcohol, drugs, weapons, or any illegal substances allowed in the hostel premises. Smoking is strictly prohibited in all areas.",
        },
        {
            title: "Electrical Safety",
            icon: <AlertCircle size={16} />,
            description: "Personal electric kettles, heaters, and other high-power devices are not allowed. Use of extension cords is restricted. Any electrical issues must be reported immediately.",
        },
        {
            title: "Laundry Rules",
            icon: <FileText size={16} />,
            description: "Common laundry facilities are available on each floor. Washing machine usage: 7:00 AM - 10:00 PM only. Please clean machines after use.",
        },
    ]

    const notices = [
        {
            title: "Hostel Maintenance Closure",
            date: "Dec 15, 2024",
            description: "Hostel Block A will be closed for water tank cleaning from 10:00 AM to 4:00 PM on December 20th. Please plan accordingly.",
        },
        {
            title: "New Year Celebration Guidelines",
            date: "Dec 20, 2024",
            description: "Quiet hours will be extended to 1:00 AM on December 31st. All activities must be approved by the warden. Safety guidelines must be strictly followed.",
        },
        {
            title: "Hostel Fee Payment Reminder",
            date: "Dec 18, 2024",
            description: "Final reminder: Hostel fees for the next semester must be paid by December 25th. Late payments will incur a penalty.",
        },
        {
            title: "Water Heating System Upgrade",
            date: "Dec 12, 2024",
            description: "The hot water system in all blocks will be upgraded this weekend. There may be intermittent hot water supply. We apologize for the inconvenience.",
        },
    ]

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" style={{ maxWidth: "900px", maxHeight: "90vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Hostel Rules & Notices</h2>
                    <button onClick={onClose} className="modal-close">
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-body" style={{ padding: "24px" }}>
                    {/* Rules Section */}
                    <div style={{ marginBottom: "32px" }}>
                        <h3 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600", color: "#1f2937", display: "flex", alignItems: "center", gap: "8px" }}>
                            <FileText size={20} />
                            Hostel Rules
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                            {rules.map((rule, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: "16px",
                                        backgroundColor: "#f9fafb",
                                        borderRadius: "8px",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                                        {rule.icon}
                                        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>
                                            {rule.title}
                                        </h4>
                                    </div>
                                    <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "1.5" }}>
                                        {rule.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Notices Section */}
                    <div>
                        <h3 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600", color: "#1f2937", display: "flex", alignItems: "center", gap: "8px" }}>
                            <AlertCircle size={20} />
                            Recent Notices
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {notices.map((notice, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: "16px",
                                        backgroundColor: "#fef3c7",
                                        borderRadius: "8px",
                                        border: "1px solid #fcd34d",
                                        borderLeft: "4px solid #fbbf24",
                                    }}
                                >
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
                                        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>
                                            {notice.title}
                                        </h4>
                                        <span style={{ fontSize: "12px", color: "#92400e", fontWeight: "500" }}>
                                            {notice.date}
                                        </span>
                                    </div>
                                    <p style={{ margin: 0, fontSize: "13px", color: "#78350f", lineHeight: "1.5" }}>
                                        {notice.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div
                        style={{
                            marginTop: "24px",
                            padding: "12px",
                            backgroundColor: "#dbeafe",
                            borderRadius: "8px",
                            fontSize: "12px",
                            color: "#1e40af",
                        }}
                    >
                        <strong>Important:</strong> Please read and comply with all hostel rules. Violations may result in penalties or disciplinary action. For clarifications, contact your Resident Assistant (RA) or the hostel warden's office.
                    </div>
                </div>
            </div>
        </div>
    )
}

