import { Footer } from './components/footer';
import { SideBar } from './components/sidebar';
import { Main } from './components/home';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <Main />
      </div>
     <Footer />
    </div>
  )
}
