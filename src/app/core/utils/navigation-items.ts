export const navigationItems = [
    {
      label: 'Página inicial',
      link: 'home',
      options: [],
      showDropdown: false,
      display: true,
    },
    {
      label: 'Para você',
      options: [
        { label: 'Conta do Bitwise', link: 'home' },
        { label: 'Cartão de crédito', link: 'home' },
        { label: 'Investimentos', link: 'home' }
      ],
      showDropdown: true,
      display: true,
    },
    {
      label: 'Para o seu negócio',
      options: [
        { label: 'Conta PJ', link: 'home' },
        { label: 'Cartão de crédito PJ', link: 'home' },
      ],
      showDropdown: false,
      display: true,
    },
    {
      label: 'Bitwise Bank',
      options: [
        { label: 'Sobre nós', link: 'home' },
        { label: 'Newsletter', link: 'home' },
        { label: 'Carreiras', link: 'home' }
      ],
      showDropdown: false,
      display: true,
    },
    {
      label: 'Ajuda',
      options: [],
      showDropdown: false,
      display: true,
    },
    {
      label: 'Login',
      options: [],
      showDropdown: false,
      icon: 'save_alt',
      display: false,
    }
  ];
