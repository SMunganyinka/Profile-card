import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ProfileCard
        fullName="Shakira Munganyinka"
        role="Full Stack Developer"
        description="Crafting interactive, futuristic web experiences with React & TypeScript."
        imageUrl="https://www.nexventures.net/icon.png"
      />
    </div>
  );
}
