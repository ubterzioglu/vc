import { motion, type Variants } from "framer-motion";
import { BrutalButton } from "@/components/ui/brutal-button";
import { Rocket, Compass, Vote, Trophy, HelpCircle } from "lucide-react";
import HeroBackground, { type BackgroundType } from "./HeroBackground";
import heroBg from "@/assets/hero-bg.jpg";

// =====================================================
// ARKA PLAN AYARLARI - Buradan kolayca değiştir!
// =====================================================
const BACKGROUND_CONFIG = {
  // "video" | "image" | "animation" seçeneklerinden birini seç
  type: "image" as BackgroundType,
  
  // Görsel kullanmak için:
  imageSrc: heroBg,
  
  // Video kullanmak için (type: "video" yap ve video URL'si ekle):
  // videoSrc: "/videos/hero-video.mp4",
  
  // Overlay karanlık seviyesi (0-1 arası, 1 = tamamen karanlık)
  overlayOpacity: 0.6,
};
// =====================================================

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Dinamik Arka Plan */}
      <HeroBackground
        type={BACKGROUND_CONFIG.type}
        imageSrc={BACKGROUND_CONFIG.imageSrc}
        videoSrc={undefined}
        overlayOpacity={BACKGROUND_CONFIG.overlayOpacity}
      />
      
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 backdrop-blur-sm border-2 border-foreground text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            Beta'da Canlı
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
        >
          <span className="text-foreground">Projeni Paylaş,</span>
          <br />
          <span className="text-gradient-hero">Oylamayı Kazan</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          En yaratıcı projeler burada yarışıyor. 
          <span className="text-secondary font-semibold"> Ekle, </span>
          <span className="text-tertiary font-semibold">keşfet, </span>
          <span className="text-accent font-semibold">oyla </span>
          ve en tepelere çık! 🚀
        </motion.p>

        {/* Buttons Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
            <BrutalButton
              variant="primary"
              size="lg"
              className="w-full flex-col h-auto py-4 gap-1"
            >
              <Rocket className="w-6 h-6" />
              <span className="text-xs md:text-sm">Proje Ekle</span>
            </BrutalButton>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <BrutalButton
              variant="secondary"
              size="lg"
              className="w-full flex-col h-auto py-4 gap-1"
            >
              <Compass className="w-6 h-6" />
              <span className="text-xs md:text-sm">Keşfet</span>
            </BrutalButton>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <BrutalButton
              variant="tertiary"
              size="lg"
              className="w-full flex-col h-auto py-4 gap-1"
            >
              <Vote className="w-6 h-6" />
              <span className="text-xs md:text-sm">Oyla</span>
            </BrutalButton>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <BrutalButton
              variant="accent"
              size="lg"
              className="w-full flex-col h-auto py-4 gap-1"
            >
              <Trophy className="w-6 h-6" />
              <span className="text-xs md:text-sm">Sıralama</span>
            </BrutalButton>
          </motion.div>

          <motion.div variants={buttonVariants} className="col-span-2 md:col-span-1">
            <BrutalButton
              variant="highlight"
              size="lg"
              className="w-full flex-col h-auto py-4 gap-1"
            >
              <HelpCircle className="w-6 h-6" />
              <span className="text-xs md:text-sm">Nasıl Çalışır?</span>
            </BrutalButton>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">1.2K+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Proje</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-secondary">8.5K+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Oy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-tertiary">3.2K+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Üye</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
