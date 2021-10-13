export default ({ store, redirect }) =>{
  console.log(11);
  if (!store.state.auth) {
    return redirect('/login');
  }
}
