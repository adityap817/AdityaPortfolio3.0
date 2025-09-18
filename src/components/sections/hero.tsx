export function Hero() {
  return (
    <section
      id="home"
      className="relative container flex flex-col items-center justify-center py-32 md:py-48 min-h-[80vh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 flow-item-1"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 flow-item-2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 flow-item-3"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[10rem] md:text-[20rem] font-bold font-headline text-center text-muted-foreground/10 select-none whitespace-nowrap leading-none">
          ADITYA
        </h1>
      </div>
      <div className="relative text-center">
        <h2 className="text-6xl md:text-8xl font-bold font-headline">
          <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Aditya Patil
          </span>
        </h2>
        <p className="relative text-2xl text-muted-foreground md:w-10/12 mx-auto text-center mt-8">
          I build and design modern, responsive, and performant web
          applications. Passionate about creating seamless user experiences from
          backend to frontend.
        </p>
      </div>
    </section>
  );
}
