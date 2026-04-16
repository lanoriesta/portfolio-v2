import IconResponsive from "../icon/IconResponsive";
import IconRedesign from "../icon/IconRedesign";

const ProjectLogo = ({ project }) => {
  const { icon, logo, name, nameHighlight, highlightBg, accentColor } = project;

  if (icon === "gk") {
    return (
      <div className="flex items-center gap-2">
        <img className="h-8 w-8" src={logo} alt={`${name} logo`} />
        <div className="flex items-center gap-1">
          <span
            className="text-[13px] font-medium"
            style={{ color: accentColor }}
          >
            GK
          </span>
          <span className="text-[11px] text-[#888780]">Gawad Kalinga</span>
          <span
            className="text-[13px] font-bold text-[#F1EFE8] px-[5px] py-[1px] rounded-[3px] tracking-wider ml-1"
            style={{ background: highlightBg }}
          >
            USA
          </span>
        </div>
      </div>
    );
  }

  if (icon === "gt") {
    return (
      <div className="flex items-center gap-2">
        <img className="h-8 w-8" src={logo} alt={`${name} logo`} />

        <div className="flex items-center">
          <span className="text-[13px] font-bold text-[#F1EFE8]">#Giving</span>
          <span className="text-[13px] font-bold text-[#F5C300]">Tuesday</span>
          <span className="text-[13px] font-bold text-[#E63329]">PH</span>
        </div>
      </div>
    );
  }

  if (icon === "kaisahan") {
    return (
      <div className="flex items-center gap-2">
        <img className="h-8 w-8" src={logo} alt={`${name} logo`} />

        <span
          className="text-[15px] font-bold tracking-wider"
          style={{ color: accentColor }}
        >
          KAISAHAN
        </span>
      </div>
    );
  }

  // Default: Product STORE
  return (
    <div className="flex items-center gap-2">
      <img className="h-8 w-8" src={logo} alt={`${name} logo`} />

      <div className="flex items-center gap-1">
        <span className="text-[15px] font-normal text-[#F1EFE8]">Product</span>
        <span className="text-[15px] font-bold text-[#1a1a18] bg-[#F1EFE8] px-[6px] py-[2px] rounded-[3px] tracking-wider uppercase">
          Store
        </span>
      </div>
    </div>
  );
};

const tagColor = (tag) => {
  let colorbg = "";
  if (tag === "React.js") {
    colorbg = "bg-[#3e7d8b]";
  } else if (tag === "Tailwind CSS") {
    colorbg = "bg-[#2b567e]";
  } else if (tag === "FakeStore API") {
    colorbg = "bg-[#62326e]";
  } else if (tag === "JavaScript") {
    colorbg = "bg-[#7e773b]";
  } else if (tag === "Figma") {
    colorbg = "bg-[#0e82d4]";
  }
  return colorbg;
};

const Badge = ({ project }) => {
  const { description, tags, stats, accentColor, isRedesign, liveUrl } =
    project;

  return (
    <div className="bg-[#1a1a18] border border-[#3a3a38] rounded-xl p-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <ProjectLogo project={project} />
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn text-[11px] font-bolder px-3 py-1 rounded-full bg-[#2C2C2A] border border-[#3a3a38] no-underline whitespace-nowrap"
            style={{ color: accentColor }}
          >
            ↗ visit
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-[12px] text-[#888780] leading-relaxed mb-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`text-[11px] px-3 py-1 rounded-full ${tagColor(tag)} text-[#ffffff] border border-[#3a3a38]`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#2C2C2A] pt-3 flex items-center gap-4">
        {/* Redesign badge or stats */}
        {isRedesign ? (
          <div className="flex items-center gap-2 bg-[#2C2C2A] border border-[#3a3a38] rounded-lg px-3 py-1.5">
            <IconRedesign color={accentColor} />
            <span className="text-[12px] font-medium text-[#B4B2A9]">
              Website Redesign
            </span>
          </div>
        ) : (
          stats?.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[15px] font-medium text-[#F1EFE8] m-0">
                {stat.value}
              </p>
              <p className="text-[11px] text-[#5F5E5A] m-0">{stat.label}</p>
            </div>
          ))
        )}

        {/* Responsive icon — always shown */}
        <div className="ml-auto text-center">
          <p className="flex items-center gap-1 text-[15px] font-medium text-[#F1EFE8] m-0">
            <IconResponsive /> Web
          </p>
          <p className="text-[11px] text-[#5F5E5A] m-0">responsive</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
