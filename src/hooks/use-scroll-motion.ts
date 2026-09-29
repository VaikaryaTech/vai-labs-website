import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·-";

/** Wrap every word of an element in a masked span so it can slide up. */
const splitWords = (el: HTMLElement, fill = false) => {
  if (el.dataset.splitDone) return Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
  el.dataset.splitDone = "true";
  el.setAttribute("aria-label", el.textContent ?? "");
  const words = (el.textContent ?? "").trim().split(/\s+/);
  el.innerHTML = "";
  return words.map((word, i) => {
    const outer = document.createElement("span");
    outer.setAttribute("aria-hidden", "true");
    outer.className = fill ? "inline-block" : "inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]";
    const inner = document.createElement("span");
    inner.className = "inline-block will-change-transform";
    inner.dataset.word = "";
    inner.textContent = word;
    outer.appendChild(inner);
    el.appendChild(outer);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    return inner;
  });
};

const scramble = (el: HTMLElement) => {
  const final = el.dataset.scrambleText ?? el.textContent ?? "";
  el.dataset.scrambleText = final;
  const state = { p: 0 };
  return gsap.to(state, {
    p: 1,
    duration: 0.9,
    ease: "none",
    onUpdate: () => {
      const revealed = Math.floor(state.p * final.length);
      el.textContent = final
        .split("")
        .map((ch, i) =>
          i < revealed || ch === " "
            ? ch
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        )
        .join("");
    },
  });
};

/**
 * Declarative scroll choreography. Mark elements inside `root` with:
 *
 * - `data-split`         headline: words slide up out of a mask
 *                        (`data-split="load"` plays immediately instead of on scroll)
 * - `data-reveal`        fade + rise on enter (children of `data-stagger` stagger)
 * - `data-line`          hairline that draws in from the left
 * - `data-parallax="n"`  drifts by n × 100px while scrolling past
 * - `data-fill`          words brighten one by one as you scroll through
 * - `data-scramble`      mono text decodes like a terminal on enter
 * - `data-clip`          framed media opens to full-bleed while its image zooms out
 * - `data-hero-fade`     scales down and fades while the hero scrolls away
 */
export const useScrollMotion = (root: RefObject<HTMLElement>) => {
  useLayoutEffect(() => {
    if (!root.current) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Only handle elements that belong to this root, not to a nested motion root.
      const select = gsap.utils.selector(root);
      const q = <T extends HTMLElement>(sel: string) =>
        select<T>(sel).filter((el) => (el.closest("[data-motion]") ?? root.current) === root.current);

      q<HTMLElement>("[data-split]").forEach((el) => {
        const words = splitWords(el);
        const onLoad = el.dataset.split === "load";
        gsap.from(words, {
          yPercent: 110,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.06,
          delay: onLoad ? 0.15 : 0,
          scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 85%" },
        });
      });

      q<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 32,
          duration: 1,
          ease: "power3.out",
          delay: Number(el.dataset.reveal) || 0,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      q<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.from(el.children, {
          autoAlpha: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      q<HTMLElement>("[data-line]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.4,
          ease: "expo.inOut",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      q<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 0.2;
        gsap.fromTo(
          el,
          { y: amount * 100 },
          {
            y: amount * -100,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      q<HTMLElement>("[data-fill]").forEach((el) => {
        const words = splitWords(el, true);
        gsap.fromTo(
          words,
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
      });

      q<HTMLElement>("[data-scramble]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => scramble(el),
        });
      });

      q<HTMLElement>("[data-clip]").forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 90%", end: "center center", scrub: true },
        });
        tl.fromTo(
          el,
          { clipPath: "inset(12% 14% 12% 14% round 28px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" }
        );
        const media = el.querySelector("img, video");
        if (media) tl.fromTo(media, { scale: 1.25 }, { scale: 1, ease: "none" }, 0);
      });

      q<HTMLElement>("[data-hero-fade]").forEach((el) => {
        gsap.to(el, {
          scale: 0.94,
          autoAlpha: 0.2,
          y: -40,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
        });
      });
    });

    // Fonts and images can shift layout after mount.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [root]);
};
