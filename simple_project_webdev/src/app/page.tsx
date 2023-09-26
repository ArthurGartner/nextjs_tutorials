import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "../components/TodoItem";

function getTodos() {
  return prisma.toDo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.toDo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  // await prisma.toDo.create({ data: { title: "test", complete: false } });
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
