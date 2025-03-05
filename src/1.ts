import { v4 as uuid } from 'uuid';

const getRandomTsCode = () => {
  const code = uuid();
  return code;
};
