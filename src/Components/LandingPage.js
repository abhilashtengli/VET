import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import HomeShimmer from "./Shimmer/HomeShimmer";
import useLoading from "./Hooks/useLoading";

const LandinPage = () => {
  const isLoading = useLoading(true, 300);

  return (
    <div className="">
      {isLoading ? (
        <HomeShimmer />
      ) : (
        <>
          <Header />
          <MainContainer />
        </>
      )}
    </div>
  );
};

export default LandinPage;
