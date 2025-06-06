import Image from 'next/image'
import Link from 'next/link'
interface CompanionCardProps {
  id: string
  name: string
  topic: string
  subject: string
  duration: number
  color: string
}

const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">
          {subject} </div>
          <button className="companion-bookmard">
          <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
          </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <p className="text-sm">Duration: {duration} mins</p>

      <Link href={`/companions/${id}`} className='w-full'>
        <button className="btn-primary w-full justify-center">Launch Lession</button>
      </Link>
      </article>
  )
}

export default CompanionCard