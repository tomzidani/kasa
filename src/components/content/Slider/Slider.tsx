import { useEffect, useRef, useState } from "react"
import Icon from "../Icon/Icon"

interface SliderInterface {
  pictures: string[]
  title: string
}

const Slider = ({ pictures, title }: SliderInterface) => {
  const mediasRef = useRef<any>()
  const [currentPicture, setCurrentPicture] = useState<number>(0)

  const onPreviousClick = () => (currentPicture - 1 < 0 ? setCurrentPicture(pictures.length - 1) : setCurrentPicture(currentPicture - 1))
  const onNextClick = () => (currentPicture + 1 > pictures.length - 1 ? setCurrentPicture(0) : setCurrentPicture(currentPicture + 1))

  useEffect(() => {
    const picturesEl: [] = mediasRef.current!.querySelectorAll(".slider__picture")

    picturesEl.forEach((picture: any, i: number) => {
      picture.classList.remove("active")

      i === currentPicture && picture.classList.add("active")
    })
  }, [currentPicture])

  return (
    <section className="slider">
      <div className="slider__medias" ref={mediasRef}>
        <div className="slider__previous" onClick={onPreviousClick}>
          <Icon.Caret />
        </div>

        <div className="slider__next" onClick={onNextClick}>
          <Icon.Caret />
        </div>

        <div className="slider__count">{`${currentPicture + 1}/${pictures.length}`}</div>

        {pictures.map((picture, k) => (
          <img src={picture} key={k} alt={title} className="slider__picture" />
        ))}
      </div>
    </section>
  )
}

export default Slider
