import { Spinner } from '@nextui-org/spinner'

export default function LoadingScreen() {
  return (
    <div className="flex w-full items-center justify-center p-20">
      <Spinner size="lg" />
    </div>
  )
}
