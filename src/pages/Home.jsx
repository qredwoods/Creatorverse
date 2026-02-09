import CreatorCard from "../components/CreatorCard";

export default function Home() {
  const creator = {
    name: "Jane Developer",
    url: "https://janedev.dev",
    description: "Fullstack engineer who loves React and APIs.",
    imageURL: "https://se-phd.s3d.cmu.edu/images/people/students/hseih-jane.jpg",
  };

  return (
    <div>
      <h1>All Creators</h1>
      <CreatorCard creator={creator} />
    </div>
  );
}
