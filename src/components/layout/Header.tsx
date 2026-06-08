import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/impacto", label: "Impacto" },
  { to: "/parcerias", label: "Parcerias" },
  { to: "/transparencia", label: "Transparência" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-lg">
      {/* Linha 1: logo + nome + tagline + CTA */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="Instituto Criar Ativa Mente"
            className="h-12 w-12 shrink-0 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-extrabold leading-tight tracking-tight gradient-text sm:text-2xl lg:text-[1.7rem]">
              Instituto <span className="text-primary">Criar</span> <span className="text-accent-foreground">Ativa</span> <span className="text-primary-glow">Mente</span>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
              Transformando vidas pela educação
            </span>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            variant="default"
            className="hidden sm:inline-flex gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90"
          >
            <Link to="/contato">Apoie</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((it) => (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {it.label}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-md gradient-hero px-3 py-3 text-center font-semibold text-primary-foreground"
                >
                  Apoie a iniciativa
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Linha 2: navegação (apenas desktop) */}
      <div className="hidden border-t border-border bg-secondary/40 lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 sm:px-6 lg:px-8">
          {navItems.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="whitespace-nowrap rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              activeProps={{ className: "text-primary bg-background" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
