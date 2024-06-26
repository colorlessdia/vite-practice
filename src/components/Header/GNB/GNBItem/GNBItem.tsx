import { Link } from 'react-router-dom';
import type { GnbItem } from '../../../../types/gnbType';

// props
type GNBItemProps = {
  link: GnbItem;
};

const GNBItem = ({ link }: GNBItemProps) => {
  return (
    <li key={link.href}>
      <Link to={link.href}>{link.name}</Link>
    </li>
  );
};

export default GNBItem;
