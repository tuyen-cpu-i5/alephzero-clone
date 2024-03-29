import React, { useRef, useEffect, useState, useCallback } from 'react'
import { globeOptions } from '@/constants/globe'
import useScript from '@/hooks/useScript'
import clsx from 'clsx'
import { getRandomCoordinates } from '@/utils/helper'
import useScript1 from "@/hooks/useScript1";

export default function GlobeCanvas() {
  const isReady = useScript1("/scripts/globe1.js")
  const [isInitialized, setIsInitialized] = useState(false)

  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isReady) return;
    if (window.glDotGlobe1?.init(canvasRef.current, globeOptions)) {
      setIsInitialized(true)
      requestAnimationFrame(function animate() {
        window.glDotGlobe1.update(0.035)
        requestAnimationFrame(animate)
      })

      const interval = setInterval(() => {
        const index = Math.floor(Math.random() * globeOptions.markers.length)
        const coordinates = globeOptions.markers[index]
        window.glDotGlobe1?.triggerPulse(coordinates.lat, coordinates.long);
      }, 200)

      const cleanup = setupEventListeners()
      return () => {
        cleanup()
        clearInterval(interval)
      }
    }
  }, [isReady])

  const setupEventListeners = () => {
    const handlePointerDown = (event) => {
      window.glDotGlobe1.onPointerDown(event)
    };

    const handlePointerMove = (event) => {
      window.glDotGlobe1.onPointerMove(event)
    };

    const handlePointerUp = (event) => {
      window.glDotGlobe1.onPointerUp(event)
    };

    const canvas = canvasRef.current

    canvas.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const width = Math.floor(rect.width) || 0;
      window.glDotGlobe1?.resize(width);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
    };
  };

  if (!isReady) return null;

  return (
    <div className='relative h-full w-full touch-none' ref={containerRef}>
      <img
        className={clsx('absolute inset-0 object-contain xl:scale-105', !isInitialized ? 'visible' : 'invisible')}
        src={"/assets/images/globe.png"}
        alt="globe"
        data-aos="zoom-in"
      />
      <canvas
        ref={canvasRef}
        className={clsx('absolute w-full h-full inset-0 xl:scale-105 z-10', !isInitialized ? 'invisible' : 'visible')}
      />

    </div>
  )
}
