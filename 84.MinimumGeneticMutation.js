function minMutation(startGene, endGene, bank) {
  const queue = [[startGene, 0]];
  const visited = new Set([startGene]);
  const possibleChanges = ["A", "C", "G", "T"];

  while (queue.length > 0) {
    const [currentGene, mutations] = queue.shift();

    if (currentGene === endGene) {
      return mutations;
    }

    for (const gene of bank) {
      let diff = 0;
      for (let i = 0; i < currentGene.length; i++) {
        if (currentGene[i] !== gene[i]) {
          diff++;
        }
      }

      if (diff === 1 && !visited.has(gene)) {
        queue.push([gene, mutations + 1]);
        visited.add(gene);
      }
    }
  }

  return -1;
}
