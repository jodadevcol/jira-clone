import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-4 max-w-max mx-auto'>
      <Button>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='muted'>Muted</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='teritary'>Teritary</Button>

      <div className=''></div>
    </div>
  )
}
