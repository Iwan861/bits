import Lanyard from "./Lanyard/Lanyard";
export default function App() {
  return (
    <div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
