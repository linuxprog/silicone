import { currentYear } from '@states/constants'

const avatar1Img = 'assets/img/avatar/01.jpg'
const avatar2Img = 'assets/img/avatar/02.jpg'
const avatar3Img = 'assets/img/avatar/03.jpg'
const avatar4Img = 'assets/img/avatar/04.jpg'
const avatar5Img = 'assets/img/avatar/05.jpg'
const avatar6Img = 'assets/img/avatar/06.jpg'

const blog1 = 'assets/img/blog/01.jpg'
const blog2 = 'assets/img/blog/02.jpg'
const blog3 = 'assets/img/blog/03.jpg'
const blog4 = 'assets/img/blog/04.jpg'
const blog5 = 'assets/img/blog/05.jpg'
const blog6 = 'assets/img/blog/06.jpg'
const blog7 = 'assets/img/blog/07.jpg'

const podcast2 = 'assets/img/blog/podcasts/02.jpg'
const podcast3 = 'assets/img/blog/podcasts/03.jpg'
const podcast4 = 'assets/img/blog/podcasts/04.jpg'
const podcast5 = 'assets/img/blog/podcasts/05.jpg'

type LinkType = {
  name: string
}

export type ArticleType = {
  category: string
  title: string
  time: string
  liked: number
  comment: number
  shared: number
}

export type AuthorType = {
  image?: string
  name: string
  expertise?: string
}

export type BlogType = {
  category?: string
  cover?: string
  time: string
  route?: LinkType
  author?: AuthorType
  title: string
  description?: string
  liked?: number
  commented?: number
  shared?: number
}

export type AnchorType = AuthorType

export type PodcastType = {
  category?: string
  airedOn: string
  cover?: string
  time: string
  link?: LinkType
  anchor?: AnchorType
  title: string
  description?: string
  liked?: number
  commented?: number
  shared?: number
}

export const categories = [
  'Digital',
  'Business',
  'Technology',
  'Startups',
  'Web',
  'Web design',
  'Processes & Tools',
  'Marketing',
  'Events',
]

export const articleData: ArticleType[] = [
  {
    category: categories[0],
    title: 'Mobile App Generates Data for the Energy Management',
    time: '1 day ago',
    liked: 8,
    comment: 4,
    shared: 2,
  },
  {
    category: categories[1],
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    time: 'May 24,' + currentYear,
    liked: 1,
    comment: 0,
    shared: 3,
  },
  {
    category: categories[0],
    title: 'Inclusive Marketing: Why and How Does it Work?',
    time: 'May 25,' + currentYear,
    liked: 5,
    comment: 0,
    shared: 2,
  },
  {
    category: categories[3],
    title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
    time: 'May 26,' + currentYear,
    liked: 7,
    comment: 4,
    shared: 1,
  },
  {
    category: categories[4],
    title: 'Why UX Design Matters and How it Affects Ranking',
    time: 'May 27,' + currentYear,
    liked: 5,
    comment: 3,
    shared: 9,
  },
  {
    category: categories[5],
    title: 'This Week in Search: New Limits and Exciting Features',
    time: 'May 28,' + currentYear,
    liked: 3,
    comment: 5,
    shared: 2,
  },
]

const authorData: AuthorType[] = [
  {
    image: avatar6Img,
    name: 'Annette Black',
  },
  {
    image: avatar1Img,
    name: 'Jerome Bell',
  },
  {
    image: avatar2Img,
    name: 'Ralph Edwards',
  },
  {
    image: avatar3Img,
    name: 'Esther Howard',
  },
  {
    image: avatar4Img,
    name: 'Jane Cooper',
  },
  {
    image: avatar5Img,
    name: 'Albert Flores',
  },
]

export const blogData: BlogType[] = [
  {
    cover: blog1,
    time: 'May 19,' + currentYear,
    category: categories[5],
    route: {
      name: 'landings.blog',
    },
    title: '5 Bad Landing Page Examples &amp; How We Would Fix Them',
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    author: authorData[0],
    liked: 8,
    commented: 4,
    shared: 2,
  },
  {
    cover: blog2,
    time: 'Sep 28,' + currentYear,
    category: categories[0],
    route: {
      name: 'landings.blog',
    },
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    author: authorData[1],
    liked: 2,
    commented: 0,
    shared: 3,
  },
  {
    cover: blog3,
    time: 'Sep 16,' + currentYear,
    category: categories[1],
    route: {
      name: 'landings.blog',
    },
    title: 'This Week in Search: New Limits and Exciting Features',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    author: authorData[2],
    liked: 5,
    commented: 0,
    shared: 2,
  },
  {
    cover: blog4,
    time: '12 hours ago',
    category: categories[6],
    route: {
      name: 'landings.blog',
    },
    title: 'Five Effective Lead Generation Techniques For Your Business',
    description:
      'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.',
    author: authorData[3],
    liked: 7,
    commented: 4,
    shared: 1,
  },
  {
    cover: blog5,
    time: 'Oct 9,' + currentYear,
    category: categories[0],
    route: {
      name: 'landings.blog',
    },
    title: 'Inclusive Marketing: Why and How Does it Work?',
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    author: authorData[4],
    liked: 5,
    commented: 3,
    shared: 9,
  },
  {
    cover: blog6,
    time: 'Apr 2,' + currentYear,
    category: categories[7],
    route: {
      name: 'landings.blog',
    },
    title: 'How Agile is Your Forecasting Process?',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    author: authorData[5],
    liked: 3,
    commented: 5,
    shared: 2,
  },
  {
    cover: blog7,
    time: 'Sep 3,' + currentYear,
    category: categories[6],
    route: {
      name: 'landings.blog',
    },
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    author: authorData[2],
    liked: 8,
    commented: 4,
    shared: 2,
  },
]

const anchorData = authorData

export const podcastData: PodcastType[] = [
  {
    cover: podcast4,
    airedOn: '2 hours ago',
    time: '0:48:02',
    category: categories[0],
    link: {
      name: 'landings.blog',
    },
    title: 'IOS and the Changing landscape of Data Privacy',
    anchor: anchorData[0],
    liked: 4,
    commented: 2,
    shared: 0,
  },
  {
    cover: podcast5,
    airedOn: '10 hours ago',
    time: '0:25:43',
    category: categories[6],
    link: {
      name: 'landings.blog',
    },
    title: 'Behavioral Science and Digital Marketing',
    anchor: anchorData[5],
    liked: 9,
    commented: 5,
    shared: 6,
  },
  {
    cover: podcast2,
    airedOn: '10 hours ago',
    time: '1:12:05',
    category: categories[2],
    link: {
      name: 'landings.blog',
    },
    title: 'Why You Should Care About Your Competitors',
    anchor: anchorData[1],
    liked: 45,
    commented: 12,
    shared: 6,
  },
  {
    cover: podcast3,
    airedOn: '1 day ago',
    time: '0:32:15',
    category: categories[7],
    link: {
      name: 'landings.blog',
    },
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    anchor: anchorData[4],
    liked: 10,
    commented: 4,
    shared: 6,
  },
]
