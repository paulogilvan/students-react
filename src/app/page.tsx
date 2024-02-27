import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5 text-center">Nota dos Alunos</h1>
      <StudentTable students={students} />
      <p className="text-center mt-5 text-gray-600">Feito por Paulo</p>
    </div>
  );
}

export default Page;