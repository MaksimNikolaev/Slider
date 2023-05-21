import { NavLink } from 'react-router-dom';
import { menu } from '../../utils/menu';
import style from './menu-style.module.css';

export const Menu = () => {
  return (
    <ul className={style.menu_list}>
      {menu?.map((item) => (
        <li className={style.menu_item} key={item.id}>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? 'bold' : '',
                borderBottom: isActive ? '3px solid #2c3860' : '',
              };
            }}
            className={style.link}
            to={item.path}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
