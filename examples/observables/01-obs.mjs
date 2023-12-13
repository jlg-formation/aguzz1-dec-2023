import { Observable } from "rxjs";

const obs = new Observable((subscriber) => {
  subscriber.next(123);
  subscriber.next("toto");
  subscriber.next(false);
  subscriber.complete();
});

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

obs.subscribe(observer);
