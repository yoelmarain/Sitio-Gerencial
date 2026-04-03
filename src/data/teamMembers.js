import valen from '../assets/valen.jpeg'
import yoel from '../assets/yoel.jpeg'
import joaquin from '../assets/joa.jpeg'
import agustin from '../assets/agus.jpeg'
import martin from '../assets/martin.jpeg'


const teamMembers = [
  {
    name: 'Joaquin Bianciotto',
    quote: '"Siempre en busca de la mejor solucion."',
    image: joaquin,
    align: 'left',
    rotation: 'rotate-1',
    tags: [
      { label: 'Coordinación', bg: 'bg-simpson-yellow', rotation: '-rotate-2' },
      { label: 'Motivación', bg: 'bg-white', rotation: 'rotate-1' },
    ],
  },
  {
    name: 'Agustin Ferrazzano',
    quote: '"Mas se aprende de las derrotas, que de las victorias."',
    image: agustin,
    align: 'right',
    rotation: '-rotate-2',
    tags: [
      { label: 'Colaboración', bg: 'bg-white', rotation: 'rotate-2' },
      { label: 'Pensamiento sistémico', bg: 'bg-simpson-yellow', rotation: '-rotate-1' },
    ],
  },
  {
    name: 'Valentino Honnorat',
    quote: '“No hay crisis, hay cambios. Y quien no acepta los cambios, vive en crisis.”',
    image: valen,
    align: 'left',
    rotation: 'rotate-3',
    tags: [
      { label: 'IA', bg: 'bg-simpson-yellow', rotation: '-rotate-1' },
      { label: 'Estrategia', bg: 'bg-white', rotation: 'rotate-3' },
    ],
  },
  {
    name: 'Martin Lopez Soto',
    quote: '"La mejora continua como principio, enfocado en detectar oportunidades y convertirlas en mejores resultados."',
    image: martin,
    align: 'right',
    rotation: '-rotate-1',
    tags: [
      { label: 'Innovación', bg: 'bg-white', rotation: 'rotate-1' },
      { label: 'Planificación', bg: 'bg-simpson-yellow', rotation: '-rotate-2' },
    ],
  },
  {
    name: 'Yoel Marain',
    quote: '"El orden no limita, potencia todo lo que querés lograr."',
    image: yoel,
    align: 'left',
    rotation: 'rotate-2',
    tags: [
      { label: 'front end', bg: 'bg-simpson-yellow', rotation: '-rotate-1' },
      { label: 'organización', bg: 'bg-white', rotation: 'rotate-2' },
    ],
  },
]

export default teamMembers
