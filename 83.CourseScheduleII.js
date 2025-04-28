function findOrder(numCourses, prerequisites) {
  const adj = Array(numCourses)
    .fill(null)
    .map(() => []);
  const inDegree = Array(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const result = [];
  while (queue.length > 0) {
    const course = queue.shift();
    result.push(course);

    for (const nextCourse of adj[course]) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
