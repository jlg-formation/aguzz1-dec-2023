import { interval, startWith, take, map } from "rxjs";

const observer = {
  next: (x) => {
    console.log("x: ", x);
  },
  error: (err) => {
    console.log("err: ", err);
  },
  complete: () => {
    console.log("complete");
  },
};

// map((x) => x + 1)(take(4)(startWith(-1)(interval(1000)))).subscribe(observer);

interval(1000)
  .pipe(
    startWith(-1),
    take(4),
    map((x) => x + 1)
  )
  .subscribe(observer);
