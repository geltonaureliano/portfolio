import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Gelton Aureliano. All Rights Reserved.`,
  author: {
    name: 'Gelton Aureliano',
    accounts: [
      {
        url: 'https://github.com/geltonaureliano',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://instagram.com/gelt0n',
        label: 'Instagram Account',
        type: 'instagram',
        icon: <FaInstagram />
      },
      // {
      //   url: 'https://twitter.com/',
      //   label: 'Twitter Account',
      //   type: 'twitter',
      //   icon: <FaTwitter />
      // },
      {
        url: 'https://linkedin.com/in/geltonaureliano',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      // {
      //   url: 'https://www.quora.com/profile/geltonaureliano',
      //   label: 'Quora Account',
      //   type: 'red',
      //   icon: <FaQuora />
      // },
      {
        url: 'mailto:geltonaureliano@hotmail.com',
        label: 'Mail',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
