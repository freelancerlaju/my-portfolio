"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

interface Colors {
  title?: string;
  issuer?: string;
  date?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  title?: string;
  issuer?: string;
  date?: string;
}

interface CircularCertificationsProps {
  certifications: Certification[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

export const CircularCertifications = ({
  certifications,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularCertificationsProps) => {
  // Color & font config
  const colorTitle = colors.title ?? "#000";
  const colorIssuer = colors.issuer ?? "#6b7280";
  const colorDate = colors.date ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeTitle = fontSizes.title ?? "1.5rem";
  const fontSizeIssuer = fontSizes.issuer ?? "0.925rem";
  const fontSizeDate = fontSizes.date ?? "1rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<number | null>(null);

  const certificationsLength = useMemo(
    () => certifications.length,
    [certifications]
  );
  const activeCertification = useMemo(
    () => certifications[activeIndex],
    [activeIndex, certifications]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % certificationsLength);
      }, 4000);
    }
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, certificationsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, certificationsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % certificationsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [certificationsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + certificationsLength) % certificationsLength
    );
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [certificationsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset =
      (index - activeIndex + certificationsLength) % certificationsLength;
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + certificationsLength) % certificationsLength === index;
    const isRight = (activeIndex + 1) % certificationsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for content
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="certification-container">
      <style jsx global>{`
        :root {
          --color-title: #1e293b;
          --color-issuer: #64748b;
          --color-date: #475569;
          --color-arrow-bg: #1e293b;
          --color-arrow-fg: #f8fafc;
          --color-arrow-hover: #3b82f6;
        }

        .dark {
          --color-title: #f8fafc;
          --color-issuer: #cbd5e1;
          --color-date: #94a3b8;
          --color-arrow-bg: #334155;
          --color-arrow-fg: #f8fafc;
          --color-arrow-hover: #3b82f6;
        }
      `}</style>
      <div className="certification-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {certifications.map((certification, index) => (
            <div
              key={certification.image}
              className="certification-image-wrapper"
              style={getImageStyle(index)}
            >
              <img
                src={certification.image}
                alt={`${certification.title} certification`}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="certification-image"
                data-index={index}
              />
              {/* Floating Badge */}
              <div className="floating-badge">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
        {/* Content */}
        <div className="certification-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="certification-title"
                style={{ color: colorTitle, fontSize: fontSizeTitle }}
              >
                {activeCertification.title}
              </h3>

              <div className="certification-details">
                <div className="detail-item">
                  <Building2 className="w-5 h-5" />
                  <span
                    style={{ color: colorIssuer, fontSize: fontSizeIssuer }}
                  >
                    {activeCertification.issuer}
                  </span>
                </div>

                <div className="detail-item">
                  <Calendar className="w-5 h-5" />
                  <span style={{ color: colorDate, fontSize: fontSizeDate }}>
                    {activeCertification.date}
                  </span>
                </div>
              </div>

              <motion.a
                href={activeCertification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Verify Certificate</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </AnimatePresence>

          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous certification"
            >
              <FaArrowLeft size={28} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next certification"
            >
              <FaArrowRight size={28} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .certification-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
        }
        .certification-grid {
          display: grid;
          gap: 5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          perspective: 1000px;
        }
        .certification-image-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .certification-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .dark .certification-image {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }
        .floating-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 0.75rem;
          padding: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .certification-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .certification-title {
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .certification-details {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(248, 250, 252, 0.5);
          border-radius: 0.75rem;
          border: 1px solid rgba(226, 232, 240, 0.5);
        }
        .dark .detail-item {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(51, 65, 85, 0.5);
        }
        .verify-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          text-decoration: none;
          border-radius: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        .verify-button:hover {
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }
        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        @media (min-width: 1024px) {
          .certification-grid {
            grid-template-columns: 1fr 1fr;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
        @media (max-width: 1023px) and (min-width: 769px) {
          .certification-container {
            padding: 1.5rem;
            max-width: 48rem;
          }
          .certification-grid {
            gap: 3rem;
          }
          .image-container {
            height: 22rem;
          }
          .certification-title {
            font-size: 1.75rem !important;
          }
          .certification-details {
            margin-bottom: 1.5rem;
          }
          .arrow-buttons {
            padding-top: 2rem;
          }
        }
        @media (max-width: 768px) {
          .certification-container {
            padding: 1rem;
            max-width: 100%;
          }
          .certification-grid {
            gap: 2rem;
          }
          .image-container {
            height: 18rem;
          }
          .certification-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem;
          }
          .certification-details {
            margin-bottom: 1.5rem;
            gap: 0.75rem;
          }
          .detail-item {
            padding: 0.5rem;
            font-size: 0.875rem;
          }
          .verify-button {
            padding: 0.875rem 1.25rem;
            font-size: 0.875rem;
          }
          .arrow-buttons {
            padding-top: 1.5rem;
            gap: 1rem;
          }
          .arrow-button {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
        @media (max-width: 480px) {
          .certification-container {
            padding: 0.75rem;
          }
          .certification-grid {
            gap: 1.5rem;
          }
          .image-container {
            height: 16rem;
          }
          .certification-title {
            font-size: 1.25rem !important;
            margin-bottom: 0.5rem;
          }
          .certification-details {
            margin-bottom: 1rem;
            gap: 0.5rem;
          }
          .detail-item {
            padding: 0.5rem;
            font-size: 0.8rem;
          }
          .verify-button {
            padding: 0.75rem 1rem;
            font-size: 0.8rem;
          }
          .arrow-buttons {
            padding-top: 1rem;
            gap: 0.75rem;
          }
          .arrow-button {
            width: 2.25rem;
            height: 2.25rem;
          }
          .floating-badge {
            top: 0.75rem;
            right: 0.75rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularCertifications;
