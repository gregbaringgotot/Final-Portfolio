import { useId, useState } from 'react'
import './FolderFloat.css'

export default function FolderFloat({ items, label, sublabel, width = 150, height = 104, spread = 170, lift = 28 }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const columns = items.length > 3 ? 3 : 2

  return <div
    className={`folder-float${open ? ' is-open' : ''}`}
    style={{ '--folder-width': `${width}px`, '--folder-height': `${height}px` }}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setOpen(true) }}
    onPointerLeave={event => { if (event.pointerType === 'mouse') setOpen(false) }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}
    onKeyDown={event => { if (event.key === 'Escape') setOpen(false) }}
  >
    <ul className="folder-float__papers" id={id} aria-hidden={!open}>
      {items.map((item, index) => {
        const column = index % columns
        const row = Math.floor(index / columns)
        const x = columns === 3 ? (column - 1) * spread * 0.44 : (column - 0.5) * spread * 0.55
        const y = lift + 34 + row * 37
        return <li key={`${item}-${index}`} style={{ '--paper-x': `${x}px`, '--paper-y': `${-y}px`, '--paper-mobile-y': `${index * -31}px`, '--paper-rotate': `${(column - (columns - 1) / 2) * 7}deg`, '--paper-delay': `${index * 45}ms` }}>{item}</li>
      })}
    </ul>
    <button type="button" className="folder-float__button" aria-expanded={open} aria-controls={id} aria-label={`${open ? 'Close' : 'Open'} ${label} skills folder`} onClick={() => setOpen(value => !value)}>
      <span className="folder-float__back" aria-hidden="true" />
      <span className="folder-float__front"><strong>{label}</strong><small>{sublabel}</small></span>
    </button>
  </div>
}
