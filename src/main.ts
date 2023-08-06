kintone.events.on(
  "app.record.index.show",
  (event: eventTypes["app.record.index.show"]) => {
    alert("Hello, kintone customize!!");
  }
);
