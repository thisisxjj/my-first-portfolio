import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: '',
  },
  {
    icon: <FaLinkedin />,
    path: '',
  },
  {
    icon: <FaYoutube />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
]

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string
  iconStyles?: string
}) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }, index) => {
        return (
          <Link key={index} href={path} className={iconStyles}>
            {icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
