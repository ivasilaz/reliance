import ServiceLayout from "@/components/ServiceLayout";
import SafeImage from "@/components/SafeImage";

export default function CoreCare() {
    return (
        <ServiceLayout
            title="Core Care Support"
            subtitle="Essential daily assistance that prioritizes dignity, safety, and personal well-being."
        >
            <div className="mb-16 h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <SafeImage
                    src="/core-care.webp"
                    alt="Core Care Support"
                    className="w-full h-full object-cover"
                    fallbackText="Core Care Image Placeholder"
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-brand-green">Respite Services</h3>
                    <p className="text-slate-600">Temporary relief for primary caregivers, ensuring your loved one continues to receive professional support.</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-brand-green">Day Services</h3>
                    <p className="text-slate-600">Comprehensive AM/PM support programs designed around your family’s unique schedule and needs.</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-brand-green">On-call Nursing</h3>
                    <p className="text-slate-600">24/7 access to professional nursing services for peace of mind and immediate health support.</p>
                </div>
            </div>
        </ServiceLayout>
    );
}
