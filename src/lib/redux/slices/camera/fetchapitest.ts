import { Vector3 } from "three";

export const fetchapitest = async (target = new Vector3(0, 0, 0),): Promise<{ data: number }> => {
  const response = await fetch("http://localhost:3000/api/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ target }),
  });
  const result = await response.json();
  return result;
};
