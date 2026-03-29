import valen from '../assets/valen.jpeg'
import yoel from '../assets/yoel.jpeg'
import joaquin from '../assets/joa.jpeg'
import agustin from '../assets/agus.jpeg'
import martin from '../assets/martin.jpeg'


const teamMembers = [
  {
    name: 'Joaquin Bianciotto',
    quote: '"Creando interfaces que respiran optimismo."',
    image: joaquin,
    align: 'left',
    rotation: 'rotate-1',
    tags: [
      { label: 'Frontend React', bg: 'bg-simpson-yellow', rotation: '-rotate-2' },
      { label: 'Gestión Ágil', bg: 'bg-white', rotation: 'rotate-1' },
    ],
  },
  {
    name: 'Agustin Ferrazzano',
    quote: '"Arquitecta de sistemas que nunca duermen."',
    image: agustin,
    align: 'right',
    rotation: '-rotate-2',
    tags: [
      { label: 'Backend Node', bg: 'bg-white', rotation: 'rotate-2' },
      { label: 'Liderazgo', bg: 'bg-simpson-yellow', rotation: '-rotate-1' },
    ],
  },
  {
    name: 'Valentino Honnorat',
    quote: '“No hay crisis, hay cambios. Y quien no acepta los cambios, vive en crisis”',
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
    quote: '"Enseñando a las máquinas a soñar despiertas."',
    image: martin,
    align: 'right',
    rotation: '-rotate-1',
    tags: [
      { label: 'IA / ML', bg: 'bg-white', rotation: 'rotate-1' },
      { label: 'Comunicación', bg: 'bg-simpson-yellow', rotation: '-rotate-2' },
    ],
  },
  {
    name: 'Yoel Marain',
    quote: '"Ingeniero en proceso"',
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
