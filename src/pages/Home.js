import { MainWrap, MainTitle, SecondTitle } from 'components/GlobalStyles';
import { NavigateButton } from 'components/NavigateButton';

export const Home = () => {
  return (
    <MainWrap>
      <MainTitle>Hello world! </MainTitle>
      <img
        src="https://i.gifer.com/Z0t6.gif"
        alt="Apple-loading"
        width="280"
        height="160"
        style={{ margin: '0 auto' }}
      />

      <SecondTitle>Ready to work? </SecondTitle>
      <NavigateButton />
    </MainWrap>
  );
};
