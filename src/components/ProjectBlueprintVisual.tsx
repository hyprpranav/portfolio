import React from 'react';

interface ProjectBlueprintProps {
  projectId: string;
  category: string;
  title: string;
}

export const ProjectBlueprintVisual: React.FC<ProjectBlueprintProps> = ({
  projectId,
  category,
  title,
}) => {
  const renderVisualContent = () => {
    switch (projectId) {
      case 'neoguard':
        return (
          <svg className="w-full h-full p-6 text-emerald-600" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="200" rx="6" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="35" y="45" fill="#475569" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">SYS_BLOCK // NEOGUARD_CORE</text>
            
            {/* Sensor Stage */}
            <rect x="40" y="70" width="85" height="50" rx="4" fill="#f8fafc" stroke="#059669" strokeWidth="1.5" />
            <text x="50" y="92" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">MAX30102</text>
            <text x="50" y="107" fill="#64748b" fontSize="9" fontFamily="sans-serif">SpO2 / Pulse</text>

            <rect x="40" y="135" width="85" height="50" rx="4" fill="#f8fafc" stroke="#059669" strokeWidth="1.5" />
            <text x="50" y="157" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">TEMP_SENS</text>
            <text x="50" y="172" fill="#64748b" fontSize="9" fontFamily="sans-serif">Infant Skin Temp</text>

            {/* Connecting lines */}
            <path d="M125 95H160V120H180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M125 160H160V120H180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />

            {/* Microcontroller MCU */}
            <rect x="180" y="85" width="100" height="70" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
            <text x="195" y="112" fill="#065f46" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">ESP32 MCU</text>
            <text x="195" y="128" fill="#047857" fontSize="9" fontFamily="JetBrains Mono">Dual-Core RTOS</text>
            <text x="195" y="142" fill="#059669" fontSize="8" fontFamily="JetBrains Mono">PID Thermal Loop</text>

            {/* Output stage */}
            <path d="M280 120H305" stroke="#059669" strokeWidth="1.5" />
            <rect x="305" y="95" width="70" height="50" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
            <text x="313" y="117" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">WARMING</text>
            <text x="313" y="132" fill="#64748b" fontSize="8" fontFamily="sans-serif">Closed-Loop</text>

            {/* Coordinate annotation */}
            <circle cx="370" cy="30" r="3" fill="#10b981" />
            <text x="270" y="210" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">STATUS: TELEMETRY_ACTIVE</text>
          </svg>
        );

      case 'sentinel':
        return (
          <svg className="w-full h-full p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="200" rx="6" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="35" y="45" fill="#475569" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">DOSIMETER // COLORIMETRIC_SPECTRA</text>

            {/* Chemical Matrix */}
            <circle cx="90" cy="120" r="45" stroke="#059669" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="90" cy="120" r="30" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="65" y="123" fill="#065f46" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">H₂S FILM</text>

            {/* Optical Delta Arrow */}
            <path d="M145 120H200" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="148" y="110" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">ΔE Chromatic</text>

            {/* AI Vision Stage */}
            <rect x="210" y="80" width="150" height="80" rx="4" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
            <text x="225" y="105" fill="#0f172a" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OPTICAL ANALYSIS</text>
            <text x="225" y="122" fill="#64748b" fontSize="9" fontFamily="sans-serif">Concentration Curve (ppm)</text>
            <text x="225" y="140" fill="#059669" fontSize="9" fontFamily="JetBrains Mono">CALIBRATED: 0-100 PPM</text>
          </svg>
        );

      case 'smart-bms':
        return (
          <svg className="w-full h-full p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="200" rx="6" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="35" y="45" fill="#475569" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">PARADIGM // ACTIVE_ISOLATION_LOOP</text>
            
            {/* Logic stages */}
            {['Measure', 'Calculate', 'Compare', 'Isolate', 'Continue'].map((step, idx) => (
              <g key={step} transform={`translate(${35 + idx * 67}, 90)`}>
                <rect width="60" height="50" rx="4" fill={step === 'Isolate' ? '#fff1f2' : step === 'Continue' ? '#ecfdf5' : '#f8fafc'} stroke={step === 'Isolate' ? '#f43f5e' : step === 'Continue' ? '#10b981' : '#94a3b8'} strokeWidth="1.5" />
                <text x="8" y="24" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">{step}</text>
                <text x="8" y="38" fill="#64748b" fontSize="7" fontFamily="sans-serif">Stage 0{idx + 1}</text>
                {idx < 4 && (
                  <path d="M63 25L67 25" stroke="#94a3b8" strokeWidth="1.5" />
                )}
              </g>
            ))}

            <text x="35" y="180" fill="#334155" fontSize="10" fontFamily="JetBrains Mono">
              ESTIMATION: Internal Resistance (ESR) via Instantaneous Voltage Sag
            </text>
            <text x="35" y="198" fill="#059669" fontSize="9" fontFamily="JetBrains Mono">
              BYPASS: Solid-State MOSFET Circuit Isolation
            </text>
          </svg>
        );

      case 'smart-railway-safety':
        return (
          <svg className="w-full h-full p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="200" rx="6" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="35" y="45" fill="#475569" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">EDGE_SAFETY // PLATFORM_ZONE_DETECTION</text>

            {/* Platform Boundary Line */}
            <line x1="40" y1="130" x2="360" y2="130" stroke="#f59e0b" strokeWidth="3" strokeDasharray="8 4" />
            <text x="40" y="120" fill="#b45309" fontSize="9" fontFamily="JetBrains Mono">PLATFORM DEMARCATION BOUNDARY</text>

            {/* Track side */}
            <rect x="40" y="145" width="320" height="45" fill="#f1f5f9" rx="2" />
            <line x1="50" y1="160" x2="350" y2="160" stroke="#94a3b8" strokeWidth="2" />
            <line x1="50" y1="175" x2="350" y2="175" stroke="#94a3b8" strokeWidth="2" />
            <text x="160" y="172" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">RAIL TRACK ZONE</text>

            {/* Sensor nodes */}
            <circle cx="100" cy="85" r="14" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
            <text x="91" y="89" fill="#065f46" fontSize="9" fontFamily="JetBrains Mono">PIR</text>
            <path d="M100 100V125" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" />

            <circle cx="280" cy="85" r="14" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
            <text x="272" y="89" fill="#065f46" fontSize="8" fontFamily="JetBrains Mono">USONIC</text>
            <path d="M280 100V125" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );

      case 'hfss-antenna':
        return (
          <svg className="w-full h-full p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="200" rx="6" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="35" y="45" fill="#475569" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">HFSS // 5.8 GHz PATCH_ANTENNA_GEOMETRY</text>

            {/* Substrate */}
            <rect x="70" y="75" width="160" height="120" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" />
            <text x="80" y="93" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">FR-4 (εr = 4.4)</text>

            {/* Radiating Patch */}
            <rect x="95" y="100" width="110" height="70" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <text x="110" y="135" fill="#065f46" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">PATCH (W x L)</text>

            {/* Inset Microstrip Feed */}
            <path d="M145 170V195" stroke="#059669" strokeWidth="4" />
            <text x="155" y="190" fill="#059669" fontSize="8" fontFamily="JetBrains Mono">50Ω Feedline</text>

            {/* S11 plot preview */}
            <rect x="250" y="75" width="120" height="120" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M260 100Q290 102 310 170Q330 102 360 100" stroke="#059669" strokeWidth="2" fill="none" />
            <text x="260" y="90" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">S11 Resonance</text>
            <text x="290" y="185" fill="#059669" fontSize="8" fontFamily="JetBrains Mono">5.8 GHz &lt; -20dB</text>
          </svg>
        );

      default:
        return (
          <svg className="w-full h-full p-6" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="200" rx="6" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="35" y="45" fill="#475569" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
              ARCH_SPEC // {category.toUpperCase().replace(/\s+/g, '_')}
            </text>

            {/* Circuit Nodes & Topology */}
            <circle cx="80" cy="120" r="24" fill="#f8fafc" stroke="#059669" strokeWidth="1.5" />
            <text x="65" y="124" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">INPUT</text>

            <path d="M104 120H150" stroke="#10b981" strokeWidth="1.5" />

            <rect x="150" y="95" width="100" height="50" rx="4" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
            <text x="165" y="118" fill="#065f46" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">PROCESSING</text>
            <text x="175" y="132" fill="#047857" fontSize="8" fontFamily="JetBrains Mono">LOGIC</text>

            <path d="M250 120H296" stroke="#10b981" strokeWidth="1.5" />

            <circle cx="320" cy="120" r="24" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
            <text x="303" y="124" fill="#0f172a" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">OUTPUT</text>

            <text x="35" y="195" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono" className="truncate">
              REF: {title}
            </text>
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-full bg-[#fafbfc] border border-charcoal-200 rounded-lg flex items-center justify-center relative overflow-hidden select-none">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-tech-grid-pattern opacity-60" />
      <div className="relative w-full h-full z-10">
        {renderVisualContent()}
      </div>
    </div>
  );
};
