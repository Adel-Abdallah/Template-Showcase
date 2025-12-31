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
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                {config.links.map((link, index) => (
                    <Link key={index} href={link.href} className={styles.footerLink}>
                        {link.label}
                    </Link>
                ))}
            </div>
            <p className={styles.copyright}>{config.text}</p>
        </footer>
    );
}
