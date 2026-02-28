import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-24 pb-32 font-sans">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">Let's Talk About Your Care Plan</h1>
                    <p className="text-xl text-slate-500">Reach out today for a free consultation and community assessment.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-bento border border-slate-100 shadow-2xl shadow-brand-green/5">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">First Name</label>
                                    <input type="text" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brand-green border-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Last Name</label>
                                    <input type="text" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brand-green border-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                <input type="email" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brand-green border-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
                                <select className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brand-green border-none transition-all appearance-none">
                                    <option>Youth & Children Services</option>
                                    <option>Core Care Support</option>
                                    <option>Growth & Recovery</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Message</label>
                                <textarea rows={5} className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-brand-green border-none transition-all"></textarea>
                            </div>
                            <button className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-green/20 hover:scale-[1.02] transition-transform active:scale-95">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-brand-dark p-8 rounded-bento text-white">
                            <h3 className="text-2xl font-bold mb-8">Quick Contact</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Phone className="text-brand-orange w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold">Call Us</p>
                                        <p className="text-white/60">(419) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className="text-brand-orange w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <p className="text-white/60">info@reliancecare.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <MapPin className="text-brand-orange w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-bold">Office</p>
                                        <p className="text-white/60">3454 Oak Alley Ct,<br />Toledo, OH 43606</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-yellow p-8 rounded-bento text-brand-dark">
                            <div className="flex gap-4 items-center mb-4">
                                <Clock className="w-6 h-6" />
                                <h3 className="text-xl font-bold">Office Hours</h3>
                            </div>
                            <p className="font-medium opacity-80">Mon - Fri: 9am - 5pm</p>
                            <p className="font-medium opacity-80">24/7 Support Available for Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
