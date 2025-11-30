import React from "react";

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
  clipClass = "",
  style = {},
  scrollMarginTop = 'var(--navbar-height)',
  paddingTop = "pt-8",
  paddingBottom = "pb-0",
}) => {
  const classes = `${paddingTop} ${paddingBottom} w-4/5 mx-auto font-sans ${clipClass} ${className}`.trim();

  return (
    <section id={id} className={classes} style={{ scrollMarginTop, minHeight: 'calc(100vh - var(--navbar-height))', ...style }}>
      {title && (
        <div className={`text-center mb-12 ${titleClassName}`}>
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          {subtitle && (
            <p className="text-gray-400 mt-4 text-lg font-semibold">{subtitle}</p>
          )}
        </div>
      )}

      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
