import {useSelector} from "react-redux";

export default function CombineReducers () {

  const message = useSelector (state => state.message.message);

  return (
    <>
      <h1>拆分store模块,相当于vuex里面的model</h1>
      <p>message = {message}</p>
    </>
  );
}
