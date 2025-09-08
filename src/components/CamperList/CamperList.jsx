import { useDispatch, useSelector } from "react-redux";
import {
  selectAllItems,
  selectError,
  selectHasMore,
  selectIsLoading,
  selectVisibleItems,
} from "../../redux/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import { loadMore } from "../../redux/campersSlice";
import CamperCard from "../CamperCard/CamperCard";

export default function CamperList() {
  const dispatch = useDispatch();

  const visibleItems = useSelector(selectVisibleItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const allItems = useSelector(selectAllItems);

  console.log("visibleItems", visibleItems);
  console.log("isLoading ", isLoading);
  console.log("error", error);
  console.log("hasMore", hasMore);
  console.log("allItems", allItems);

  useEffect(() => {
    if (allItems.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, allItems.length]);

  const handleShowMore = (camperId) => {
    console.log("Modal for:", camperId);
  };

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(loadMore());
    }
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      {visibleItems.map((camper) => (
        <CamperCard
          key={camper.id}
          camper={camper}
          handleShowMore={handleShowMore}
        />
      ))}

      {isLoading && <p>Loading...</p>}

      {!isLoading && hasMore && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
