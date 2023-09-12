import PagesMetaHead from '../PagesMetaHead';
import AppFooter from '../public/AppFooter';
import AppHeader from '../public/AppHeader';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
