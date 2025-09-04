import Button from "../../components/AppHeader/Button/Button";
import css from "./HomePage.module.css"

export default function HomePage() {
  const handleViewNowBtn = () =>  {
    console.log("Handle view")
  }

  return (
  <div className={css.homePage}>
    <h1 className={css.homePageHeader}>Campers of your dreams</h1>
    <p className={css.homePageText}>You can find everything you want in our catalog</p>
    <Button text="View Now" handleClick={handleViewNowBtn}/>
  </div>);
}
