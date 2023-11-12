import { Hero } from '@/components/Hero/Hero';
import Login from './login';
export default function HomePage() {
  return (
    <div>
      <Login></Login>
      <Hero />
    </div>
  );
}
