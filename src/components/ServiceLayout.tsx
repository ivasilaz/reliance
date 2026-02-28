import Link from 'next/link';

export default function ServiceLayout({
    children,
    title,
    subtitle
}: {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}) {
    return (
        <div className="pt-24 pb-32">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <Link href="/" className="text-brand-green font-bold text-sm flex items-center gap-2 mb-6">
                        ← Back to Home
                    </Link>
                    <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4">{title}</h1>
                    <p className="text-xl text-slate-600 max-w-2xl">{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
}
