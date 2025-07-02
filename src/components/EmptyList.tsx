import { Package, Plus } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

type Props = {
  title: string;
  description: string;
  titleButton: string;
};

export function EmptyList({ title, description, titleButton }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-30">
      <Package size={52} className="text-gray-300 mx-auto mb-4" />
      <h1 className="text-2xl font-medium text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 mb-8">{description}</p>

      <Button className="gap-2" onClick={() => navigate("newProduct")}>
        <Plus />
        {titleButton}
      </Button>
    </div>
  );
}
