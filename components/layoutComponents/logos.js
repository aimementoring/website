import React from 'react';
import {
  SiteLogo,
  WobblePath,
  ScratchClipPath,
  ScratchDivider,
  ScratchAmbassadorClipPath,
  ArrowNextIcon,
  ArrowPrevIcon,
  MailIcon,
  InfoIcon,
  DescriptionIcon,
  MoneyIcon,
  EventIcon,
  ArrowDownIcon,
  PlainArrow,
  AccessibilityIcon,
  DescriptionNewIcon,
  BookIcon,
  VideoIcon,
  DownloadIcon,
  PlaneIcon,
  QuestionIcon,
  Play,
  PlayFilled,
  EmailIcon,
  CloseIcon,
} from './symbolIcons';
import styles from './logos.module.scss';

const Logos = () => (
  <svg height="0" width="0" className={styles.absolute}>
    <defs>
      <SiteLogo />
      <ArrowNextIcon />
      <ArrowPrevIcon />
      <WobblePath />
      <ScratchClipPath />
      <ScratchDivider />
      <ScratchAmbassadorClipPath />
      <MailIcon />
      <InfoIcon />
      <DescriptionIcon />
      <MoneyIcon />
      <EventIcon />
      <PlaneIcon />
      <QuestionIcon />
      <Play />
      <PlayFilled />
      <ArrowDownIcon />
      <PlainArrow />
      <AccessibilityIcon />
      <DescriptionNewIcon />
      <BookIcon />
      <VideoIcon />
      <DownloadIcon />
      <EmailIcon />
      <CloseIcon />
    </defs>
  </svg>
);

export default Logos;
