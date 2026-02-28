import ServiceLayout from "@/components/ServiceLayout";
import SafeImage from "@/components/SafeImage";

export default function Logistics() {
    return (
        <ServiceLayout
            title="Strategic Logistics"
            subtitle="Safe, reliable, and professional non-medical transportation services for all your care needs."
        >
            <div className="mb-16 h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <SafeImage
                    src="/logistics-transport.webp"
                    alt="Strategic Logistics"
                    className="w-full h-full object-cover"
                    fallbackText="Logistics Image Placeholder"
                />
            </div>
            <div className="max-w-4xl bg-slate-50 p-12 rounded-bento border-4 border-white shadow-xl">
                <h2 className="text-3xl font-bold mb-8">Comprehensive Transportation</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h4 className="font-bold text-brand-orange uppercase tracking-widest text-sm">Medical Appointments</h4>
                        <p className="text-slate-600">Timely and assisted transport to clinics, hospitals, and therapy sessions.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-brand-orange uppercase tracking-widest text-sm">Community Integration</h4>
                        <p className="text-slate-600">Support for social activities, grocery shopping, and community events.</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
}
