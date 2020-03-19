import React from 'react';
import ReactMarkdown from 'react-markdown';
import Paragraph from 'aime-blueprint/lib/components/paragraph';
import PropTypes from 'prop-types';

const TermPhraseCard = ({ contentCards }) => {
  const termContent = contentCards
    && contentCards.map(({ fields, sys }) => (
      <ReactMarkdown
        key={sys.id}
        source={fields.contentCopy}
        renderers={{ paragraph: Paragraph }}
      />
    ));

  return (
    <>{termContent}</>
  );
};

const SysShape = PropTypes.shape({
  id: PropTypes.string,
});

TermPhraseCard.propTypes = {
  contentCards: PropTypes.arrayOf(PropTypes.shape({
    Type: PropTypes.string,
    contentCopy: PropTypes.string,
    sys: PropTypes.shape({
      id: SysShape,
      contentType: PropTypes.shape({}),
      createdAt: PropTypes.string,
      environment: PropTypes.shape({}),
      locale: PropTypes.string,
      revision: PropTypes.number,
      space: PropTypes.shape({}),
      type: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  })).isRequired,
};

export default TermPhraseCard;
