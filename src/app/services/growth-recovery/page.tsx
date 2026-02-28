import ServiceLayout from "@/components/ServiceLayout";
import SafeImage from "@/components/SafeImage";

export default function GrowthRecovery() {
    return (
        <ServiceLayout
            title="Growth & Recovery"
            subtitle="Empowering paths to independence through rehabilitative and educational programs."
        >
            <div className="mb-16 h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <SafeImage
                    src="/growth-recovery.webp"
                    alt="Growth & Recovery"
                    className="w-full h-full object-cover"
                    fallbackText="Growth & Recovery Image Placeholder"
                />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-10 bg-brand-yellow/5 border-2 border-brand-yellow/10 rounded-bento">
                    <h3 className="text-3xl font-bold mb-6">Vocational Rehabilitation</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">Helping individuals develop meaningful skills and find employment opportunities within their community.</p>
                </div>
                <div className="p-10 bg-brand-green/5 border-2 border-brand-green/10 rounded-bento text-brand-green">
                    <h3 className="text-3xl font-bold mb-6">Horse & Animal Interaction</h3>
                    <p className="text-brand-dark/70 text-lg leading-relaxed">Utilizing therapeutic interactions with animals to improve emotional well-being and physical mobility.</p>
                </div>
            </div>
        </ServiceLayout>
    );
}
