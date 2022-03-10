import React from 'react';

interface MenuProps {
  title: string;
  active: boolean;
}

export default function Menu(props: MenuProps) {
  const { title } = props;
  let active = false;

  if (props.active) {
    active = true;
  }

  return (
    <li className="nav-item mx-2">
      <a
        className={`nav-link ${active ? 'active' : ''}`}
        aria-current="page"
        href="#"
      >
        {title}
      </a>
    </li>
  );
}
