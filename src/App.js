import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

// Member Pages
import RichardLimSiuChun from "./components/pages/MemberPages/RichardLimSiuChun";
import ChanZiMing from "./components/pages/MemberPages/ChanZiMing";
import WesleyTaiKeanWah from "./components/pages/MemberPages/WesleyTaiKeanWah";
import BelleTangLiJiun from "./components/pages/MemberPages/BelleTangLiJiun";
import LamJieXin from "./components/pages/MemberPages/LamJieXin";
import JavierTanXianNeng from "./components/pages/MemberPages/JavierTanXianNeng";
import YeohYiHang from "./components/pages/MemberPages/YeohYiHang";
import BennyLimWenYuan from "./components/pages/MemberPages/BennyLimWenYuan";
import RyanLeeTianYoong from "./components/pages/MemberPages/RyanLeeTianYoong";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="App-container">
          <Router>
            <Switch>
              <Route path="/" exact>
                <MainPage />
              </Route>
              <ProfileRoute />
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ProfileRoute() {
  return (
    <>
      <Route path="/richardLimsiuchun" exact>
        <RichardLimSiuChun />
      </Route>
      <Route path="/chanziming" exact>
        <ChanZiMing />
      </Route>
      <Route path="/wesleytaikeanwah" exact>
        <WesleyTaiKeanWah />
      </Route>
      <Route path="/belletanglijiun" exact>
        <BelleTangLiJiun />
      </Route>
      <Route path="/lamjiexin" exact>
        <LamJieXin />
      </Route>
      <Route path="/javiertanxianneng" exact>
        <JavierTanXianNeng />
      </Route>
      <Route path="/yeohyihang" exact>
        <YeohYiHang />
      </Route>
      <Route path="/bennylimwenyuan" exact>
        <BennyLimWenYuan />
      </Route>
      <Route path="/ryanleetianyoong" exact>
        <RyanLeeTianYoong />
      </Route>
    </>
  );
}

export default App;
