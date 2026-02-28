import ServiceLayout from "@/components/ServiceLayout";
import SafeImage from "@/components/SafeImage";

export default function YouthPrograms() {
    return (
        <ServiceLayout
            title="Youth & Children Programs"
            subtitle="Specialized support systems for the next generation, focusing on stability, growth, and community integration."
        >
            <div className="mb-12 relative h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <SafeImage
                    src="/youth-programs.webp"
                    alt="Youth & Children Programs"
                    className="w-full h-full object-cover"
                    fallbackText="Youth Programs Image Placeholder"
                />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-green p-12 rounded-bento text-white">
                    <h3 className="text-3xl font-bold mb-4">Group Home Services</h3>
                    <p className="opacity-90 leading-relaxed">Providing a safe, structured, and nurturing environment for youth in transition.</p>
                </div>
                <div className="bg-brand-orange p-12 rounded-bento text-white">
                    <h3 className="text-3xl font-bold mb-4">Emergency Respite</h3>
                    <p className="opacity-90 leading-relaxed">Swift, compassionate placement for children requiring immediate care and safety.</p>
                </div>
                <div className="bg-slate-100 p-12 rounded-bento md:col-span-2 text-brand-dark">
                    <h3 className="text-3xl font-bold mb-4">CANS Certified Assessments</h3>
                    <p className="text-slate-600 leading-relaxed">Professional Child and Adolescent Needs and Strengths (CANS) evaluations to build tailored care paths.</p>
                </div>
            </div>
        </ServiceLayout>
    );
}
