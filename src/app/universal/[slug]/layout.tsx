import { notFound } from "next/navigation";
import { loadThemeData } from "../../../shared/utils/themeLoader";
import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";

export default async function UniversalLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) {
        return notFound();
    }

    const { config, styles } = themeData;

    return (
        <div className={styles.pageWrapper}>
            <Header config={config.header} styles={styles} title={config.title} slug={slug} themeConfig={config} />
            <main>{children}</main>
            <Footer config={config.footer} styles={styles} />
        </div>
    );
}
