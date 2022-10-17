import { ref } from "vue";
function useMousePosition() {
  const x = ref(0);
  const y = ref(0);
  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
    console.log(x.value, y.value);
  };
  return { x, y, updateMouse };
}

export default useMousePosition;
