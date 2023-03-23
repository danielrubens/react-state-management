import fs from 'fs'

const components = process.argv.slice(2);
if (!components.length) {
  console.error('Please specify at least one component name.');
  process.exit(1);
}

components.forEach((component) => {
  const componentContent = `import React from 'react';

  const ${component} = () => {
    return (
      <div>
        {/* Component content */}
      </div>
    );
  };

  export default ${component};`;

  fs.writeFileSync(`${component}.js`, componentContent);
  console.log(`Component ${component}.js created successfully!`);
});
