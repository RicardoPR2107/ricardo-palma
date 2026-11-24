/** Convierte el texto entre **dobles asteriscos** en texto resaltado con el color de acento. */
export function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? (
          <strong key={i} className="font-medium text-accent">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
