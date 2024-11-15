import Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types'

export const initBindSwiper = (
  element: HTMLElement,
  options: SwiperOptions
): Swiper => {
  const swiperInstance = new Swiper(element, options)
  swiperInstance.on('activeIndexChange', (e) => {
    const targetItem = document.querySelector(
      e.slides[e.activeIndex].dataset['swiperTab'] ?? ''
    )
    const previousItem = document.querySelector(
      e.slides[e.previousIndex].dataset['swiperTab'] ?? ''
    )
    previousItem?.classList.remove('active')
    targetItem?.classList.add('active')
  })
  return swiperInstance
}
