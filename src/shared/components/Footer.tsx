import Link from "next/link";
import React from "react";

type FooterProps = {
    config: {
        text: string;
        links: { label: string; href: string }[];
    };
    styles: Record<string, string>;
};

export default function Footer({ config, styles }: FooterProps) {
    return (
        <footer className={`${styles.footer} global-footer`}>
            <div className={`${styles.footerLinks} global-footer-links`}>
                {config?.links.map((link, index) => (
                    <Link key={index} href={link.href} className={styles.footerLink}>
                        {link.label}
                    </Link>
                ))}
            </div>
            <p className={styles.copyright}>{config?.text}</p>
            <style>{`
                @media (max-width: 768px) {
                    .global-footer-links {
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 1rem !important;
                    }
                    .global-footer {
                        padding: 2rem 1rem !important;
                    }
                }
            `}</style>
        </footer>
    );
}
