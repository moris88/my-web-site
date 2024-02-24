interface BlurProps {
  text: string | null
}

function Blur({ text }: BlurProps) {
  return (
    <span className={`${text ? '' : 'blur'} select-none text-white`}>
      {text ?? 'Loremipsumdolorsitamet'}
    </span>
  )
}

export default Blur
