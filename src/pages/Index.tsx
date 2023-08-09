import Footer from "../components/index/footer/Footer";
import Header from "../components/index/header/Header";
import SearchEngine from "../components/index/search_engine/SearchEngine";

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
