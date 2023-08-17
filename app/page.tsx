import Image from 'next/image';
import Search from './Components/Search';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center ">
      <Search />
    </main>
  );
}
