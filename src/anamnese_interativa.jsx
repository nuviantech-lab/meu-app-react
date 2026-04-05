import { useState, useRef, useCallback, useEffect } from "react";

const SECTIONS = [
  { id: "identification", title: "Identificação", icon: "👤" },
  { id: "diagnosis", title: "Diagnóstico Empresarial", icon: "🔍" },
  { id: "people", title: "Gestão de Pessoas", icon: "👥" },
  { id: "commercial", title: "Gestão Comercial", icon: "📊" },
  { id: "expectations", title: "Expectativas", icon: "🎯" },
];

const SCALE_ITEMS_DIAGNOSIS = [
  "Identificar a estrutura de uma empresa",
  "Levantar faturamento e objetivos financeiros",
  "Identificar as principais dores do cliente",
  "Mapear formas de captação de clientes",
  "Comunicar-se com empresários informais",
  "Construir confiança na primeira reunião",
];

const SCALE_ITEMS_PEOPLE = [
  "Definir perfis de cargo",
  "Criar padrões de processos operacionais",
  "Conduzir contratação e seleção",
  "Criar programas de integração",
  "Definir rotinas gerenciais",
  "Aplicar feedbacks construtivos",
  "Avaliar desempenho (45 e 90 dias)",
  "Definir quadro de funcionários",
];

const SCALE_ITEMS_COMMERCIAL = [
  "Os 7 passos da venda (loja física)",
  "Vendas para loja virtual/digital",
  "Implantação e uso de CRM",
  "Metas individuais para vendedores",
  "Acompanhamento de KPIs",
  "Técnica CVBA",
  "Contorno de objeções",
  "Pós-venda e fidelização",
  "Reuniões de alinhamento matinal",
  "Quadro de Gestão à Vista",
];

const getLevel = (avg) => {
  if (avg <= 1.5) return { label: "Iniciante", color: "#e74c3c", bg: "#fdecea" };
  if (avg <= 2.5) return { label: "Básico", color: "#e67e22", bg: "#fef5e7" };
  if (avg <= 3.5) return { label: "Intermediário", color: "#f1c40f", bg: "#fef9e7" };
  if (avg <= 4.5) return { label: "Avançado", color: "#27ae60", bg: "#eafaf1" };
  return { label: "Especialista", color: "#1a7a4c", bg: "#d5f5e3" };
};

const avgArr = (arr) => {
  const f = arr.filter(v => v > 0);
  return f.length ? f.reduce((a, b) => a + b, 0) / f.length : 0;
};

const inputStyle = { width: "100%", padding: "10px 14px", border: "1.5px solid #cbd5e1", borderRadius: 8, fontSize: 14, color: "#1e293b", background: "#fff", outline: "none", boxSizing: "border-box" };
const textareaStyle = { ...inputStyle, minHeight: 80, resize: "vertical", fontFamily: "inherit" };

const EMPTY_DATA = {
  name: "", company: "", role: "", experience: "", teamSize: "", prevMethodology: "",
  firstStep: "", knowsAnamnesis: "", diagDifficulty: "",
  diagScale: Array(SCALE_ITEMS_DIAGNOSIS.length).fill(0),
  peopleScale: Array(SCALE_ITEMS_PEOPLE.length).fill(0),
  hasRoutines: "", managerRoutine: "",
  commercialScale: Array(SCALE_ITEMS_COMMERCIAL.length).fill(0),
  mainKPI: "", hasCRM: "", sevenSteps: "",
  expectation: "", biggestDifficulty: "", selfScore: "", specificTopic: "",
};

/* ── Reusable components (outside main to avoid remount) ── */

