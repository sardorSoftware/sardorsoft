import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-20 text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative mb-6 h-48 w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-75 blur-md"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-background shadow-xl">
              <Image
                src="/sardor.jpg"
                alt="Zokirjonov Sardor"
                width={200} // Set the desired width
                height={200} // Set the desired height
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </div>
          </div>
          <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
            Zokirjonov Sardor
          </h1>
          <p className="text-xl text-muted-foreground">
            Software Developer & UI/UX Designer
          </p>
          <Button asChild className="mt-4">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
