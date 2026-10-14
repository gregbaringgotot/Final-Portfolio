import './FoldText.css'

export default function FoldText({ text, splitBy = 'char', hinge = 'top', trigger = 'mount', duration = 0.65, stagger = 0.045, perspective = 700, creaseShading = 0.55, startIndex = 0 }) {
  const pieces = splitBy === 'word' ? text.split(/(\s+)/) : Array.from(text)

  return <span className={`fold-text fold-text--${hinge} fold-text--${trigger}`} aria-label={text} style={{ '--fold-perspective': `${perspective}px`, '--fold-duration': `${duration}s`, '--fold-crease': creaseShading }}>
    {pieces.map((piece, index) => piece.trim()
      ? <span className="fold-text__piece" aria-hidden="true" key={`${index}-${piece}`} style={{ '--fold-delay': `${(startIndex + index) * stagger}s` }}>{piece}</span>
      : <span className="fold-text__space" aria-hidden="true" key={`${index}-space`}>{piece}</span>)}
  </span>
}
