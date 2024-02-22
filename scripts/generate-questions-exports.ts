import path from 'path';
import fs from 'fs-extra';

const toCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));

const questionsDir = path.join(process.cwd(), 'src/pages/q');
const questions = fs.readdirSync(questionsDir).filter((file) => file.endsWith('.mdx'));

const imports = questions
  .map((file) => {
    const name = toCamelCase(file.replace('.mdx', ''));
    return `import { meta as ${name} } from './pages/q/${file}';`;
  })
  .join('\n');

const questionsArray = questions.map((file) => toCamelCase(file.replace('.mdx', ''))).join(',\n  ');

const output = `${imports}

export const MDX_DATA = [
  ${questionsArray},
];
`;

fs.writeFileSync(path.join(process.cwd(), 'src/mdx.ts'), output);
