import Mock from 'mockjs';

Mock.mock('/api/data', 'POST', (req, res) => {
  return {
    data: ['a', 'b']
  };
});

export default Mock;
