import Banner from "@/components/banner";
import BfWords from "@/components/bfWords";
import ParentalBlessing from "@/components/parentalBlessing";
import Styles from "@/styles/components/Home.module.scss";

export default function Home() {
  return (
    <div className={`${Styles.Home} container-md col-12 col-md-4 mx-0 px-0 mx-md-auto px-md-3`}>
      <Banner />
      <BfWords />
      <ParentalBlessing />
    </div>
  );
}
