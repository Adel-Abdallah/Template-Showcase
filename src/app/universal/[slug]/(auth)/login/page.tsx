import { loadThemeData } from "../../../../../shared/utils/themeLoader";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LoginPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    if (!themeData) return notFound();

    const { styles, config } = themeData;

    return (
        <div className={styles.container} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '2rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back</h1>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', background: 'transparent', color: 'inherit' }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', background: 'transparent', color: 'inherit' }}
                    />
                    <button
                        type="button" // Change to submit when connected
                        style={{ padding: '1rem', marginTop: '1rem', borderRadius: '6px', border: 'none', background: '#333', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Sign In
                    </button>
                </form>
                <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    <Link href={`/universal/${slug}/signup`} style={{ textDecoration: 'underline' }}>
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
}