function ScaleInput({ items, values, onChange }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px 10px", background: "#0f2b46", color: "#fff", borderRadius: "6px 0 0 0", fontWeight: 600 }}>Competência</th>
            {[1,2,3,4,5].map(n => (
              <th key={n} style={{ width: 44, textAlign: "center", padding: "8px 2px", background: "#0f2b46", color: "#fff", fontWeight: 600, borderRadius: n === 5 ? "0 6px 0 0" : 0 }}>{n}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff" }}>
              <td style={{ padding: "8px 10px", borderBottom: "1px solid #e8ecf0", color: "#334155", fontSize: 13 }}>{item}</td>
              {[1,2,3,4,5].map(n => (
                <td key={n} style={{ textAlign: "center", borderBottom: "1px solid #e8ecf0" }}>
                  <div onClick={() => onChange(i, n)} style={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", height: 32 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", border: values[i] === n ? "2px solid #1a6fb5" : "2px solid #cbd5e1", background: values[i] === n ? "#1a6fb5" : "#fff" }} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4, fontStyle: "italic" }}>1 = Nenhum | 5 = Domínio total</p>
    </div>
  );
}

function RadioGroup({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
      {options.map((opt, i) => (
        <div key={i} onClick={() => onChange(opt)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, cursor: "pointer", background: value === opt ? "#ebf5fb" : "#f8fafc", border: value === opt ? "1.5px solid #1a6fb5" : "1.5px solid #e8ecf0" }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", border: value === opt ? "2px solid #1a6fb5" : "2px solid #cbd5e1", background: value === opt ? "#1a6fb5" : "#fff", flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: "#334155" }}>{opt}</span>
        </div>
      ))}
    </div>
  );
}

function BarChart({ items, values, color = "#1a6fb5" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {items.map((item, i) => {
        const val = values[i] || 0;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 180, fontSize: 11, color: "#475569", flexShrink: 0, textAlign: "right" }}>{item}</div>
            <div style={{ flex: 1, height: 18, background: "#e8ecf0", borderRadius: 9, overflow: "hidden" }}>
              <div style={{ width: `${(val / 5) * 100}%`, height: "100%", background: color, borderRadius: 9, transition: "width 0.4s" }} />
            </div>
            <div style={{ width: 22, fontSize: 12, fontWeight: 700, color, textAlign: "center" }}>{val}</div>
          </div>
        );
      })}
    </div>
  );
}

function ScoreCard({ label, avg, level }) {
  return (
    <div style={{ background: level.bg, borderRadius: 10, padding: "12px 8px", textAlign: "center", border: `1.5px solid ${level.color}22`, flex: 1, minWidth: 70 }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: level.color }}>{avg.toFixed(1)}</div>
      <div style={{ fontSize: 10, fontWeight: 700, color: level.color, textTransform: "uppercase" }}>{level.label}</div>
      <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{label}</div>
    </div>
  );
}

