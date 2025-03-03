const canConstruct = (ransomNote, magazine) => {
  if (!ransomNote) return true;
  if (!magazine) return false;

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazine.includes(ransomNote[i])) return false;

    magazine = magazine.replace(ransomNote[i], "");
  }

  return true;
};
