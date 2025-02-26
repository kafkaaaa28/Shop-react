import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Carousel.css';
import { FaCar, FaBattleNet, FaWolfPackBattalion, FaTruckMonster } from 'react-icons/fa';
import { GiBatWing, GiEvilBat } from 'react-icons/gi';

const DEFAULT_ITEMS = [
  {
    title: 'Sport Car',
    description: 'A fast and powerful sports car for high-performance driving.',
    id: 1,
    icon: <GiBatWing className="carousel-icon" />,
    img: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Luxury Sedan',
    description: 'A luxury sedan that offers comfort and style for city driving.',
    id: 2,
    icon: <FaWolfPackBattalion className="carousel-icon" />,
    img: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Off-road Vehicle',
    description: 'An off-road vehicle built for tough terrains and adventure.',
    id: 3,
    icon: <GiEvilBat className="carousel-icon" />, // Use FiTruck for off-road vehicle
    img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Electric Car',
    description: 'A modern electric car with sustainable and eco-friendly features.',
    id: 4,
    icon: <FaBattleNet className="carousel-icon" />, // Use FiBatteryCharging for electric vehicle
    img: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Concept Car',
    description: 'A futuristic concept car showcasing advanced automotive design.',
    id: 5,
    icon: <FaTruckMonster className="carousel-icon" />, // FiLayers can represent advanced design for concept cars
    img: 'https://images.pexels.com/photos/242125/pexels-photo-242125.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({ items = DEFAULT_ITEMS, baseWidth = 300, autoplay = false, autoplayDelay = 3000, pauseOnHover = false, loop = false, round = false }) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' }),
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? 'round' : ''}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' }),
              }}
              transition={effectiveTransition}
            >
              <div className="carousel-item">
                <img src={item.img} alt={item.title} className="carousel-image" />
              </div>
              <div className={`carousel-item-header ${round ? 'round' : ''}`}>
                <span className="carousel-icon-container">{item.icon}</span>
              </div>
              <div className="carousel-item-content">
                <div className="carousel-item-title text-black dark:text-white">{item.title}</div>
                <p className="carousel-item-description  text-black dark:text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? 'active' : 'inactive'}`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
