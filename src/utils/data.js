export const project = {
  title: { small: 'SSMN', full: "Sassoumane" },
  description: "Le coin du gentleman.",
  logo: '/branding/SSMN_Favicon.png',
  website: "www.sassoumane.com",
  copyright: {
    title: "© 2024 Sassoumane Cosmetics.",
    mention: "Tous droits réversés."
  }
}



export const navbar = {
  icons: [
    { title: "user-3" },
    { title: "search" },
  ],
  routes: {
    cosmetics: {
      logo: '',
      links: [
        { title: "home", link: "/", icon: "home" },
        { title: "shop", link: "/shop", icon: "shopping-bag" },
        { title: "about", link: "/about", icon: "information" },
        { title: "contact", link: "/contact", icon: "customer-service" },

      ]
    },
    clothing: {
      logo: '',
      links: [
        { title: "home", link: "/", icon: "home" },
        { title: "shop", link: "/shop", icon: "shopping-bag" },
        { title: "collections", link: "/about", icon: "information" },
        { title: "contact", link: "/contact", icon: "customer-service" },

      ]
    }
  }
}

export const footerLinks = {
  mainMenu: [
    { title: "link", icon: "home", link: "/" },
    { title: "link", icon: "information", link: "/a-propos" },
    { title: "link", icon: "folder-2", link: "/projets" },
    { title: "link", icon: "chat-3", link: "/contact" },
  ],
  legalMentions: [
    { title: "confidentialité", icon: 'spy', link: "/confidentialite" },
    { title: "CGU", icon: 'file-shield', link: "/cgu" },
    { title: "mentions légales", icon: 'file-reduce', link: "/mentions-legales" },
    { title: "Tous droits réservés", icon: 'copyright', link: "" },
  ],
}


export const contacts = {
  links: [
    { title: 'email', value: 'contact@sassoumane.com' },
    { title: 'tel', value: '+221 77 859 22 91' },
    { title: 'adresse', value: 'Mamelles, Cité Magistrat, 10200, Dakar SN' },
  ],
  socials: [
    { title: "facebook", icon: '', link: '/' },
    { title: "instagram", icon: '', link: '/' },
    { title: "tiktok", icon: '', link: '/' },
    { title: "twitter", icon: '', link: '/' },
    { title: "linkedin", icon: '', link: '/' },
    { title: "youtube", icon: '', link: '/' },
  ]
}


export const stats = [
  {
    title: "1",
    value: 2000,
    before: "",
    after: ""
  },
  {
    title: "2",
    value: 20300,
    before: "",
    after: ""
  },
  {
    title: "3",
    value: 3543000,
    before: "",
    after: ""
  },
  {
    title: "4",
    value: 5000,
    before: "",
    after: ""
  },
  {
    title: "5",
    value: 85000,
    before: "",
    after: ""
  },
]