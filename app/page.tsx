import SceneCanvas from "@/components/SceneCanvas";

export default function Home() {
  return (
    <div className="w-screen h-screen items-center justify-center">
      <SceneCanvas source={"/yacht.glb"} />
    </div>
  );
}
