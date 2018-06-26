import Mock from 'mockjs';

Mock.mock('http://localhost:8080/api/data', 'post', (req, res) => {
  return ['a', 'b'];
});

export default Mock;
