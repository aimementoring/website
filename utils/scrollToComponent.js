import isClientSide from './isClientSide';

const scrollToComponent = (ref) => {
  if (isClientSide()) {
    const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    if (isSmoothScrollSupported) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      ref.current.scrollIntoView(false);
    }
  }
};

export default scrollToComponent;
