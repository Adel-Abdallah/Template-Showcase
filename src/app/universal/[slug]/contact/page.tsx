import { loadThemeData } from "../../../../shared/utils/themeLoader";
import { notFound } from "next/navigation";

export default async function ContactPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();

    const { styles } = themeData;

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Get in Touch</h1>
                <p>We'd love to hear from you.</p>
            </section>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Name</label>
                            <input type="text" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(128,128,128,0.3)', background: 'transparent', color: 'inherit' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Email</label>
                            <input type="email" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(128,128,128,0.3)', background: 'transparent', color: 'inherit' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Subject</label>
                        <input type="text" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(128,128,128,0.3)', background: 'transparent', color: 'inherit' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Message</label>
                        <textarea rows={5} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(128,128,128,0.3)', background: 'transparent', color: 'inherit' }} />
                    </div>
                    <button
                        type="button"
                        style={{ padding: '1.2rem', borderRadius: '8px', border: 'none', background: '#333', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
