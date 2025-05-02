"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import CommentModal from "@/components/comment/CommentModal";
import "../../../styles/projectDetail.css";
import { FaComment } from "react-icons/fa6";
import projects from "@/data/projects";
import comments from "@/data/comment";

const ProjectPage = () => {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projects.find((p) => p.id === params?.id);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (!project) {
    return <div className="not-found">프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-container"
    >
      <h1 className="project-title">{project.title}</h1>

      <div className="project-main">
        <div className="project-image-wrapper">
          <img
            src={`/${project.image}`}
            alt={`${project.title} 상세 이미지`}
            className="project-image"
            loading="lazy"
          />
        </div>

        <div className="project-info">
          <div className="skills-container">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-list">
              {project.tag.map((skill, index) => (
                <span key={index} className="skill-tag">
                  # {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="project-content">
            <h2 className="content-title">Description</h2>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      </div>

      <button
        className="comment-button"
        onClick={handleModalOpen}
        aria-label="댓글 보기"
      >
        <FaComment />
      </button>

      <CommentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        projectId={project.id.toString()}
      />
    </motion.div>
  );
};

export default ProjectPage;
