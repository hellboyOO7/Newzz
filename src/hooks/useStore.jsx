import { StoreContext } from "@/context/store-provider";
import { useContext } from "react";

const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
};

export default useStore;
