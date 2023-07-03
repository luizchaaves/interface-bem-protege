import { useState } from 'react';
import { Button, Container, ElementList, Link, List } from './styles';

interface Props {
  mobile: boolean;
}

const Menu = ({ mobile }: Props) => {
  const [menuMobileActive, setMenuMobileActive] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>('#inicio');

  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll('main section[id]');

  window.addEventListener('scroll', () => {
    activateMenuCurrentSection();
  });

  const activateMenuCurrentSection = () => {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      const checkpointStart = checkpoint >= sectionTop;
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

      if (checkpointStart && checkpointEnd) {
        setActiveNav(`#${sectionId}`);
      }
    }
  };

  const itensMenu = [
    {
      id: 1,
      href: '#inicio',
      text: 'inicio',
    },
    {
      id: 2,
      href: '#sobre',
      text: 'sobre',
    },
    {
      id: 3,
      href: '#servicos',
      text: 'serviços',
    },
    {
      id: 4,
      href: '#coberturas',
      text: 'coberturas',
    },
    {
      id: 5,
      href: '#duvidas',
      text: 'dúvidas',
    },
    {
      id: 6,
      href: '#contato',
      text: 'contato',
    },
  ];

  return (
    <>
      <Container
        className={`${mobile ? 'menuMobile' : 'menuDesktop'} ${
          menuMobileActive ? 'menuMobileActive' : ''
        }`}
      >
        <List>
          {itensMenu.map((item) => (
            <ElementList key={item.id}>
              <Link
                className={activeNav === item.href ? 'activeMenu' : ''}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.href);
                  if (menuMobileActive) setMenuMobileActive(false);
                }}
              >
                {item.text}
              </Link>
            </ElementList>
          ))}
        </List>
      </Container>
      {mobile && (
        <Button
          aria-label="menu"
          className={menuMobileActive ? 'mobileButtonActive' : ''}
          onClick={() => setMenuMobileActive(!menuMobileActive)}
        />
      )}
    </>
  );
};

export default Menu;
