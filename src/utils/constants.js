// mock data
export const socials = [
  {
    name: 'vk',
    href: 'https://vk.com',
  },
  {
    name: 'insta',
    href: 'https://www.instagram.com',
  },
  {
    name: 'telegram',
    href: 'https://web.telegram.org',
  },
  {
    name: 'youtube',
    href: 'https://www.youtube.com',
  },
]

export const bullets = [
  { id: 1, href: 'promo' },
  { id: 2, href: 'professionals' },
  { id: 3, href: 'serveces' },
  { id: 4, href: 'how-we-work' },
  { id: 5, href: 'partners' },
  { id: 6, href: 'footer' },
]

export const navLinks = [
  {
    text: 'о нас',
    href: 'professionals'
  },
  {
    text: 'услуги',
    href: 'serveces'
  },
  {
    text: '6 шагов к вашему проекту',
    href: 'how-we-work'
  },
  {
    text: 'партнеры',
    href: 'partners'
  },
  {
    text: 'контакты',
    href: 'footer'
  },
]

export const servecesCards = [
  {
    id: 1,
    title: 'Собственное производство электрощитового оборудования',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: 'Строительство и проектирование кабельных систем',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    title: 'Электролаборатория',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    title: 'Обслуживание инжинерных систем',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 5,
    title: 'Проектирование и монтаж электросетей',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
]

export const workSlides = [
  {
    id: 1,
    title: 'оставляете заявку',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    title: 'выезд специалиста на объект',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'составление сметы',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'подписание договора',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 5,
    title: 'начало работ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 6,
    title: 'завершение',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

export const partnersSlides = [
  { name: 'rzd' },
  { name: 'arguments' },
  { name: 'okey' },
  { name: 'sber1' },
  { name: 'uralsib' },
  { name: 'sber2' },
]

// animations
export const sloganVariants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2
    }
  }
}

export const servecesCardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3
    }
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0
    }
  }
}

export const headerVariants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    y: -200,
    transition: {
      duration: 0.3
    }
  }
}

export const leftPanelVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    x: -100,
    transition: {
      duration: 0.3
    }
  }
}

export const professionalsTitleVariants = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.2
    }
  })
}

export const professionalsTextVariants = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.2
    }
  })
}

export const professionalsBtnVariants = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.2
    }
  })
}

// styles
export const COLOR_WHITE = { color: '#FFFFFF' }