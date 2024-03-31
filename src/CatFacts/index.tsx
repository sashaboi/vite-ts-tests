import { useCallback, useEffect, useState } from "react";

const CatFacts = () => {
  type catData = {
    fact: string;
    length: number;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [catFacts, setCatFacts] = useState<catData[]>([]);
  const url = "https://catfact.ninja/facts";

  const handleCatData = useCallback((data: catData[]) => {
    setIsLoading(false);
    setCatFacts(data);
  }, []);

  const fetchCatFacts = useCallback(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => handleCatData(data.data))
      .catch((error) => console.error(error));
  }, [handleCatData]);

  useEffect(() => {
    fetchCatFacts();
  }, [fetchCatFacts]);

  return (
    <div>
      {isLoading && "Loading..."}

      {catFacts.map((fact) => (
        <div>{fact.fact}</div>
      ))}
    </div>
  );
};

export default CatFacts;
