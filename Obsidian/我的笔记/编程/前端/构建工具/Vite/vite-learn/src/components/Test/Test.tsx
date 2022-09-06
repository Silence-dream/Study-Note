import styles from "./Test.module.scss"
import { ReactComponent as Logo } from "@assets/logo-1.svg"
import SvgIcon from "../SvgIcon";
const icons = import.meta.globEager('../../assets/logo-*.svg');
console.log(icons);
function Test(){
  enum IconType {
    Logo1 = 'logo-1',
  }
  console.log(IconType)
  const iconUrls = Object.values(icons).map((mod:any) => {
    // 如 ../../assets/icons/logo-1.svg -> logo-1
    const fileName = mod.default.split('/').pop();
    const [svgName] = fileName.split('.');
    return svgName;
  });
  return (
    <div>
      <h1 className={styles.text}>test</h1>
    </div>
  )
}
export default Test