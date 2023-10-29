"use client"
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import itemImg1 from '../../assets/shirtBlack.png'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



export const CartItemDescription = () => {
  // const router = useRouter();
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedItemRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(true);


  useEffect(() => {

    const section1 = section1Ref.current;

    if (section1) {
      const scrollTrigger = gsap.to(pinnedItemRef.current, {
        y: 650,
        duration: 8,
        scrollTrigger: {
          trigger: section1,
          start: "10%",
          end: () => `+=${section1.clientHeight}`,
          scrub: 1,
          toggleActions: "restart none none none",
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2rem"
          }
        }
      });

      return () => {
        // Clean up the ScrollTrigger animation
        scrollTrigger.kill();
      };
    }

  }, [pinnedItemRef.current]);


  useEffect(() => {



    const panels = [section1Ref.current, section2Ref.current, section3Ref.current];
    let observer = ScrollTrigger.normalizeScroll(true) || null;
    let scrollTween: any;
  
    const handleTouchStart = (e: any) => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { capture: true, passive: false });

    const goToSection = (i: number) => {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
          observer?.disable(); 
          observer?.enable();
        },
        duration: 1,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

    const snapTrigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });

    
    return () => {
      if (scrollTween) {
        scrollTween.kill();
      }
      snapTrigger.kill();
      document.removeEventListener("touchstart", handleTouchStart, { capture: true });
      if(observer){
        observer.disable();
      }
    };
  

  }, [])



  return (
    <React.Fragment>
      <div ref={containerRef} className="cartItemDescInner">
        <section className="section panel" style={{ backgroundColor: 'green' }} ref={section1Ref}>
          <div className="cartDescHeading ">
            <p>BLACK SHIRT</p>
          </div>
          <div className="ItemPicture" ref={pinnedItemRef}>
            <Image src={itemImg1} alt="Item Image" />
          </div>
        </section>
        <section className="section panel" style={{ backgroundColor: 'blue' }} ref={section2Ref}>
          <div className="cartDescHeading ">
            <p>QUALITY</p>
          </div>
        </section>
        <section className="section panel" style={{ backgroundColor: 'purple' }} ref={section3Ref}>
          <div className="cartDescHeading " >
            <p>Grey SHIRT</p>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
