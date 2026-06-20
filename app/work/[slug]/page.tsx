import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, getAdjacentProjects, PROJECTS } from '@/lib/projects'
import AccentTitle from '@/components/AccentTitle'
import CaseStudyAccordion from '@/components/CaseStudyAccordion'

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Verónica Alvarez`,
    description: project.description,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── BACK LINK ── */}
      <div
        style={{
          position: 'fixed',
          top: '24px',
          left: '24px',
          zIndex: 50,
        }}
      >
        <Link
          href="/#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '12px',
            color: '#555555',
            textDecoration: 'none',
            letterSpacing: '0.03em',
            background: 'rgba(250,250,247,0.85)',
            backdropFilter: 'blur(8px)',
            padding: '8px 14px',
            borderRadius: '999px',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          ← Back
        </Link>
      </div>

      {/* ── HERO ── */}
      <section
        style={{
          background: project.heroBg,
          padding: 'clamp(80px, 12vw, 140px) clamp(24px, 8vw, 120px) clamp(60px, 8vw, 100px)',
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 6vw, 80px)',
            alignItems: 'flex-end',
          }}
          className="hero-grid"
        >
          {/* Left — title */}
          <div>
            <AccentTitle
              title={project.title}
              accentLetterIndex={project.accentLetterIndex}
              accentColor={project.accentColor}
            />
          </div>

          {/* Right — description + category pill */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              paddingBottom: '8px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#444444',
                lineHeight: 1.65,
                maxWidth: '400px',
              }}
            >
              {project.description}
            </p>

            <span
              style={{
                display: 'inline-flex',
                width: 'fit-content',
                alignItems: 'center',
                border: `1px solid ${project.accentColor}`,
                borderRadius: '999px',
                padding: '5px 14px',
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: '10px',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: '#555555',
              }}
            >
              {project.category}
            </span>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ROW ── */}
      <section
        style={{
          background: '#ffffff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            padding: '0 clamp(24px, 8vw, 120px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
          className="overview-grid"
        >
          {[
            { label: 'Role', value: project.role },
            { label: 'Tools', value: project.tools },
            { label: 'Year', value: project.year },
            { label: 'Context', value: project.context },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: '32px 0',
                borderRight: i < 3 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                paddingRight: i < 3 ? '32px' : '0',
                paddingLeft: i > 0 ? '32px' : '0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '11px',
                  color: '#999999',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-darker-grotesque)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#4D4D4D',
                  lineHeight: 1.2,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACCORDION SECTIONS ── */}
      <section
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: 'clamp(48px, 8vw, 96px) clamp(24px, 8vw, 120px)',
        }}
      >
        <CaseStudyAccordion sections={project.sections} />
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <nav
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: 'clamp(32px, 6vw, 64px) clamp(24px, 8vw, 120px)',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              textDecoration: 'none',
              maxWidth: '280px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: '11px',
                color: '#aaaaaa',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              ← Previous
            </span>
            <span
              style={{
                fontFamily: 'var(--font-darker-grotesque)',
                fontWeight: 700,
                fontSize: '22px',
                color: '#4D4D4D',
                lineHeight: 1.1,
              }}
            >
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              textDecoration: 'none',
              alignItems: 'flex-end',
              maxWidth: '280px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: '11px',
                color: '#aaaaaa',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Next →
            </span>
            <span
              style={{
                fontFamily: 'var(--font-darker-grotesque)',
                fontWeight: 700,
                fontSize: '22px',
                color: '#4D4D4D',
                lineHeight: 1.1,
                textAlign: 'right',
              }}
            >
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      {/* ── FOOTER MINI ── */}
      <div
        style={{
          textAlign: 'center',
          padding: '32px 24px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '12px',
            color: '#aaaaaa',
            textDecoration: 'none',
            letterSpacing: '0.03em',
          }}
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .overview-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .overview-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .overview-grid > div:nth-child(1),
          .overview-grid > div:nth-child(2) {
            border-bottom: 1px solid rgba(0,0,0,0.07);
          }
        }
        @media (max-width: 480px) {
          .overview-grid {
            grid-template-columns: 1fr !important;
          }
          .overview-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.07);
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .overview-grid > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </main>
  )
}
