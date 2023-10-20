import Footer from "../components/index/footer/implementation/Footer";
import Header from "../components/index/header/implementation/Header";
import SearchEngine from "../components/index/search_engine/implementation/SearchEngine";

function Index(): JSX.Element {
  return (
    <>
      <Header />
      <SearchEngine />
      <Footer />
    </>
  );
}

export default Index;
