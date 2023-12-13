import { Observable } from "rxjs";

const obs = new Observable((subscriber) => {
  subscriber.next(123);
  subscriber.next("toto");
  const timer = setTimeout(() => {
    console.log("start settimeout");
    subscriber.next(false);
    subscriber.complete();
  }, 2000);

  return () => {
    console.log("on fait le menage");
    clearTimeout(timer);
    console.log("fin du menage");
  };
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

const subscription = obs.subscribe(observer);
setTimeout(() => {
  console.log("about to unsubscribe");
  subscription.unsubscribe();
  console.log("unsubscribed");
}, 1000);
