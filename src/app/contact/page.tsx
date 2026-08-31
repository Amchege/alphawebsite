import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Alpha Tec Solutions. Find our office location in Nairobi, Kenya, or reach out via email and phone.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <p className="font-mono text-[10px] text-orange-500 uppercase tracking-[0.2em] mb-4">Contact Us</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6">
            Let&apos;s Build Something <span className="text-orange-500">Great</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a question, need a quote, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Our Office</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Nairobi, Kenya<br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <a href="mailto:info@alphatecdesigns.co.ke" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">
                      info@alphatecdesigns.co.ke
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <a href="tel:+254723641660" className="text-slate-400 text-sm hover:text-orange-400 transition-colors">
                      +254 723 641 660
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Working Hours</h3>
                    <p className="text-slate-400 text-sm">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-3 bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden h-full min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.265894989886!2d36.80799905!3d-1.284347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%20CBD%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1690000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)" }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
