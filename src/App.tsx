import { useState } from "react";
import { ARTICLES } from "./articles";

export default function KnowledgeReader() {
  const [selected, setSelected] = useState<number | null>(null);

  const article = selected !== null ? ARTICLES.find((a) => a.id === selected) : null;

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(200,140,100,0.15); }
        a { color: inherit; text-decoration: none; }
      `}</style>

      {!article ? (
        /* ======= INDEX ======= */
        <div style={S.index}>
          <header style={S.indexHeader}>
            <h1 style={S.indexTitle}>叩问录</h1>
            <p style={S.indexSub}>
              {ARTICLES.length} 篇对话 ·{" "}
              {ARTICLES.reduce((s, a) => s + a.sections.length, 0)} 个问题
            </p>
          </header>

          <div style={S.list}>
            {ARTICLES.map((a) => (
              <div
                key={a.id}
                style={S.listItem}
                onClick={() => setSelected(a.id)}
              >
                <div style={S.listMeta}>
                  <span style={S.listSource}>{a.meta.source}</span>
                  <span style={S.listDate}>{a.meta.date}</span>
                </div>
                <h2 style={S.listTitle}>{a.title}</h2>
                <div style={S.listQuestions}>
                  {a.sections.map((s, i) => (
                    <div key={i} style={S.listQ}>
                      <span style={S.listQNum}>Q{i + 1}</span>
                      {s.question}
                    </div>
                  ))}
                </div>
                <p style={S.listBrief}>{a.brief}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ======= ARTICLE ======= */
        <article style={S.article}>
          <div
            style={S.back}
            onClick={() => setSelected(null)}
          >
            ← 返回
          </div>

          {/* Head */}
          <div style={S.artMeta}>
            {article.meta.source} · {article.meta.date}
          </div>
          <h1 style={S.artTitle}>{article.title}</h1>

          {/* Question Chain — the hook */}
          <div style={S.qChain}>
            {article.sections.map((s, i) => (
              <div
                key={i}
                style={S.qChainItem}
                onClick={() => {
                  document
                    .getElementById(`q-${i}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span style={S.qChainNum}>Q{i + 1}</span>
                <span style={S.qChainText}>{s.question}</span>
              </div>
            ))}
          </div>

          <p style={S.artBrief}>{article.brief}</p>

          <div style={S.divider} />

          {/* Sections */}
          {article.sections.map((sec, i) => (
            <section key={i} id={`q-${i}`} style={S.section}>
              <div style={S.qBlock}>
                <div style={S.qDot}>{i + 1}</div>
                <h2 style={S.qTitle}>{sec.question}</h2>
              </div>

              {sec.context && (
                <div style={S.callout}>
                  <div style={S.calloutBar} />
                  <div style={S.calloutText}>{sec.context}</div>
                </div>
              )}

              {sec.image && (
                <div style={S.sectionImage}>
                  <img
                    src={import.meta.env.BASE_URL + sec.image.replace(/^\//, "")}
                    alt=""
                    style={S.sectionImg}
                  />
                </div>
              )}

              <div style={S.body}>
                {sec.body.split("\n\n").map((para, pi) => (
                  <p
                    key={pi}
                    style={S.para}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(
                          /\*\*(.+?)\*\*/g,
                          '<strong style="color:#2C2C2C;font-weight:500">$1</strong>'
                        )
                        .replace(
                          /\[([^\]]+)\]\(([^)]+)\)/g,
                          '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#B08860;text-decoration:underline;text-underline-offset:3px">$1</a>'
                        ),
                    }}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Takeaway */}
          <div style={S.divider} />
          <div style={S.takeaway}>
            <div style={S.takeawayLabel}>写在最后</div>
            <p style={S.takeawayText}>{article.takeaway}</p>
          </div>
        </article>
      )}
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#FAFAF8",
    fontFamily: "'Noto Sans SC', -apple-system, sans-serif",
    color: "#3D3D3D",
    WebkitFontSmoothing: "antialiased",
  },

  /* ---- INDEX ---- */
  index: {
    maxWidth: 640,
    margin: "0 auto",
    padding: "48px 24px 80px",
  },
  indexHeader: {
    marginBottom: 40,
  },
  indexTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 28,
    fontWeight: 700,
    color: "#1A1A1A",
    marginBottom: 6,
  },
  indexSub: {
    fontSize: 14,
    color: "#AAAAAA",
    fontWeight: 300,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  listItem: {
    padding: "28px 0",
    borderBottom: "1px solid #ECEAE4",
    cursor: "pointer",
  },
  listMeta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  listSource: {
    fontSize: 12,
    fontWeight: 500,
    color: "#B08860",
  },
  listDate: {
    fontSize: 12,
    color: "#C0C0C0",
  },
  listTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 1.55,
    color: "#1A1A1A",
    marginBottom: 12,
  },
  listQuestions: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    borderLeft: "2px solid #E8E2D6",
    paddingLeft: 16,
    marginLeft: 2,
    marginBottom: 12,
  },
  listQ: {
    fontSize: 13.5,
    lineHeight: 1.55,
    color: "#555",
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    padding: "5px 0",
  },
  listQNum: {
    fontSize: 11,
    fontWeight: 600,
    color: "#B08860",
    flexShrink: 0,
    fontFamily: "-apple-system, sans-serif",
  },
  listBrief: {
    fontSize: 13,
    lineHeight: 1.75,
    color: "#AAA",
  },

  /* ---- ARTICLE ---- */
  article: {
    maxWidth: 640,
    margin: "0 auto",
    padding: "32px 24px 100px",
  },
  back: {
    fontSize: 13,
    color: "#B0B0B0",
    cursor: "pointer",
    marginBottom: 28,
    display: "inline-block",
  },
  artMeta: {
    fontSize: 13,
    color: "#B08860",
    fontWeight: 400,
    marginBottom: 10,
  },
  artTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 1.5,
    color: "#1A1A1A",
    marginBottom: 20,
  },

  /* Question Chain */
  qChain: {
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    gap: 0,
    borderLeft: "2px solid #E0D8C8",
    paddingLeft: 20,
    marginLeft: 2,
  },
  qChainItem: {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    padding: "7px 0",
    cursor: "pointer",
  },
  qChainNum: {
    fontSize: 12,
    fontWeight: 600,
    color: "#B08860",
    flexShrink: 0,
    fontFamily: "-apple-system, sans-serif",
  },
  qChainText: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#3D3D3D",
    fontWeight: 400,
  },

  artBrief: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "#999",
  },

  divider: {
    height: 1,
    background: "#ECEAE4",
    margin: "32px 0",
  },

  /* Section */
  section: {
    marginBottom: 40,
  },
  qBlock: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 16,
  },
  qDot: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#1A1A1A",
    color: "#FAFAF8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 600,
    flexShrink: 0,
    marginTop: 3,
  },
  qTitle: {
    fontFamily: "'Noto Serif SC', serif",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.6,
    color: "#1A1A1A",
  },

  /* Callout */
  callout: {
    display: "flex",
    gap: 12,
    marginBottom: 18,
    paddingLeft: 36,
  },
  calloutBar: {
    width: 3,
    borderRadius: 2,
    background: "#E0D8C8",
    flexShrink: 0,
  },
  calloutText: {
    fontSize: 13.5,
    lineHeight: 1.75,
    color: "#999",
    fontStyle: "italic",
  },

  /* Section Image */
  sectionImage: {
    paddingLeft: 36,
    marginBottom: 18,
  },
  sectionImg: {
    width: "100%",
    borderRadius: 6,
    display: "block",
  },

  /* Body */
  body: {
    paddingLeft: 36,
  },
  para: {
    fontSize: 15,
    lineHeight: 1.85,
    color: "#3D3D3D",
    marginBottom: 16,
    letterSpacing: 0.2,
  },

  /* Takeaway */
  takeaway: {
    padding: "20px 24px",
    background: "#F5F2EB",
    borderRadius: 6,
  },
  takeawayLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#B08860",
    marginBottom: 8,
    letterSpacing: 1,
  },
  takeawayText: {
    fontSize: 15,
    lineHeight: 1.85,
    color: "#555",
  },
};
