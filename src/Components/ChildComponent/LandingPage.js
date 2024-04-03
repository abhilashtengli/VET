import Header from "../Header";
import MainContainer from "../MainContainer/MainContainer";
import HomeShimmer from "../Shimmer/HomeShimmer";
import useLoading from "../Hooks/useLoading";
import Latest from "../Latest/Latest";

const LandinPage = () => {
  const isLoading = useLoading(true, 300);

  return (
    <div className="">
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <>
          <Header />
          {/* <Latest/> */}
          <MainContainer />
        </>
      )}
    </div>
  );
};

export default LandinPage;
