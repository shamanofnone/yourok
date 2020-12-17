import React from "react";
import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import PayersPage from "./components/pages/solutions/Payers";
import ProvidersPage from "./components/pages/solutions/Providers";
import SchoolsPage from "./components/pages/solutions/Schools";
import ParentsPage from "./components/pages/solutions/Parents";
import SolutionsPage from "./components/pages/solutions/Solutions";
import Science from "./components/pages/Science";
import KbroFeatures from "./components/pages/solutions/KbroFeatures";
import KbroUsers from "./components/pages/solutions/KbroUsers";
import TermsofUse from "./components/pages/TermsofUse";
import Privacy from "./components/pages/Privacy";
import Faq from "./components/Faq";
import Press from "./components/Press";
import HeroSection from "./components/HeroSection";
import Careers from "./components/pages/Careers";
import Dealwith from "./components/Dealwith";

function App() {
  return (
    <Router>
      <TopNav />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sliders" component={HeroSection} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
        <Route path="/science" component={Science} />
        <Route path="/payers" component={PayersPage} />
        <Route path="/providers" component={ProvidersPage} />
        <Route path="/schools" component={SchoolsPage} />
        <Route path="/parents" component={ParentsPage} />
        <Route path="/kbrofeatures" component={KbroFeatures} />
        <Route path="/kbrousers" component={KbroUsers} />
        <Route path="/solutions" component={SolutionsPage} />
        <Route path="/termsofuse" component={TermsofUse} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/faqs" component={Faq} />
        <Route path="/press" component={Press} />
        <Route path="/careers" component={Careers} />
        <Route path="/dealwith" component={Dealwith} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
