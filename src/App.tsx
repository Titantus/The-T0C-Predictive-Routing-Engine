import { motion } from "motion/react";
import { Github, Linkedin, ExternalLink, Printer, Mail, Phone, Download } from "lucide-react";

const ACCENT_COLOR = "text-accent";
const ACCENT_GOLD = "text-accent-gold";

export default function App() {
  const handlePrint = () => {
    // Focus the window first to ensure the print command is received
    window.focus();
    window.print();
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      {/* Navigation / Controls */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 no-print bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-bold text-background">T0C</div>
            <span className="font-bold tracking-tighter text-xl">CAPABILITY BRIEF</span>
          </div>
          <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">
            Note: If "Export" fails, open app in a new tab
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-background font-bold rounded hover:bg-accent/80 transition-colors"
          >
            <Printer size={18} />
            EXPORT PDF
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-24 pb-12 px-4 space-y-24 print:space-y-0 print:pt-0 print:max-w-none print:px-0">
        
        {/* Slide 1: The Title Slide */}
        <section className="slide min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden border border-white/5 rounded-2xl p-12 bg-gradient-to-b from-white/5 to-transparent print:border-0 print:rounded-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              The T0C Predictive <br />
              <span className={ACCENT_COLOR}>Routing Engine</span>
            </h1>
            <p className={`text-2xl md:text-3xl font-medium tracking-tight mb-12 ${ACCENT_GOLD}`}>
              Deterministic Materials Modeling via Geometric Detuning
            </p>
            
            <div className="mt-24 space-y-2 text-sm text-white/60">
              <p className="font-bold text-white">Prepared by: Jonathon M. Craig</p>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <a href="tel:8016644059" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={14} /> (801) 664-4059
                </a>
                <a href="mailto:jonathonmcraig@yahoo.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={14} /> jonathonmcraig@yahoo.com
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Faint background lattice effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </section>

        {/* Slide 2: The Deep-Tech Bottleneck */}
        <section className="slide min-h-[80vh] flex flex-col justify-center border border-white/5 rounded-2xl p-12 print:border-0 print:rounded-none">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 border-l-4 border-accent pl-6">
              The Computational Bottleneck in Materials Science
            </h2>
            <div className="space-y-8 text-xl leading-relaxed text-white/80">
              <p>
                Current materials discovery relies on two severely bottlenecked methods:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    1. Physical Lab Testing
                  </h3>
                  <p className="text-sm">Capital-intensive, slow, and reliant on 20th-century empirical trial-and-error.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    2. Quantum Simulations
                  </h3>
                  <p className="text-sm">Computationally massive (DFT/Neural Nets), requiring supercomputers just to model localized atomic interactions.</p>
                </div>
              </div>
              
              <div className={`mt-12 p-8 border-2 border-accent/30 bg-accent/5 rounded-xl italic text-2xl font-medium ${ACCENT_COLOR}`}>
                "The industry requires a mathematically deterministic, computationally light engine to predict thermal and structural behaviors under load."
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: The T0C Solution */}
        <section className="slide min-h-[80vh] flex flex-col justify-center border border-white/5 rounded-2xl p-12 print:border-0 print:rounded-none">
          <h2 className="text-4xl font-bold mb-12 border-l-4 border-accent pl-6">
            The Universal Geometric Codec
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-white/80">
              <p>
                The T0C Engine shifts materials modeling from abstract quantum probabilities to deterministic geometric routing. It calculates material behavior using a single probability selector (η) derived from three localized detuning variables:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className={`font-bold ${ACCENT_COLOR}`}>Δθ</span>
                  <div>
                    <span className="font-bold text-white block">Angular Detuning</span>
                    Deviation from the 109.47° tetrahedral ideal.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className={`font-bold ${ACCENT_COLOR}`}>Δχ</span>
                  <div>
                    <span className="font-bold text-white block">Cloud Mismatch</span>
                    Geometric friction of the electron cloud.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className={`font-bold ${ACCENT_COLOR}`}>Δf</span>
                  <div>
                    <span className="font-bold text-white block">Frequency Clash</span>
                    Harmonic mismatch against target wavelengths.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center">
              <div className="text-6xl font-black mb-4 text-accent">η</div>
              <p className="text-xl font-medium">
                By computing η, the T0C engine accurately classifies materials into <span className="text-white font-bold">Transparent, Rigid, Elastic, or Dissipative</span> modes instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Slide 4: Empirical Validation */}
        <section className="slide min-h-[80vh] flex flex-col justify-center items-center border border-white/5 rounded-2xl p-12 print:border-0 print:rounded-none">
          <h2 className="text-4xl font-bold mb-8 self-start border-l-4 border-accent pl-6">
            Validated Across Three Physical Domains
          </h2>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <img 
              src="/input_file_0.png" 
              alt="T0C Predictive Routing Engine Dashboard" 
              className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl shadow-accent/10 border border-white/10"
              referrerPolicy="no-referrer"
            />
            <p className="mt-8 text-sm text-white/60 max-w-3xl text-center italic">
              Figure 1: The T0C Engine correctly predicting optical transparency classification (Left), exact transition metal spectral reflection/pigment (Middle), and the non-linear high-pressure acoustic velocity anomaly of the Ice VII-to-Ice X transition at ~60 GPa (Right).
            </p>
          </div>
        </section>

        {/* Slide 5: Commercial Applications */}
        <section className="slide min-h-[80vh] flex flex-col justify-center border border-white/5 rounded-2xl p-12 print:border-0 print:rounded-none">
          <h2 className="text-4xl font-bold mb-12 border-l-4 border-accent pl-6">
            Immediate Engineering Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-white/5 rounded-xl border-t-4 border-accent">
              <h3 className="text-xl font-bold text-white">Advanced Thermal Management</h3>
              <p className="text-sm text-accent font-bold">Application: EV Batteries, Data Centers, Aerospace.</p>
              <p className="text-sm text-white/70">Capability: Designing geometric heat sinks that mathematically maximize "Residue-Mode" torque venting (η ≤ 0.01) for directional heat exhaust.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 rounded-xl border-t-4 border-accent">
              <h3 className="text-xl font-bold text-white">Predictive Alloy Design</h3>
              <p className="text-sm text-accent font-bold">Application: Semiconductors and Structural Metals.</p>
              <p className="text-sm text-white/70">Capability: Running high-speed computational sweeps to identify novel transition metal mixtures balancing conductivity with thermal stability.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 rounded-xl border-t-4 border-accent">
              <h3 className="text-xl font-bold text-white">High-Pressure Structural Ceramics</h3>
              <p className="text-sm text-accent font-bold">Application: Deep-sea exploration, defense shielding.</p>
              <p className="text-sm text-white/70">Capability: Predicting the exact pressure thresholds where amorphous materials geometrically lock into high-rigidity "Straight-Mode" siphons.</p>
            </div>
          </div>
        </section>

        {/* Slide 6: The Ask / Next Steps */}
        <section className="slide min-h-[80vh] flex flex-col justify-center items-center text-center border border-white/5 rounded-2xl p-12 bg-gradient-to-t from-accent/5 to-transparent print:border-0 print:rounded-none">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-12">Strategic Partnership & Scaling</h2>
            <div className="space-y-8 text-xl text-white/80 mb-16">
              <p>
                The T0C Predictive Routing Engine is currently operating as a Python-based computational model.
              </p>
              <div className="text-left space-y-4 bg-white/5 p-8 rounded-xl border border-white/10">
                <p className="font-bold text-white">I am seeking:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>A technical review call with your materials modeling / computational design team to demonstrate the live code.</li>
                  <li>Institutional partnership or seed funding to scale the T0C API for commercial deployment and conduct targeted lab validations of new alloy predictions.</li>
                </ol>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-2">
                <p className={`font-bold ${ACCENT_COLOR}`}>Jonathon M. Craig</p>
                <p className="text-sm flex items-center gap-2"><Mail size={14} /> jonathonmcraig@yahoo.com</p>
                <p className="text-sm flex items-center gap-2"><Phone size={14} /> (801) 664-4059</p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/Titantus/Truth-Zero-C" target="_blank" className="text-sm flex items-center gap-2 hover:text-accent transition-colors">
                  <Github size={14} /> GitHub Repository <ExternalLink size={12} />
                </a>
                <a href="https://www.linkedin.com/in/jonathan-craig-3800a03b7" target="_blank" className="text-sm flex items-center gap-2 hover:text-accent transition-colors">
                  <Linkedin size={14} /> LinkedIn Profile <ExternalLink size={12} />
                </a>
                <a href="https://colab.research.google.com/drive/194alljJ1T0kkAYh5irOqJ7MuM9M2Ihje?usp=sharing" target="_blank" className="text-sm flex items-center gap-2 hover:text-accent transition-colors">
                  <ExternalLink size={14} /> Google Colab Notebook
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-white/20 text-xs border-t border-white/5 no-print">
        <p>© 2026 T0C PREDICTIVE ROUTING ENGINE. PROPRIETARY CAPABILITY BRIEF.</p>
      </footer>
    </div>
  );
}
