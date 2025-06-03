import React from 'react';
import {
  Introduction,
  SectionWithImage,
  GoalsSection,
  UsersSection,
  LearningsSection
} from './index';
import Callout from './Callout';
import KeyPointsSection from './KeyPointsSection';
import ImpactSection from './ImpactSection';
import FeatureSection from './FeatureSection';
import AlternatingFeatureSection from './AlternatingFeatureSection';
import PrincipleRequirementsSection from './PrincipleRequirementsSection';

const ProjectSections = ({ sections }) => {
  const renderSection = (section) => {
    switch (section.type) {
      case 'introduction':
        return (
          <Introduction
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        );
      case 'goals':
        return (
          <GoalsSection
            key={section.id}
            id={section.id}
            title={section.title}
            goals={section.content}
          />
        );
      case 'users':
        return (
          <UsersSection
            key={section.id}
            id={section.id}
            title={section.title}
            users={section.content}
          />
        );
      case 'learnings':
        return (
          <LearningsSection
            key={section.id}
            id={section.id}
            title={section.title}
            learnings={section.content}
          />
        );
      case 'image':
        return (
          <SectionWithImage
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            image={section.image}
            imageAlt={section.imageAlt}
          />
        );
      case 'feature':
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            features={section.features}
          />
        );
      case 'alternating-feature':
        return (
          <AlternatingFeatureSection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            features={section.features}
          />
        );
      case 'callout':
        return (
          <Callout
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        );
      case 'keypoints':
        return (
          <KeyPointsSection
            key={section.id}
            id={section.id}
            title={section.title}
            keyPoints={section.content}
          />
        );
      case 'impact':
        return (
          <ImpactSection
            key={section.id}
            id={section.id}
            title={section.title}
            impactPoints={section.content}
            copyText={section.copyText}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {sections.map((section, idx) => (
        <React.Fragment key={`section-${section.id || section.title}`}>
          {renderSection(section)}
          {section.id === 'defining-success' && <PrincipleRequirementsSection />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectSections; 