import ServiceLayout from "@/components/ServiceLayout";
import SafeImage from "@/components/SafeImage";

export default function About() {
    return (
        <ServiceLayout
            title="About Reliance Care Solutions"
            subtitle="Built on trust, empathy, and professional excellence. Our mission is to provide care that respects human dignity and empowers independence."
        >
            <div className="space-y-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-12 h-[300px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                            <SafeImage
                                src="/about-philosophy.webp"
                                alt="Our Philosophy"
                                className="w-full h-full object-cover"
                                fallbackText="Philosophy Image Placeholder"
                            />
                        </div>
                        <h2 className="text-4xl font-display font-bold mb-6">Our Philosophy</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            We believe that every individual deserves to live a life of dignity and purpose. Our approach is not just about providing assistance, but about building meaningful connections and fostering a supportive community.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-brand-light rounded-2xl">
                                <p className="text-brand-green font-bold mb-1">Compassion</p>
                                <p className="text-sm text-slate-500 font-medium">At the heart of everything we do.</p>
                            </div>
                            <div className="p-6 bg-brand-light rounded-2xl">
                                <p className="text-brand-green font-bold mb-1">Integrity</p>
                                <p className="text-sm text-slate-500 font-medium">Honest and transparent care.</p>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
                        <SafeImage
                            src="/about-excellence.webp"
                            alt="Professional Excellence"
                            className="w-full h-full object-cover"
                            fallbackText="Excellence Image Placeholder"
                            aspectRatio="aspect-[4/5]"
                        />
                    </div>
                </div>

                <div className="bg-brand-dark p-12 lg:p-20 rounded-bento text-white">
                    <h2 className="text-4xl font-display font-bold mb-12 text-center">Certified Excellence</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="border-l-4 border-brand-orange pl-8">
                            <h3 className="text-2xl font-bold mb-4">CPI Certified</h3>
                            <p className="text-white/70 leading-relaxed">Our staff is certified in Crisis Prevention Institute (CPI) protocols, ensuring the safest environment for both clients and caregivers.</p>
                        </div>
                        <div className="border-l-4 border-brand-yellow pl-8">
                            <h3 className="text-2xl font-bold mb-4">PFS Training</h3>
                            <p className="text-white/70 leading-relaxed">Professional Family Support (PFS) standards are strictly followed, providing a compassionate and structured support system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
}
