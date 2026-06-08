import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Handshake, GraduationCap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob" aria-hidden />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <img src={logo} alt="Logo Instituto Criar Ativa Mente" className="h-5 w-5 rounded-full object-cover" /> Instituto Criar Ativa Mente
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transformando <span className="gradient-text">educação</span>, desenvolvimento humano e impacto social em experiências reais.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Desenvolvemos soluções educacionais, sociais e tecnológicas voltadas para escolas, redes públicas, instituições e comunidades — unindo aprendizagem, inovação, inclusão, formação cidadã e competências para o século XXI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90">
              <Link to="/solucoes">Conheça nossos programas <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              <Link to="/parcerias"><Handshake className="mr-1 h-4 w-4" /> Seja parceiro</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-foreground hover:bg-secondary">
              <Link to="/contato"><Heart className="mr-1 h-4 w-4" /> Apoie a iniciativa</Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-[2rem] gradient-hero shadow-elegant" />
            <div className="absolute inset-6 rounded-[1.5rem] bg-background/95 backdrop-blur" />
            <div className="absolute inset-0 grid place-items-center">
              <GraduationCap className="h-32 w-32 text-primary/80" strokeWidth={1.2} />
            </div>

            <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft animate-float">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><TrendingUp className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Engajamento</div>
                <div className="font-display font-bold">+87%</div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft animate-float" style={{ animationDelay: "1s" }}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Users className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Escolas</div>
                <div className="font-display font-bold">1.200+</div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft animate-float" style={{ animationDelay: "2s" }}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><GraduationCap className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Alunos</div>
                <div className="font-display font-bold">350k+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
