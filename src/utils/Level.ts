function Level(
  roles: string,
  organizationLevel: number,
  organizationName: string,
): boolean {
  if (roles === 'junior' && organizationLevel === 2) {
    console.log(`${organizationLevel}jr`);
    return true;
  }
  if (roles === 'middle') {
    if (organizationLevel === 1 || organizationLevel === 2) {
      console.log(`${organizationLevel}m`);
      return true;
    }
  } else if (roles === 'senior') {
    if (
      organizationLevel === 0 ||
      organizationLevel === 1 ||
      organizationLevel === 2
    ) {
      console.log(`${organizationLevel}s`);
      return true;
    }
  } else if (roles === 'intern') {
    if (
      organizationLevel === 0 ||
      organizationLevel === 1 ||
      organizationLevel === 2
    ) {
      console.log(`${organizationLevel}a`);
      return true;
    }
  }
  return false;
}

export { Level };
