import { Text } from "../text";
import { useCount } from "../context/count-context";
export const Button = () => {
     const {count,setCount}=useCount()
  return (
    <>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <Text count={count} />
    </>
  );
};
