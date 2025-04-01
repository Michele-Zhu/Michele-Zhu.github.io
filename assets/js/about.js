// Icons provided by https://devicon.dev/

const categories = {
  'Languages and IDE': [
    // Languages
    { icon: 'python', isClickable: false },
    { icon: 'matlab', isClickable: false },
    { icon: 'c', isClickable: false },
    { icon: 'csharp', hint: 'C#', isClickable: false },
    // IDE
    { icon: 'vscode', hint: 'Visual Studio Code', isClickable: false },
    { icon: 'pycharm', isClickable: false },
    { icon: 'eclipse', isClickable: false },
  ],
  frameworks: [
    { icon: 'numpy', isClickable: false },
    { icon: 'jupyter', isClickable: false },
    { icon: 'tensorflow', iconType: 'original', isClickable: false },
    { icon: 'pytorch', isClickable: false },
    { icon: 'keras', isClickable: false },
    { icon: 'scikitlearn', isClickable: false },
    { icon: 'pandas', isClickable: false },
    { icon: 'django', isClickable: false },
    { icon: 'djangorest', isClickable: false },
    { icon: 'bootstrap', isClickable: false },
    { icon: 'unity', isClickable: false },
    { icon: 'arduino', isClickable: false },
  ],
  'Host, deployment and CI/CD': [
    { icon: 'docker', isClickable: false },
    { icon: 'git', isClickable: false },
    { icon: 'github', hint: 'GitHub', isClickable: false },
  ],
  databases: [
    { icon: 'sqlite', hint: 'SQLite', isClickable: false },
    { icon: 'mysql', hint: 'MySQL', isClickable: false },
    { icon: 'postgresql', hint: 'PostgreSQL', isClickable: false },
  ],
  others: [
    { icon: 'windows11', isClickable: false },
    { icon: 'powershell', isClickable: false },
    { icon: 'linux', isClickable: false },
    { icon: 'bash', isClickable: false },
    { icon: 'blender', iconType: 'original', isClickable: false },
    // doc formats
    { icon: 'json', hint: 'JSON', isClickable: false },
    { icon: 'yaml', hint: 'YAML', isClickable: false },
    { icon: 'markdown', isClickable: false },
    { icon: 'latex', isClickable: false },
  ],
};

const container = document.getElementById('tools');

if (!container) {
  console.error("Error: The element with ID 'tools' was not found in the DOM.");
} else {
  Object.keys(categories).forEach((category) => {
    const section = document.createElement('div');
    section.classList.add('category');

    const title = document.createElement('h3');
    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    section.appendChild(title);

    categories[category].forEach((tool) => {
      const icon = tool.icon;
      const iconType = tool.iconType ?? 'plain';
      const tag = tool.tag ?? icon;
      const title = tool.hint ?? tool.icon;
      const isClickable = tool.isClickable ?? true;

      const anchor = document.createElement('a');
      const classes = isClickable ? ['tool'] : ['tool', 'disabled'];
      anchor.classList.add(...classes);
      if (isClickable) {
        anchor.href = `/tags/${tag}`;
      }
      anchor.title = title.charAt(0).toUpperCase() + title.slice(1);

      const content = document.createElement('i');
      content.className = `tool-icon devicon-${icon}-${iconType}`;

      anchor.appendChild(content);
      section.appendChild(anchor);
    });

    container.appendChild(section);
  });

  // Event Listeners for Hover and Touch Effects
  document.querySelectorAll('.tool-icon').forEach((ti) => {
    ['mouseenter', 'touchstart'].forEach((event) =>
      ti.addEventListener(
        event,
        () => {
          ti.classList.add('colored');
          ti.parentElement.classList.add('hovered');
        },
        { passive: true }
      )
    );
    ['mouseleave', 'touchend', 'touchcancel'].forEach((event) =>
      ti.addEventListener(
        event,
        () => {
          ti.classList.remove('colored');
          ti.parentElement.classList.remove('hovered');
        },
        { passive: true }
      )
    );
  });
}
