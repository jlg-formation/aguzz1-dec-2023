import { Subject } from "rxjs";

const observer = (name) => ({
  next: (x) => {
    console.log(`${name} x: `, x);
  },
  error: (err) => {
    console.log(`${name} err: `, err);
  },
  complete: () => {
    console.log(`${name} complete`);
  },
});

const subject = new Subject();

subject.next(1);

const s1 = subject.subscribe(observer("s1"));
const s2 = subject.subscribe(observer("s2"));
const s3 = subject.subscribe(observer("s3"));

subject.next(34);

s1.unsubscribe();

subject.next(56);

s2.unsubscribe();
s3.unsubscribe();
