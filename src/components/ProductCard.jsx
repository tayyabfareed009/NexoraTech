export default function ProductCard({ project, active, onClick, style }) {
  const content = (
    <>
      <div className="product-glow" aria-hidden="true" />

      <header className="product-chrome">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <small>{project.kind.toUpperCase()}</small>
      </header>

      <div className="product-visual">
        {project.image ? (
          <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
        ) : (
          <div className="product-placeholder">{project.name.charAt(0)}</div>
        )}
      </div>

      <div className="product-info">
        <span className="product-kind">{project.kind}</span>
        <h3>{project.name}</h3>
        <p>{project.detail}</p>
        <footer>
          <small>{project.stack}</small>
          <b className="product-arrow">↗</b>
        </footer>
      </div>
    </>
  )

  return (
    <article
      className={`product-card tone-${project.tone} ${active ? 'is-active' : ''}`}
      onClick={onClick}
      style={style}
      aria-hidden={!active}
    >
      {content}
    </article>
  )
}