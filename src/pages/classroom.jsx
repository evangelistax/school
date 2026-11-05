import { useParams } from "react-router-dom";
export default function Classroom() {
  const { id } = useParams();

  return <p>classroom with id: {id}</p>;
}
