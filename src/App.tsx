import {Routes, Route} from "react-router-dom";
import {ROOT_ROUTE} from "./domains/CommonDomain";

/** Importing Components */
import MainPage from './components';
import MyLoginPage from "./components/login";
import DashboardPage from "./components/dashboard";

const App = () => {
  return (
    <>
        <Routes>
          <Route index path={`${ROOT_ROUTE.LOGIN}`} element={<MyLoginPage />} />
          <Route path={`${ROOT_ROUTE.ROOT}`} element={<MainPage />} />
          <Route path={`${ROOT_ROUTE.DASHBOARD}`} element={<DashboardPage />} />
        </Routes>
    </>
  )
}

export default App;