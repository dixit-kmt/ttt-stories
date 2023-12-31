import Navbar from './components/Navbar'
import User from './components/User'
import Posts from './components/Posts'

import userData from "../data/data.json";

export default function Home() {
  return (
    <main className="min-h-screen lg:max-w-[390px] lg:m-auto lg:border-2 lg:rounded-xl">
      <Navbar></Navbar>
      <User data={userData}></User>
      <Posts posts={userData.posts}></Posts>
    </main>
  );
}
