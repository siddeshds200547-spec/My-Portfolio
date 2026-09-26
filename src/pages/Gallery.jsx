import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    {
      id: "travel",
      caption:
        "Exploring new places, creating memories and finding inspiration beyond the screen.",
      photos: ["/gallery/TRAVEL.jpeg"],
    },
    {
      id: "teaching",
      caption:
        "Teaching and sharing knowledge — an experience that has strengthened my communication, confidence and leadership.",
      photos: ["/gallery/TEACHING.jpeg"],
    },
    {
      id: "anchoring",
      caption:
        "Anchoring and participating in technical and college events.",
      photos: ["/gallery/ANCHORING.jpeg"],
    },
  ],

  projects: [
    {
      id: "agri-ai",
      caption:
        "Agri AI — Smart Farming System designed to bring AI-powered agricultural services together in one platform.",
      photos: ["/gallery/AgriAI.jpeg"],
      type: "project",
    },
    {
      id: "yolo",
      caption:
        "YOLO-based computer vision project for real-world object detection.",
      photos: ["/gallery/YOLO 1.jpeg", "/gallery/YOLO 2.jpeg"],
      type: "project",
    },
    {
      id: "pet-rescue",
      caption:
        "Pet Rescue AI — a project focused on helping connect technology with animal rescue and assistance.",
      photos: ["/gallery/PET RESCUE.jpeg"],
      type: "project",
    },
  ],

  achievements: [
    {
      id: "elastic",
      caption:
        "HackNight Bengaluru — participated in a technical hackathon and explored AI, agents and cloud technologies.",
      photos: ["/gallery/ELASTIC HACKATHON.jpeg"],
    },
    {
      id: "microsoft",
      caption:
        "Microsoft Speech / M365 technical learning experience and conference participation.",
      photos: ["/gallery/MICROSOFT SPEECH.jpeg"],
    },
    {
      id: "mime",
      caption:
        "Participated in technical and cultural activities as part of the college experience.",
      photos: ["/gallery/MIME.jpeg"],
    },
    {
      id: "basavanna",
      caption:
        "Technical and cultural event participation.",
      photos: ["/gallery/BASAVANNA.jpeg"],
    },
  ],
};

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const tabContentVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -25,
    scale: 0.98,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");

  const [zoom, setZoom] = useState({
    img: null,
    post: null,
    index: 0,
  });

  const openZoom = (post, index) => {
    setZoom({
      img: post.photos[index],
      post,
      index,
    });
  };

  const closeZoom = () => {
    setZoom({
      img: null,
      post: null,
      index: 0,
    });
  };

  const nextImage = () => {
    if (!zoom.post || zoom.post.photos.length <= 1) return;

    const nextIndex =
      (zoom.index + 1) % zoom.post.photos.length;

    setZoom({
      ...zoom,
      img: zoom.post.photos[nextIndex],
      index: nextIndex,
    });
  };

  const prevImage = () => {
    if (!zoom.post || zoom.post.photos.length <= 1) return;

    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) %
      zoom.post.photos.length;

    setZoom({
      ...zoom,
      img: zoom.post.photos[prevIndex],
      index: prevIndex,
    });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* TITLE */}

      <motion.h2
        className="gallery-title"
        variants={childVariants}
      >
        Gallery
      </motion.h2>

      <motion.p
        className="gallery-subtitle"
        variants={childVariants}
      >
        My projects, experiences, achievements and memories.
      </motion.p>

      {/* TABS */}

      <motion.div
        className="tab-buttons"
        variants={childVariants}
      >
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${
              tab === type ? "active" : ""
            }`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() +
              type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* TAB CONTENT */}

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className={`post-card ${
                post.type === "project"
                  ? "project-card"
                  : ""
              }`}
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              {/* CAPTION */}

              <p className="caption">
                {post.caption}
              </p>

              {/* PHOTOS */}

              <div
                className={`photo-grid ${
                  post.photos.length > 1
                    ? "multi"
                    : "single"
                }`}
              >
                {post.photos.map((src, index) => (
                  <motion.div
                    key={`${post.id}-${index}`}
                    className="photo-item"
                    whileHover={{ scale: 1.03 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    onClick={() =>
                      openZoom(post, index)
                    }
                  >
                    <img
                      src={src}
                      alt={post.caption}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ZOOM VIEWER */}

      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(6px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            onClick={closeZoom}
          >
            {/* IMAGE */}

            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="Gallery preview"
              className="zoom-img"
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
              onClick={(e) =>
                e.stopPropagation()
              }
            />

            {/* PREVIOUS */}

            {zoom.post?.photos.length > 1 && (
              <>
                <button
                  className="nav-btn left"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* NEXT */}

                <button
                  className="nav-btn right"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={closeZoom}
              aria-label="Close image"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}