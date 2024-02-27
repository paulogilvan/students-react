import { Student } from "@/types/Student";

type Props = {
    students: Student[];
}

export const StudentTable = ({ students }: Props) => {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Nome</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Nota 1</th>
                    <th className="p-3">Nota 2</th>
                    <th className="p-3">Nota Final</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id} className="text-gray-800 bg-orange-200 border-b border-gray-600">
                        <td className="p-3 flex items-center">
                            <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <div className="font-bold">{student.name}</div>
                                <div>{student.email}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            {student.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-xs">Ativo</div>}
                            {!student.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-xs">Inativo</div>}
                        </td>
                        <td className="p-3">{student.grade1.toFixed(1)}</td>
                        <td className="p-3">{student.grade2.toFixed(1)}</td>
                        <td className="p-3 font-bold">{student.active ? ((student.grade1 + student.grade2) / 2).toFixed(1) : '--'}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );
}