/* ── Report component (reused in form and admin) ── */
function ReportView({ data, onPrint, compact }) {
  const reportRef = useRef(null);
  const dAvg = avgArr(data.diagScale);
  const pAvg = avgArr(data.peopleScale);
  const cAvg = avgArr(data.commercialScale);
  const all = [...data.diagScale, ...data.peopleScale, ...data.commercialScale].filter(v => v > 0);
  const gAvg = all.length ? all.reduce((a, b) => a + b, 0) / all.length : 0;
  const dLevel = getLevel(dAvg);
  const pLevel = getLevel(pAvg);
  const cLevel = getLevel(cAvg);
  const gLevel = getLevel(gAvg);

  const renderBarHTML = (items, values, color) => items.map((item, i) => {
    const val = values[i] || 0;
    return `<div style="margin:3px 0;display:flex;align-items:center;gap:6px"><div style="width:220px;font-size:12px;color:#475569;text-align:right">${item}</div><div style="flex:1;height:16px;background:#e8ecf0;border-radius:8px;overflow:hidden"><div style="width:${(val/5)*100}%;height:100%;background:${color};border-radius:8px"></div></div><div style="width:22px;font-size:12px;font-weight:700;color:${color};text-align:center">${val}</div></div>`;
  }).join("");

  const doPrint = () => {
    const el = reportRef.current;
    if (!el) return;
    const w = window.open("", "_blank");
    w.document.write(`<!DOCTYPE html><html><head><title>Relatório - ${data.name}</title><style>
      body{font-family:'Segoe UI',sans-serif;padding:32px;color:#1e293b;max-width:780px;margin:0 auto}
      h1{color:#0f2b46;border-bottom:3px solid #1a6fb5;padding-bottom:10px}
      h2{color:#1a6fb5;margin-top:24px} h3{color:#0f2b46}
      .ig{display:grid;grid-template-columns:1fr 1fr;gap:6px 20px;margin:12px 0}
      .ii{padding:5px 0;border-bottom:1px solid #e8ecf0}
      .il{font-weight:600;color:#475569;font-size:12px}
      .sb{display:inline-block;padding:6px 16px;border-radius:6px;font-weight:700;font-size:16px;margin:6px 4px}
      .ab{background:#f8fafc;padding:10px 14px;border-left:3px solid #1a6fb5;margin:6px 0;border-radius:0 6px 6px 0;font-size:13px}
      @media print{body{padding:16px}}
    </style></head><body>${el.innerHTML}</body></html>`);
    w.document.close();
    w.print();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
        {!compact && <h2 style={{ fontSize: 20, color: "#0f2b46", margin: 0 }}>Relatório de Anamnese</h2>}
        <button onClick={doPrint} style={{ padding: "8px 20px", background: "#0f2b46", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
          🖨️ Imprimir / PDF
        </button>
      </div>

      {/* Hidden printable */}
      <div ref={reportRef} style={{ display: "none" }}>
        <h1>Relatório de Anamnese — {data.name}</h1>
        <p style={{ color: "#64748b" }}>Programa de Formação em Assessoria Comercial | {data.date || new Date().toLocaleDateString("pt-BR")}</p>
        <h2>1. Identificação</h2>
        <div className="ig">
          {[["Nome", data.name],["Empresa", data.company],["Cargo", data.role],["Experiência", data.experience],["Equipe", data.teamSize],["Metodologia anterior", data.prevMethodology || "Nenhuma"]].map(([l,v],i)=>(
            <div key={i} className="ii"><span className="il">{l}:</span> {v||"—"}</div>
          ))}
        </div>
        <h2>2. Nível Geral</h2>
        <p><span className="sb" style={{background:gLevel.bg,color:gLevel.color}}>GERAL: {gAvg.toFixed(1)} — {gLevel.label}</span></p>
        <p>
          <span className="sb" style={{background:dLevel.bg,color:dLevel.color}}>Diagnóstico: {dAvg.toFixed(1)}</span>
          <span className="sb" style={{background:pLevel.bg,color:pLevel.color}}>Pessoas: {pAvg.toFixed(1)}</span>
          <span className="sb" style={{background:cLevel.bg,color:cLevel.color}}>Comercial: {cAvg.toFixed(1)}</span>
        </p>
        <h2>3. Diagnóstico Empresarial</h2>
        <div className="ab"><strong>Primeiro passo:</strong> {data.firstStep||"—"}</div>
        <div className="ab"><strong>Anamnese:</strong> {data.knowsAnamnesis||"—"}</div>
        <div dangerouslySetInnerHTML={{__html:renderBarHTML(SCALE_ITEMS_DIAGNOSIS,data.diagScale,"#1a6fb5")}} />
        <div className="ab"><strong>Dificuldade:</strong> {data.diagDifficulty||"—"}</div>
        <h2>4. Gestão de Pessoas</h2>
        <div dangerouslySetInnerHTML={{__html:renderBarHTML(SCALE_ITEMS_PEOPLE,data.peopleScale,"#27ae60")}} />
        <div className="ab"><strong>Rotinas:</strong> {data.hasRoutines||"—"}</div>
        <div className="ab"><strong>Gerente:</strong> {data.managerRoutine||"—"}</div>
        <h2>5. Gestão Comercial</h2>
        <div dangerouslySetInnerHTML={{__html:renderBarHTML(SCALE_ITEMS_COMMERCIAL,data.commercialScale,"#e67e22")}} />
        <div className="ab"><strong>KPI:</strong> {data.mainKPI||"—"}</div>
        <div className="ab"><strong>CRM:</strong> {data.hasCRM||"—"}</div>
        <div className="ab"><strong>7 Passos:</strong> {data.sevenSteps||"—"}</div>
        <h2>6. Expectativas</h2>
        <div className="ab"><strong>Expectativa:</strong> {data.expectation||"—"}</div>
        <div className="ab"><strong>Dificuldade:</strong> {data.biggestDifficulty||"—"}</div>
        <div className="ab"><strong>Nota 1-10:</strong> {data.selfScore||"—"}</div>
        <div className="ab"><strong>Tema:</strong> {data.specificTopic||"—"}</div>
        <h2>7. Recomendação</h2>
        <p>{gAvg<=2?"Atenção especial. Acompanhamento individual recomendado.":gAvg<=3.5?"Base existente. Foco nos módulos com menor pontuação.":"Boa maturidade. Foco em técnicas avançadas."}</p>
      </div>

      {/* Visible report */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg, #0f2b46, #1a6fb5)", padding: "20px 24px" }}>
          <h3 style={{ color: "#fff", margin: 0, fontSize: 17 }}>{data.name || "Gestor"}</h3>
          <p style={{ color: "#93c5fd", margin: "4px 0 0", fontSize: 12 }}>{data.company||"—"} | {data.role||"—"} | Exp: {data.experience||"—"} | {data.date||""}</p>
        </div>
        <div style={{ display: "flex", gap: 10, padding: "16px 24px", flexWrap: "wrap" }}>
          <ScoreCard label="Geral" avg={gAvg} level={gLevel} />
          <ScoreCard label="Diagnóstico" avg={dAvg} level={dLevel} />
          <ScoreCard label="Pessoas" avg={pAvg} level={pLevel} />
          <ScoreCard label="Comercial" avg={cAvg} level={cLevel} />
        </div>
        <div style={{ padding: "0 24px 16px" }}>
          <h4 style={{ color: "#0f2b46", fontSize: 13, marginBottom: 8 }}>Diagnóstico Empresarial</h4>
          <BarChart items={SCALE_ITEMS_DIAGNOSIS} values={data.diagScale} color="#1a6fb5" />
          <h4 style={{ color: "#0f2b46", fontSize: 13, marginBottom: 8, marginTop: 16 }}>Gestão de Pessoas</h4>
          <BarChart items={SCALE_ITEMS_PEOPLE} values={data.peopleScale} color="#27ae60" />
          <h4 style={{ color: "#0f2b46", fontSize: 13, marginBottom: 8, marginTop: 16 }}>Gestão Comercial</h4>
          <BarChart items={SCALE_ITEMS_COMMERCIAL} values={data.commercialScale} color="#e67e22" />
        </div>
        <div style={{ padding: "0 24px 20px" }}>
          <h4 style={{ color: "#0f2b46", fontSize: 13, marginBottom: 8 }}>Respostas</h4>
          {[["Primeiro passo",data.firstStep],["Anamnese",data.knowsAnamnesis],["Dificuldade 1º contato",data.diagDifficulty],["Rotinas",data.hasRoutines],["Dia a dia gerente",data.managerRoutine],["KPI",data.mainKPI],["CRM",data.hasCRM],["7 Passos",data.sevenSteps],["Expectativa",data.expectation],["Dificuldade",data.biggestDifficulty],["Nota 1-10",data.selfScore],["Tema",data.specificTopic]].map(([l,v],i)=>v?(
            <div key={i} style={{ padding: "6px 12px", borderLeft: "3px solid #1a6fb5", background: "#f8fafc", borderRadius: "0 6px 6px 0", marginBottom: 6, fontSize: 12 }}>
              <span style={{ fontWeight: 600, color: "#475569" }}>{l}:</span>
              <span style={{ color: "#1e293b", marginLeft: 6 }}>{v}</span>
            </div>
          ):null)}
        </div>
        <div style={{ margin: "0 24px 20px", padding: "14px 18px", background: gLevel.bg, border: `1.5px solid ${gLevel.color}33`, borderRadius: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: gLevel.color, marginBottom: 4 }}>📋 Recomendação</div>
          <div style={{ fontSize: 12, color: "#334155", lineHeight: 1.5 }}>
            {gAvg<=2?"Atenção especial em todos os módulos. Acompanhamento individual e exercícios extras.":gAvg<=3.5?"Base de conhecimento existente. Foco nos módulos com menor pontuação e simulações práticas.":"Boa maturidade. Aprofundar técnicas avançadas e replicação da metodologia."}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* ══  MAIN APP                                   ══ */
/* ══════════════════════════════════════════════════ */

export default function AnamneseApp() {
  const [mode, setMode] = useState("form"); // "form" | "admin"
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ ...EMPTY_DATA });
  const [saved, setSaved] = useState([]);
  const [viewIdx, setViewIdx] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Load saved anamneses from storage
  const loadSaved = useCallback(async () => {
    setLoading(true);
    try {
      const result = await window.storage.get("anamneses-all");
      if (result && result.value) {
        setSaved(JSON.parse(result.value));
      }
    } catch (e) {
      setSaved([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { loadSaved(); }, [loadSaved]);

  const update = useCallback((key, val) => {
    setData(prev => ({ ...prev, [key]: val }));
  }, []);

  const updateScale = useCallback((key, idx, val) => {
    setData(prev => {
      const arr = [...prev[key]];
      arr[idx] = val;
      return { ...prev, [key]: arr };
    });
  }, []);

  // Save completed anamnesis
  const handleSubmit = useCallback(async () => {
    const entry = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("pt-BR"),
      timestamp: new Date().toISOString(),
    };
    const updated = [...saved, entry];
    try {
      await window.storage.set("anamneses-all", JSON.stringify(updated));
      setSaved(updated);
      setSaveMsg("Anamnese salva com sucesso!");
      setStep(6); // show success
    } catch (e) {
      setSaveMsg("Erro ao salvar. Tente novamente.");
      setStep(6);
    }
  }, [data, saved]);

  const handleDelete = useCallback(async (id) => {
    const updated = saved.filter(s => s.id !== id);
    try {
      await window.storage.set("anamneses-all", JSON.stringify(updated));
      setSaved(updated);
      setViewIdx(null);
    } catch (e) { /* ignore */ }
  }, [saved]);

  const handleReset = useCallback(async () => {
    try {
      await window.storage.delete("anamneses-all");
      setSaved([]);
      setViewIdx(null);
    } catch (e) { /* ignore */ }
  }, []);

  const newForm = () => { setData({ ...EMPTY_DATA }); setStep(0); setSaveMsg(""); setMode("form"); };

  const Label = ({ children }) => (
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0f2b46", marginBottom: 6 }}>{children}</label>
  );

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #f0f4f8 0%, #e2e8f0 100%)", fontFamily: "'Segoe UI', -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 24px", background: "#0f2b46", borderRadius: 12 }}>
            <span style={{ fontSize: 20 }}>📋</span>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15, letterSpacing: 0.5 }}>ANAMNESE DO GESTOR</span>
          </div>
        </div>

        {/* Mode tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20, background: "#e2e8f0", borderRadius: 10, padding: 3 }}>
          {[["form", "📝 Preencher Anamnese"], ["admin", `📊 Painel (${saved.length})`]].map(([m, label]) => (
            <div key={m} onClick={() => { setMode(m); if(m==="form" && step===6) newForm(); if(m==="admin") { loadSaved(); setViewIdx(null); } }}
              style={{ flex: 1, textAlign: "center", padding: "10px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: mode === m ? 700 : 500, background: mode === m ? "#fff" : "transparent", color: mode === m ? "#0f2b46" : "#64748b", boxShadow: mode === m ? "0 1px 3px rgba(0,0,0,0.1)" : "none", transition: "all 0.2s" }}>
              {label}
            </div>
          ))}
        </div>

        {/* ═══ FORM MODE ═══ */}
        {mode === "form" && step < 5 && (
          <>
            <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
              {SECTIONS.map((s, i) => (
                <div key={i} onClick={() => setStep(i)} style={{ flex: 1, cursor: "pointer" }}>
                  <div style={{ height: 4, borderRadius: 2, background: i <= step ? "#1a6fb5" : "#cbd5e1" }} />
                  <div style={{ fontSize: 9, color: i <= step ? "#1a6fb5" : "#94a3b8", marginTop: 3, textAlign: "center", fontWeight: i === step ? 700 : 400 }}>{s.icon} {s.title}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: 14, padding: "24px 24px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)" }}>
              <h2 style={{ margin: "0 0 4px", fontSize: 18, color: "#0f2b46" }}>{SECTIONS[step].icon} {SECTIONS[step].title}</h2>
              <p style={{ color: "#64748b", fontSize: 12, margin: "0 0 18px" }}>Bloco {step + 1} de 5</p>

              {step === 0 && (
                <div>
                  <div style={{ marginBottom: 14 }}><Label>Nome completo</Label><input style={inputStyle} value={data.name} onChange={e => update("name", e.target.value)} placeholder="Digite o nome completo" /></div>
                  <div style={{ marginBottom: 14 }}><Label>Empresa / Segmento</Label><input style={inputStyle} value={data.company} onChange={e => update("company", e.target.value)} placeholder="Ex: Loja de roupas femininas" /></div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div><Label>Cargo atual</Label><input style={inputStyle} value={data.role} onChange={e => update("role", e.target.value)} placeholder="Ex: Gerente Comercial" /></div>
                    <div><Label>Experiência (anos)</Label><input style={inputStyle} value={data.experience} onChange={e => update("experience", e.target.value)} placeholder="Ex: 3 anos" /></div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div><Label>Tamanho da equipe</Label><input style={inputStyle} value={data.teamSize} onChange={e => update("teamSize", e.target.value)} placeholder="Ex: 8 pessoas" /></div>
                    <div><Label>Metodologia anterior?</Label><input style={inputStyle} value={data.prevMethodology} onChange={e => update("prevMethodology", e.target.value)} placeholder="Se sim, qual?" /></div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <div style={{ marginBottom: 18 }}><Label>Primeiro passo ao chegar em uma empresa cliente?</Label><RadioGroup options={["Já apresento soluções e ferramentas","Faço perguntas para entender a situação","Peço para ver os números de faturamento","Não tenho um processo definido"]} value={data.firstStep} onChange={v => update("firstStep", v)} /></div>
                  <div style={{ marginBottom: 18 }}><Label>Sabe o que é anamnese empresarial?</Label><RadioGroup options={["Sim, já apliquei em clientes","Já ouvi falar, mas nunca apliquei","Não sei o que é"]} value={data.knowsAnamnesis} onChange={v => update("knowsAnamnesis", v)} /></div>
                  <div style={{ marginBottom: 18 }}><Label>Nível de conhecimento em diagnóstico:</Label><ScaleInput items={SCALE_ITEMS_DIAGNOSIS} values={data.diagScale} onChange={(i, v) => updateScale("diagScale", i, v)} /></div>
                  <div style={{ marginBottom: 14 }}><Label>Maior dificuldade no 1º contato:</Label><textarea style={textareaStyle} value={data.diagDifficulty} onChange={e => update("diagDifficulty", e.target.value)} placeholder="Descreva..." /></div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div style={{ marginBottom: 18 }}><Label>Nível de conhecimento em gestão de pessoas:</Label><ScaleInput items={SCALE_ITEMS_PEOPLE} values={data.peopleScale} onChange={(i, v) => updateScale("peopleScale", i, v)} /></div>
                  <div style={{ marginBottom: 18 }}><Label>Já implementou rotinas gerenciais?</Label><RadioGroup options={["Sim, com reuniões diárias, semanais e mensais","Apenas reuniões esporádicas","Nunca implementei rotinas formais"]} value={data.hasRoutines} onChange={v => update("hasRoutines", v)} /></div>
                  <div style={{ marginBottom: 14 }}><Label>Como organizaria o dia a dia de um gerente?</Label><textarea style={textareaStyle} value={data.managerRoutine} onChange={e => update("managerRoutine", e.target.value)} placeholder="Descreva..." /></div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div style={{ marginBottom: 18 }}><Label>Domínio em temas comerciais:</Label><ScaleInput items={SCALE_ITEMS_COMMERCIAL} values={data.commercialScale} onChange={(i, v) => updateScale("commercialScale", i, v)} /></div>
                  <div style={{ marginBottom: 18 }}><Label>KPI mais importante para acompanhar diariamente?</Label><RadioGroup options={["Meta financeira (R$)","Ticket Médio (TM)","Taxa de Conversão","Produtos por Atendimento (PA)","Não sei a diferença entre eles"]} value={data.mainKPI} onChange={v => update("mainKPI", v)} /></div>
                  <div style={{ marginBottom: 18 }}><Label>Já implantou CRM?</Label><RadioGroup options={["Sim, com sucesso","Sim, mas equipe não adotou","Nunca implantei"]} value={data.hasCRM} onChange={v => update("hasCRM", v)} /></div>
                  <div style={{ marginBottom: 14 }}><Label>Descreva os 7 passos da venda:</Label><textarea style={textareaStyle} value={data.sevenSteps} onChange={e => update("sevenSteps", e.target.value)} placeholder="Liste os que conhece..." /></div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <div style={{ marginBottom: 18 }}><Label>O que espera aprender?</Label><RadioGroup options={["Aprender do zero","Aprimorar conhecimentos","Ter método estruturado","Todas as anteriores"]} value={data.expectation} onChange={v => update("expectation", v)} /></div>
                  <div style={{ marginBottom: 14 }}><Label>Maior dificuldade ao ajudar empresas:</Label><textarea style={textareaStyle} value={data.biggestDifficulty} onChange={e => update("biggestDifficulty", e.target.value)} placeholder="Descreva..." /></div>
                  <div style={{ marginBottom: 14 }}><Label>Nota 1 a 10 - sua preparação. Justifique:</Label><textarea style={textareaStyle} value={data.selfScore} onChange={e => update("selfScore", e.target.value)} placeholder="Ex: 6 - Tenho experiência mas..." /></div>
                  <div style={{ marginBottom: 14 }}><Label>Tema para aprofundar:</Label><textarea style={textareaStyle} value={data.specificTopic} onChange={e => update("specificTopic", e.target.value)} placeholder="Algum tema?" /></div>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, paddingTop: 14, borderTop: "1px solid #f1f5f9" }}>
                <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
                  style={{ padding: "9px 20px", background: step === 0 ? "#f1f5f9" : "#fff", color: step === 0 ? "#94a3b8" : "#475569", border: "1.5px solid #e2e8f0", borderRadius: 8, cursor: step === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>
                  ← Anterior
                </button>
                {step < 4 ? (
                  <button onClick={() => setStep(step + 1)}
                    style={{ padding: "9px 24px", background: "#1a6fb5", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                    Próximo →
                  </button>
                ) : (
                  <button onClick={handleSubmit}
                    style={{ padding: "9px 24px", background: "#27ae60", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                    Enviar Anamnese ✓
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {/* Success screen */}
        {mode === "form" && step === 5 && (
          <ReportView data={data} />
        )}

        {mode === "form" && step === 6 && (
          <div style={{ background: "#fff", borderRadius: 14, padding: 32, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{saveMsg.includes("sucesso") ? "✅" : "⚠️"}</div>
            <h2 style={{ color: "#0f2b46", margin: "0 0 8px", fontSize: 20 }}>{saveMsg.includes("sucesso") ? "Anamnese Enviada!" : "Ops!"}</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 24px" }}>{saveMsg}</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={newForm} style={{ padding: "10px 24px", background: "#1a6fb5", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>Nova Anamnese</button>
              <button onClick={() => { setMode("admin"); loadSaved(); setViewIdx(null); }} style={{ padding: "10px 24px", background: "#fff", color: "#1a6fb5", border: "1.5px solid #1a6fb5", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>Ver Painel</button>
            </div>
          </div>
        )}

        {/* ═══ ADMIN MODE ═══ */}
        {mode === "admin" && viewIdx === null && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
              <h2 style={{ fontSize: 18, color: "#0f2b46", margin: 0 }}>Anamneses Recebidas ({saved.length})</h2>
              {saved.length > 0 && (
                <button onClick={() => { if(confirm("Apagar todas as anamneses salvas?")) handleReset(); }} style={{ padding: "6px 14px", background: "#fee2e2", color: "#dc2626", border: "1px solid #fca5a5", borderRadius: 6, cursor: "pointer", fontSize: 12 }}>
                  Limpar tudo
                </button>
              )}
            </div>

            {loading && <p style={{ color: "#64748b", textAlign: "center", padding: 40 }}>Carregando...</p>}

            {!loading && saved.length === 0 && (
              <div style={{ background: "#fff", borderRadius: 14, padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
                <p style={{ color: "#64748b", fontSize: 14 }}>Nenhuma anamnese preenchida ainda.</p>
                <button onClick={newForm} style={{ marginTop: 12, padding: "10px 24px", background: "#1a6fb5", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>Criar Primeira Anamnese</button>
              </div>
            )}

            {!loading && saved.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {saved.map((entry, idx) => {
                  const all = [...entry.diagScale, ...entry.peopleScale, ...entry.commercialScale].filter(v=>v>0);
                  const ga = all.length ? all.reduce((a,b)=>a+b,0)/all.length : 0;
                  const gl = getLevel(ga);
                  return (
                    <div key={entry.id} onClick={() => setViewIdx(idx)} style={{ background: "#fff", borderRadius: 10, padding: "14px 18px", cursor: "pointer", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: gl.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: 16, fontWeight: 800, color: gl.color }}>{ga.toFixed(1)}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#0f2b46", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{entry.name || "Sem nome"}</div>
                        <div style={{ fontSize: 12, color: "#64748b" }}>{entry.company || "—"} | {entry.role || "—"}</div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontSize: 11, color: "#94a3b8" }}>{entry.date}</div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: gl.color, background: gl.bg, padding: "2px 8px", borderRadius: 4, marginTop: 2, display: "inline-block" }}>{gl.label}</div>
                      </div>
                      <div style={{ color: "#cbd5e1", fontSize: 18 }}>›</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {mode === "admin" && viewIdx !== null && saved[viewIdx] && (
          <div>
            <button onClick={() => setViewIdx(null)} style={{ marginBottom: 12, padding: "6px 14px", background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", borderRadius: 6, cursor: "pointer", fontSize: 13 }}>
              ← Voltar ao painel
            </button>
            <ReportView data={saved[viewIdx]} compact />
            <button onClick={() => { if(confirm("Excluir esta anamnese?")) handleDelete(saved[viewIdx].id); }}
              style={{ marginTop: 12, padding: "8px 16px", background: "#fee2e2", color: "#dc2626", border: "1px solid #fca5a5", borderRadius: 6, cursor: "pointer", fontSize: 12 }}>
              Excluir esta anamnese
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
