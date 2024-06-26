import GNBItem from "./GNBItem/GNBItem";

const GNB = () => {
  /** GNB 링크 모음 */
  const linkList = [
    { href: '/', name: '메인' },
  ];

  return (
    <nav>
      <ul>
        {
          linkList.map(link => (
            <GNBItem key={link.href} link={link} />
          ))
        }
      </ul>
    </nav>
  );
};

export default GNB;