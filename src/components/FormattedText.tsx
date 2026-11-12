import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
  linkClassName?: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className,
  linkClassName = 'font-semibold text-[#8E5B1C] hover:text-[#B77C26] underline decoration-[#D49B37]'
}) => {
  if (!text || !text.includes('[')) {
    return <span className={className}>{text}</span>;
  }

  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const [_, linkText, href] = match;
    parts.push(
      <a key={match.index} href={href} className={linkClassName}>
        {linkText}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <span className={className}>{parts}</span>;
};
