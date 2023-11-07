'use client'
import { addProductToDatabase } from "@/serverActions/serverActions";
import { useTransition } from "react";

function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const formData= new FormData();
  formData.append("product","Mac Pro");
  formData.append("price","2000");

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md 2-48"
    >{isPending ? "Adding" : "Add Mac"}</button>
  )
}

export default AddProductButton