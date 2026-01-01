'use client';

import { useState } from 'react';
import Link from "next/link";
import styles from "./TemplateCard.module.css";
import { Template } from "../shared/data/templates";
import DownloadModal from "./DownloadModal";

export default function TemplateCard({ template }: { template: Template }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.cardWrapper}>
                <Link
                    href={`/universal/${template.id}`}
                    target="_blank"
                    className={styles.card}
                    style={{
                        background: template.bg,
                        fontFamily: template.font,
                        border: template.border
                    }}
                >
                    <h2 className={styles.cardTitle} style={{ color: template.text, fontFamily: template.font }}>
                        {template.name}
                    </h2>
                    <p className={styles.cardDesc} style={{ color: template.descColor }}>
                        {template.desc}
                    </p>
                    <div className={styles.pages}>
                        <span style={{ background: template.pillBg, color: template.pillText }}>PLP</span>
                        <span style={{ background: template.pillBg, color: template.pillText }}>PDP</span>
                        <span style={{ background: template.pillBg, color: template.pillText }}>Cart</span>
                        <span style={{ background: template.pillBg, color: template.pillText }}>Wishlist</span>
                    </div>
                </Link>
                <div className={styles.cardActions}>
                    <Link
                        href={`/universal/${template.id}`}
                        target="_blank"
                        className={styles.previewBtn}
                    >
                        Preview
                    </Link>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={styles.downloadBtn}
                        style={{ border: 'none', cursor: 'pointer', fontSize: 'inherit' }}
                    >
                        Download
                    </button>
                </div>
            </div>

            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                templateId={template.id}
                templateName={template.name}
            />
        </>
    );
}
