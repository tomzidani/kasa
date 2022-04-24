import { useRef } from "react"
import Icon from "../Icon/Icon"

interface AccordionInterface {
  title: string
  children: React.ReactNode
  className?: string
}

const Accordion = ({ title, children: body, className }: AccordionInterface) => {
  const accordionRef = useRef<any>()

  const toggle = () => accordionRef.current!.classList.toggle("closed")

  return (
    <div className={`accordion ${className ? className : ""}`} ref={accordionRef}>
      <div className="accordion__header" onClick={toggle}>
        <span className="accordion__title">{title}</span>
        <div className="accordion__icon">
          <Icon.Caret />
        </div>
      </div>
      <div className="accordion__body">
        <div className="body__wrapper">{body}</div>
      </div>
    </div>
  )
}

export default Accordion
