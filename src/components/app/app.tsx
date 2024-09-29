import MainScreen from '../../pages/main';

type AppScreenPros = {
  offersAmount: number;
}

function App({offersAmount}: AppScreenPros): JSX.Element {
  return (
    <MainScreen offersAmount={offersAmount}/>
  );
}

export default App;
