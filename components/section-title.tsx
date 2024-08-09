interface SectionTitleProps {
  anchorId: string
  title: string
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div id={props.anchorId} className='text-center pb-5 pt-24 lg:pb-10 lg:pt-28'>
      <h2 className='text-4xl lg:text-5xl font-medium'>{props.title}</h2>
    </div>
  )
}
