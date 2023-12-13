export type millisecond = number;

export const sleep = (delay: millisecond) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, delay);
  });
