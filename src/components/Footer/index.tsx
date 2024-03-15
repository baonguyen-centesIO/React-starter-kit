export const Footer = () => {
  const menu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about-us',
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
    },
  ];

  return (
    <div className="d-flex flex-direction-column" style={{ width: '100%' }}>
      {menu.map((item) => (
        <a key={item.name} href={item.path}>
          {item.name}
        </a>
      ))}
    </div>
  );
};
